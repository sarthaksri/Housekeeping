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
  },
  floor:{
    type:String
  },
  name:{
    type:String
  },
  timein:{
    type:String
  },
  timeout:{
    type:String
  }
});

const Request = mongoose.model('request', requestSchema);
module.exports = Request;
