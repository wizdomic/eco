const router = require("express").Router();
const bcrypt = require("bcrypt");
const authController = require("../controller/auth.controller");

// Register new user
router.post("/signup", authController.register);

// Login user
router.post("/signin", authController.login);

module.exports = router;
