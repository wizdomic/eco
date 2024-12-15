const router = require("express").Router();

const ratingController = require("../controller/rating.controller");
const authenticate = require("../middlewares/authenticate");

router.post("/create", authenticate, ratingController.createRating);
router.put("/product/:productId", authenticate, ratingController.getAllRatings);

module.exports = router;
