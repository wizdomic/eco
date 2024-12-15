const router = require("express").Router();

const authenticate = require("../middlewares/authenticate")
const productController = require("../controller/product.controller")

router.get("/",authenticate,productController.getAllProducts);
router.get("/id/:id", authenticate, productController.findProductById);


module.exports = router;
