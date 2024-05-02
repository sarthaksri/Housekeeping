const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const mongoConnect = require('./config/db.js');
mongoConnect();
app.use(express.json())
const port = process.env.PORT || 5000;

app.use((_req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      res.header('Access-Control-Allow-Methods', '*');
    next();
  })
  app.use(cors({
    origin:"*",
    credentials:true
  }))

  app.get("/",(req,res)=>{
    res.send("Hell, World");
  });

const auth = require('./routes/auth.js');
app.use("/auth", auth);
const manage = require("./routes/manage.js");
app.use("/manage", manage);
app.listen(port, function() {
    console.log("Server is running on port " + port);
});
