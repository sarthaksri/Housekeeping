const express = require("express");
const router = express.Router();
const user = require("../controllers/auth.controller.js"); // Changed import to require

// Signup API : /auth/signup
router.post("/signup", user.signup);

//Login API : /auth/login
router.post("/login", user.login);

module.exports = router; 
