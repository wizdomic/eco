const router = require("express").Router();
const bcrypt = require("bcrypt");
const userController = require("../controller/user.controller");

// get profile
router.get("/profile", userController.getUserProfile);

// get all user
router.post("/", userController.getAllUsers);

module.exports = router;
