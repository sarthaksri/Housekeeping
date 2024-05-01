const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestSchema = new Schema({
  rollno:{
    type : String,
    required : true
  },
  roomno:{
    type : String,
  },
  time:{
    type:String
  },
  date:{
    type:String
  },
  active:{
    type:String
  }
});

const Request = mongoose.model('request', requestSchema);
module.exports = Request;
