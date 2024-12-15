//need user cart service
const userService = require("../services/user.service");
const CartItem = require("../models/cartItem.model");

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);

    if (!item) {
      throw new Error("Cart item not found with id: ", cartItemId);
    }

    const user = await userService.findUserById(userId);
    if (!user) {
      throw new Error("User not found with id: ", userId);
    }

    //10*399 example
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;
      await item.save();
      return "Cart item updated successfully";
    } else {
      throw new Error("Unauthorized to update this cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

//remove cart item
async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  console.log("Found CartItem:", cartItem);
  if (!cartItem) {
    throw new Error(`Cart item not found with id: ${cartItemId}`);
  }
  const user = await userService.findUserById(userId);
  console.log("Found User:", user);
  if (userId.toString() === cartItem.user.id.toString()) {
    return await CartItem.findByIdAndDelete(cartItemId);
  }
  throw new Error("Can't remove unauthorized cart item");
}

//find cart item by id
async function findCartItemById(cartItemId) {
  try {
    const cartItem = await CartItem.findById(cartItemId).populate("product").populate("cartItem");
    if (cartItem) {
      return cartItem;
    } else {
      throw new Error("Cart item not found with id: ", cartItemId);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  updateCartItem,
  removeCartItem,
  findCartItemById,
};
