const User = require('../schema/user.js');
const Request = require('../schema/request.js');
const Feedback = require('../schema/feedback.js');
const asyncHandler = require('express-async-handler');

exports.registerStudent = asyncHandler(async(req,res) =>{
    try{
        const {rollno, roomno, floor, hostel} = req.body;
        const updatedStudent = await User.findOneAndUpdate(
            { rollno: rollno },
            { $set: { roomno: roomno, floor: floor, hostel : hostel } },
            { new: true }
          );
      
          if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
          }
      
          return res.status(200).json(updatedStudent);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

exports.cleanRequest = asyncHandler(async(req,res) =>{
  try{
     const {reqDate, reqTime, roomno, rollno, active} = req.body;
     const request = await Request.create({
          rollno: rollno,
          roomno: roomno,
          time: reqTime,
          date: reqDate,
          active : active
      });

      return res.status(200).json({
        success: true
    });
    }
  catch(error){
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
});

exports.feedback = asyncHandler(async(req,res) =>{
  try{
     const {rollno, roomno, reqDate, rate, timein, timeout, suggestions, complaints} = req.body;
     const feed = await Feedback.create({
          rollno: rollno,
          roomno: roomno,
          date: reqDate,
          rate: rate,
          timein: timein,
          timeout: timeout,
          suggestions: suggestions,
          complaints: complaints
      });
      //update the status of the corresponding request to
      //completed
      const updatedRequest = await Request.findOneAndUpdate(
                              {date: reqDate, rollno: rollno},
                              { $set: { active: 'completed' } },
                              { new: true }
                            );
      if(!updatedRequest) return res.status(404).json({ message: 'Request not found' });
      
      return res.status(200).json({
        success: true
    });
    }
  catch(error){
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
});