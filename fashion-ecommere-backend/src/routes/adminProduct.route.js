const router = require("express").Router();

const authenticate = require("../middlewares/authenticate")
const adminProductController = require("../controller/product.controller")

router.post("/",authenticate,adminProductController.createProduct);
router.post("/creates",authenticate,adminProductController.createMultipleProducts)
router.delete("/:id",authenticate,adminProductController.deleteProduct)
router.put("/:id",authenticate,adminProductController.updateProduct)

module.exports = router
