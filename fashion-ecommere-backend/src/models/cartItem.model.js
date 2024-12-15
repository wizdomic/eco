const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    user: { // Renamed for clarity and consistency
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: [1, "Quantity must be at least 1"],
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      default: function () {
        return this.price;
      },
    },
  },
  { timestamps: true }
);

const CartItem = mongoose.model("cartItems", cartItemSchema);

module.exports = CartItem;
