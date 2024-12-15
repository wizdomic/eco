const mongoose = require("mongoose").default;

const mongodbUrl =
  "mongodb+srv://wizdomic:12345@cluster0.khj4m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = () => {
  return mongoose.connect(mongodbUrl);
};

module.exports = { connectDb };
