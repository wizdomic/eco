const router = require("express").Router();

const orderController = require("../controller/adminOrder.contoller");
const authenticate = require("../middlewares/authenticate");

router.get("/",authenticate,orderController.getAllOrders)
router.put("/:orderId/confirmed",authenticate,orderController.getConfirmedOrders)
router.put("/:orderId/ship",authenticate,orderController.getShippedOrders)
router.put("/:orderId/deliver",authenticate,orderController.getDeliveredOrders)
router.put("/:orderId/cancel",authenticate,orderController.cancelOrders)
router.put("/:orderId/delete",authenticate,orderController.deleteOrders)

module.exports = router;