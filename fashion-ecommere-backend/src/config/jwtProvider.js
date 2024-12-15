const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET_KEY || "fallbacksecret"; // Store in environment variable for security

// Generate a JWT
const generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
};

// Verify a JWT and extract userId
const getUserIdFromToken = (token) => {
  try {
    if (!token) {
      console.error("Token is missing");
      return null;
    }

    const decodedToken = jwt.verify(token, SECRET_KEY); // Ensure SECRET_KEY is securely managed
    if (!decodedToken.userId) {
      console.error("Token does not contain userId");
      return null;
    }

    return decodedToken.userId;
  } catch (error) {
    console.error("Invalid or expired token:", error.message);
    return null; // Graceful fallback for invalid tokens
  }
};

module.exports = { generateToken, getUserIdFromToken };
