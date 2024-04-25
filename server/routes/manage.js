const express = require("express");
const router = express.Router();
const manage = require("../controllers/manage.controller.js"); // Changed import to require

// Profile API : /manage/profile
router.post("/profile", manage.profile);
// Room cleaning request API : /manage/request


module.exports = router; 
