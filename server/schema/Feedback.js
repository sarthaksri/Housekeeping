const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  rollno:{
    type : String,
    required : true
  },
  roomno:{
    type : String,
  },
  timein:{
    type:String,
    default: "--:--"
  },
  timeout:{
    type:String,
    default: "--:--"
  },
  date:{
    type:String
  },
  rate:{
    type:String
  },
  suggestions:{
    type:String
  },
  complaints:{
    type:String
  },
  name:{
    type:String,
    default:"Not Alloted yet"
  }
});

const Feedback = mongoose.model('feedback', feedbackSchema);
module.exports = Feedback;
