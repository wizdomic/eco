// createReview,
//   getAllReview,
const reviewService = require("../services/review.service");

// function for create review
const createReview = async (req, res) => {
  const user = req.user;
  try {
    let createdReview = await reviewService.createReview(req.body, user);
    return res.status(201).send(createdReview);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

//function for get all review
const getAllReview = async (req, res) => {
  try {
    let allReviews = await reviewService.getAllReview(req.params.productId);
    return res.status(200).send(allReviews);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createReview,
  getAllReview,
};
