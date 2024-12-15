const userService = require("../services/user.service");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart.service");

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = jwtProvider.generateToken(user.id);

    const cart = await cartService.createCart(user);

    return res.status(200).send({ jwt, message: "Register Success" });
  } catch (error) {
    return res.status(500).send({ error, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required" });
    }

    // Check if user exists
    const user = await userService.getUserByEmail(email);
    if (!user) {
      // Generic error message for better security
      return res.status(401).send({ message: "Invalid credentials" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwtProvider.generateToken(user._id); // Include necessary payload
    return res.status(200).send({ token, message: "Login Successful" });
  } catch (error) {
    console.error("Login error:", error); // Log detailed error for debugging
    return res.status(500).send({ message: "An error occurred during login" });
  }
};


module.exports = {
  register,
  login,
};
