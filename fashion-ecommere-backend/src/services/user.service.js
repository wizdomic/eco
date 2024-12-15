const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

//function for create user
const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    //find if the email is exist
    const isUserExist = await User.findOne({ email });


    //function if exist or not
    if (isUserExist) {
      throw new Error("User already exist with this email: ", email);
    }

    password = await bcrypt.hash(password, 8);

    //create user with email and password
    const user = await User.create({ firstName, lastName, email, password });

    console.log("created user: ", user);

    //return the user
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

//function for find user by id
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("User not found with id: ", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

//function for find user by email
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with email: ", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

//get user profile by token
const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await findUserById(userId);

    if (!user) {
      throw new Error("user not found with id: ", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  getUserByEmail,
  getUserProfileByToken,
  getAllUsers,
};
