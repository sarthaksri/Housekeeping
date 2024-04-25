const User = require('../schema/user.js');
const asyncHandler = require('express-async-handler');

exports.profile = asyncHandler(async(req,res)=>{
    try {
        const { rollno } = req.body;
        const profile =await User.findOne({rollno:rollno});
        if(!profile){
            return res.status(403).json({
                success: false,
                message: "No such user"
            });
        } 
        return res.status(200).json({
            success: true,
            message: "Profile",
            profile
        });
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});