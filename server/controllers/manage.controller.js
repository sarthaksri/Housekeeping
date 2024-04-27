const User = require('../schema/user.js');
const asyncHandler = require('express-async-handler');

exports.registerStudent = asyncHandler(async(req,res) =>{
    try{
        const {rollno, roomno, floor} = req.body;
        const updatedStudent = await User.findOneAndUpdate(
            { rollno: rollno },
            { $set: { roomno: roomno, floor: floor } },
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