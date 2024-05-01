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
    type:String
  },
  timeout:{
    type:String
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
  }
});

const Feedback = mongoose.model('feedback', feedbackSchema);
module.exports = Feedback;