import express from "express";
const router = express.Router();

var bodyParser=require('body-parser');
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded and - multipart/form-data
app.use(bodyParser.urlencoded({ extended: true }));


//Login API : /auth/login
import user from "../controllers/auth.controller.js";
router.post("/login",user.login_post);

//Signup API : /auth/signup
router.post("/signup",user.signup);

module.exports = router;