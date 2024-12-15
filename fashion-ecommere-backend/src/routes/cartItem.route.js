const router = require("express").Router();

const cartItemController = require("../controller/cartItem.controller");
const authenticate = require("../middlewares/authenticate");

router.put("/:id", authenticate, cartItemController.updateCartItem);
router.delete("/:id", authenticate, cartItemController.removeCartItem);

module.exports = router;
