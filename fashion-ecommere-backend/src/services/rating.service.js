const Rating = require("../models/rating.model");
const productService = require("../services/product.service");

//create a new rating
async function createRating(req, user) {
  try {
    const product = await productService.findProductById(req.productId);

    if (!product) {
      throw new Error("Product not found with id: ", req.productId);
    }

    const rating = new Rating({
      user: user._id,
      product: product._id,
      rating: req.body.rating,
      createdAt: new Date(),
    });
    return await rating.save();
  } catch (error) {
    throw new Error(error.message);
  }
}

//get all product ratings
async function getAllRatings(productId) {
  const product = await productService.findProductById(productId);

  if (!product) {
    throw new Error("Product not found with id: ", productId);
  }

  return await Rating.find({ product: productId });
}


module.exports = {
  createRating,
  getAllRatings,
};
