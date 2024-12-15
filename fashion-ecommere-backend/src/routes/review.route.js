const router = require("express").Router();

const reviewController = require("../controller/review.controller");
const authenticate = require("../middlewares/authenticate");

//routes
router.post("/create", authenticate, reviewController.createReview);
router.get("/product/:productId", authenticate, reviewController.getAllReview);

module.exports = router;
