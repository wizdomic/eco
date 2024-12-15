const cartItemService = require("../services/cartItem.service");

// function for updateCartItem
const updateCartItem = async (req, res) => {
  const user = await req.user;
  try {
    const updatedCartItem = await cartItemService.updateCartItem(
      user._id,
      req.params.id,
      req.body
    );
    return res.status(200).send(updatedCartItem);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

//function for remove cart item
const removeCartItem = async (req, res) => {
  try {
    const user = req.user._id; // Ensure this contains a valid user object
    if (!user) {
      return res.status(401).send({ error: "Unauthorized user" });
    }
    await cartItemService.removeCartItem(user, req.params.id);
    return res.status(200).send({ message: "Cart item removed successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  updateCartItem,
  removeCartItem,
};
