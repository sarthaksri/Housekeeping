const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  rollno:{
    type : String,
    required : true
  },
  password: {
    type: String,
    required: true,
  },
  hostel:{
    type : String
  },
  roomno:{
    type : String
  },
  floor:{
    type:String
  },
  name:{
    type:String
  },
  type:{
    type:String
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
