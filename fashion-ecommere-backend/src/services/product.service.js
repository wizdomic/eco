const Category = require("../models/category.model");
const Product = require("../models/product.model");

//create product function
async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
    await topLevel.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      level: 2,
      parentCategory: topLevel._id,
    });
    await secondLevel.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.secondLevelCategory,
      level: 3,
      parentCategory: secondLevel._id,
    });
    await thirdLevel.save();
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discoountedPrice: reqData.discoountedPrice,
    discountPresent: reqData.discountPresent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    quantity: reqData.quantity,
    sizes: reqData.size,
    category: thirdLevel._id,
  });

  return await product.save();
}

//function for delete product
async function deleteProduct(productId) {
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      throw new Error(`Product not found with id: ${productId}`);
    }
    return "Product deleted successfully";
  } catch (error) {
    console.error(`Error deleting product: ${error.message}`);
    throw new Error("An error occurred while deleting the product");
  }
}

//function for update product
async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData, { new: true });
}

//function for find product by id
async function findProductById(productId) {
  const product = await Product.findById(productId).populate("category").exec();
  if (!product) {
    throw new Error(`Product not found with id: ${productId}`);
  }
  return product;
}

//function for get all products
async function getAllProducts(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;

  pageSize = pageSize || 10;

  let query = Product.find().populate("category");

  if (category) {
    const existingCategory = await Category.findOne({ name: category });
    if (existingCategory) {
      query = query.where("category").equals(existingCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }

  //color
  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );

    //we will get array of color means multiple colors
    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

    query = query.where("color").regex(colorRegex);
  }

  //sizes
  if (sizes) {
    const sizeSet = new Set(sizes.split(",").map((size) => size.trim()));
    query = query.where("sizes.name").in([...sizeSet]);
  }

  if (minPrice && maxPrice) {
    query = query
      .where("discountedPrice")
      .gte(parseFloat(minPrice))
      .lte(parseFloat(maxPrice));
  }
  //minDiscount
  if (minDiscount) {
    query = query.where("discountPresent").gte(parseFloat(minDiscount));
  }

  //stock
  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock == "out_of_stock") {
      query = query.where("quantity").lte(0);
    }
  }

  //sort
  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    query = query.sort({ discoountedPrice: sortDirection });
  }

  //total products
  const totalProducts = await Product.countDocuments(query);

  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);

  const products = await query.exec();

  const totalPages = Math.ceil(totalProducts / pageSize);

  return { content: products, currentPage: pageNumber, totalPages };
}

async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}
module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
