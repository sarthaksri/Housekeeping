const express = require("express");
const router = express.Router();
const signup = require("../controllers/auth.controller.js"); // Changed import to require

// Signup API : /auth/signup
router.post("/signup", signup);

// //Login API : /auth/login
// router.post("/login", login);

module.exports = router; // Changed export default to module.exports
