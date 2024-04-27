const User = require('../schema/user.js');
const asyncHandler = require('express-async-handler');

exports.signup = asyncHandler(async (req, res) => {
    try {
        const { rollno, password, hostel, roomno } = req.body;
        if (!rollno || !password) {
            return res.status(403).json({
                success: false,
                message: "Fill all the details"
            });
        }

        const existinguser = await User.findOne({ rollno: rollno });
        if (existinguser) {
            return res.status(403).json({
                success: false,
                message: "USER ALREADY REGISTERED"
            });
        }

        const user = await User.create({
            rollno: rollno,
            password: password,
        });

        return res.status(200).json({
            success: true,
            message: "Sign up done",
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

exports.login = asyncHandler(async(req,res)=>{
    try {
        const { rollno, password } = req.body;
        if (!rollno || !password) {
            return res.status(403).json({
                success: false,
                message: "Fill all the details"
            });
        }
        const user = await User.findOne({ rollno: rollno});
        console.log(req.body);
        if (!user && user.password != password ) {
            return res.status(403).json({
                success: false,
                message: "Invalid Credentials"
            });
        }
        else
        {  
            return res.status(200).json({
            success: true,
            message: "Login Successful",
            user
        });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});