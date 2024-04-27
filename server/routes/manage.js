const express = require("express");
const router = express.Router();
const manage = require("../controllers/manage.controller.js"); // Changed import to require

// Profile API : /manage/registerStudent
router.post("/registerStudent", manage.registerStudent);
// Room cleaning request API : /manage/request
router.post("/cleanRequest", manage.cleanRequest);

module.exports = router; 
