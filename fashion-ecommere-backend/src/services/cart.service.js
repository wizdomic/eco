const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");

async function createCart(user) {
  try {
    const cart = new Cart({ user });
    // Save the created cart
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Find user cart
async function findUserCart(userId) {
  try {
    let cart = await Cart.findOne({ user: userId }).populate("cartItems");

    if (!cart) {
      throw new Error("Cart not found for user");
    }

    // Populate the cart with items
    let cartItems = await CartItem.find({ cart: cart._id }).populate("product");

    cart.cartItems = cartItems;
    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for (const cartItem of cart.cartItems) {
      totalPrice += cartItem.price * cartItem.quantity;
      totalDiscountedPrice += cartItem.discountedPrice * cartItem.quantity;
      totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.discount = totalPrice - totalDiscountedPrice;
    cart.totalItem = totalItem;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Add cart item function
async function addCartItem(userId, req) {
  try {
    // Find or create the cart for the user
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      // If no cart is found, create one
      cart = await createCart(userId);
    }

    const product = await Product.findById(req.productId);
    if (!product) {
      throw new Error("Product not found");
    }

    // Check if product already exists in the cart
    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      userId,
    });

    if (!isPresent) {
      console.log("cart item data");
      // If product is not already in cart, create a new cart item
      const cartItem = new CartItem({
        user:userId, // Change to match the schema field name
        cart: cart._id,
        product: product._id,
        quantity: req.quantity || 1,
        price: product.price,
        size: req.size,
        discountedPrice: product.discountedPrice || product.price, // Fallback to original price
      });

      try {
        const createdCartItem = await cartItem.save();
        cart.cartItems.push(createdCartItem);
        await cart.save();
        return createdCartItem;
      } catch (error) {
        if (error.errors) {
          console.error("Validation Errors:", error.errors); // Logs specific validation issues
        }
        console.error("Error:", error.message);
        throw new Error("Failed to save cart item");
      }
    } else {
      // If the item is already in the cart, you could update quantity instead
      return "Item already in cart";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { createCart, findUserCart, addCartItem };
