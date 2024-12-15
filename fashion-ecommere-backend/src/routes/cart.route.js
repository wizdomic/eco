const router = require("express").Router();

const cartController = require("../controller/cart.controller");
const authenticate = require("../middlewares/authenticate");

router.get("/", authenticate, cartController.findUserCart);
router.put("/add", authenticate, cartController.addItemToCart);

module.exports = router;
