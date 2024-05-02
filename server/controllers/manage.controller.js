const User = require('../schema/user.js');
const Request = require('../schema/request.js');
const Feedback = require('../schema/Feedback.js');
const asyncHandler = require('express-async-handler')

exports.registerStudent = asyncHandler(async(req,res) =>{
    try{
        const {rollno, roomno, name, floor, hostel, type} = req.body;
        const updatedStudent = await User.findOneAndUpdate(
            { rollno: rollno },
            { $set: { roomno: roomno,name: name, floor: floor, hostel : hostel, type: type } },
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

exports.registerWorker = asyncHandler(async(req,res) =>{
  try{
      const {rollno, name, floor, type} = req.body;
      const updatedStudent = await User.findOneAndUpdate(
          { rollno: rollno },
          { $set: {floor: floor, name : name, type: type } },
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

     const request = await Request.findOne({ rollno: rollno });
        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }
        const name = request.name;

     const feed = await Feedback.create({
          rollno: rollno,
          roomno: roomno,
          date: reqDate,
          rate: rate,
          timein: timein,
          timeout: timeout,
          suggestions: suggestions,
          complaints: complaints,
          name: name
      });
      //update the status of the corresponding request to
      //Completed
      const updatedRequest = await Request.findOneAndUpdate(
                              {date: reqDate, rollno: rollno},
                              { $set: { active: 'Completed', timein : timein, timeout: timeout } },
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

exports.getRequests = asyncHandler(async (req,res) => {
  try {
      // Find all requests where active is "raised"
      const requests = await Request.find({ active: "raised" });
      //add roomno and floor to requests
      for (let i = 0; i < requests.length; i++) {
          const user = await User.findOne({ rollno: requests[i].rollno });
          requests[i].roomno = user.roomno;
          requests[i].floor = user.floor;
      };
      //convert requests to json and send it
      return res.status(200).json(requests);
  } catch (error) {
      // Handle any errors
      console.error("Error fetching requests:", error);
      throw new Error("Error fetching requests");
  }
});

exports.dashboard = asyncHandler(async (req,res) => {
  try {
    const requests = await Request.find();
    for (let i = 0; i < requests.length; i++) {
      const user = await User.findOne({ rollno: requests[i].rollno });
      requests[i].roomno = user.roomno;
      requests[i].floor = user.floor;
  };
    res.status(200).json(requests);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
}
});
  
exports.getFeedback = asyncHandler(async (req,res) => {
  try {
      // Find all requests where active is "raised"
      const feedback = await Feedback.find();

      console.log(feedback);
      //convert requests to json and send it
      return res.status(200).json(feedback);
  } catch (error) {
      // Handle any errors
      console.error("Error fetching requests:", error);
      throw new Error("Error fetching requests");
  }
});

exports.allotWorker = asyncHandler(async(req,res) =>{
  try{
     const {rollno, roomno, reqDate, floor, reqTime, name} = req.body;
     const updatedRequest = await Request.findOneAndUpdate(
      {date: reqDate},
      { $set: { active: 'Alloted', name: name } },
      { new: true }
    );
    if(!updatedRequest) return res.status(404).json({ success: false, message: 'Request not found' });
    return res.status(200).json({
      success: true
    });
    }
  catch(error){
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
});

