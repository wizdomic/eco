const cartService = require("../services/cart.service");

//find user cart
const findUserCart = async (req, res) => {
  const userId = req.user.id;  // Use userId from the authenticated user

  try {
    const cart = await cartService.findUserCart(userId);
    if (!cart) {
      return res.status(404).send({ message: 'Cart not found' });
    }
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};



//Add item to cart
const addItemToCart = async (req, res) => {
  const userId = req.user.id // Make sure req.user is populated correctly

  try {
    const cartItem = await cartService.addCartItem(userId, req.body);
    return res.status(200).send({ message: 'Item added to cart', cartItem });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    return res.status(500).send({ error: error.message });
  }
};


  module.exports={
    findUserCart,
    addItemToCart
  }