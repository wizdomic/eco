const express = require("express");


const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//auth routes
const authRouters = require("./routes/auth.route");
app.use("/auth", authRouters);

//user routes
const userRouters = require("./routes/user.route");
app.use("/api/users", userRouters);

//product routes
const productRouters = require("./routes/product.route");
app.use("/api/products", productRouters);

//adminProduct routes
const adminProductRouters = require("./routes/adminProduct.route");
app.use("/api/admin/products", adminProductRouters);

//cart Routes
const cartRouters = require("./routes/cart.route");
app.use("/api/cart", cartRouters);

//cartItem Routes
const cartItemRouters = require("./routes/cartItem.route");
app.use("/api/cart_items", cartItemRouters);

//order Routes
const orderRouters = require("./routes/order.route");
app.use("/api/orders", orderRouters);

//admin order Routes
const adminOrderRouters = require("./routes/adminOrder.route");
app.use("/api/admin/orders", adminOrderRouters);

//review Routes
const reviewRouters = require("./routes/review.route");
app.use("/api/reviews", reviewRouters);

//rating routes
const ratingRouters = require("./routes/rating.route");
app.use("/api/ratings", ratingRouters);

module.exports = app;
