const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');


exports.login_post = asyncHandler(async (req, res) => {
    try {
        const { rollno, password } = req.body;
        const user = await User.findOne({ rollno:rollno });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
       
        res.json({
            success:true,
            message:"LOGGED IN SUCCESFULLY",
                user,
                payload
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

exports.signup = async (req,res)=>{
    try {
        const {rollno,password} = req.body;
        if(!rollno || !password){
            return res.status(403).json({
                success:false,
                message:"Fill all the details"
            })
        }

        const existinguser = await User.findOne({rollno:rollno});
        if(existinguser){
            return res.status(403).json({
                success: false,
                message: "USER ALREADY REGISTERED"
            })
        }

        const user  = await User.create({
            rollno:rollno,
            password:password
        })

        return res.status(200).json({
            success:true,
            message:"Sign up done",
            user
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'Internal Server Error'})
    }
}