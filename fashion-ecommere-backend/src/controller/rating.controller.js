// createRating,
// getProductRating,

const ratingService = require("../services/rating.service");

//function for creating a rating
const createRating = async (req, res) => {
  const user = req.user;
  try {
    const createdRating = await ratingService.createRating(req.body, user);
    return res.status(201).send(createdRating);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

//function for getting all reviews
const getAllRatings = async (req, res) => {
  const user = req.user;
  try {
    const allReviews = await ratingService.getAllRatings(req.params.productId);
    return res.status(200).send(allReviews);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createRating,
  getAllRatings,
};
