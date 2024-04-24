const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
const mongoConnect = require('./config/db.js');
mongoConnect();

const port = process.env.PORT || 5000;

const auth = require('./routes/auth.js');
app.use("/auth", auth);
app.listen(port, function() {
    console.log("Server is running on port " + port);
});
