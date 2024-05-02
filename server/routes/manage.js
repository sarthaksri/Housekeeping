const express = require("express");
const router = express.Router();
const manage = require("../controllers/manage.controller.js"); // Changed import to require

// Student Register API : /manage/registerStudent
router.post("/registerStudent", manage.registerStudent);
// Worker Register API : /manage/registerWorker
router.post("/registerWorker", manage.registerWorker);
// Room cleaning request API : /manage/request
router.post("/cleanRequest", manage.cleanRequest);
// Feeback API : /manage/feedback
router.post("/feedback", manage.feedback);
// Allot Worker API : /manage/allotWorker
router.post("/allotWorker", manage.allotWorker);
// Get Requests API : /manage/getRequests
router.post("/getRequests", manage.getRequests);
// Dashboard API : /manage/dashboard
router.post("/dashboard", manage.dashboard);
// Suggestions API : /manage/getFeedback
router.post("/getFeedback", manage.getFeedback);

module.exports = router; 