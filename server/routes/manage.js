const express = require("express");
const router = express.Router();
const manage = require("../controllers/manage.controller.js"); // Changed import to require

// Profile API : /manage/registerStudent
router.post("/registerStudent", manage.registerStudent);
// Room cleaning request API : /manage/request
router.post("/cleanRequest", manage.cleanRequest);
// Feeback API : /manage/feedback
router.post("/feedback", manage.feedback);
module.exports = router; 
