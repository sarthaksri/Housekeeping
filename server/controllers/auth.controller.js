const User = require('../schema/user.js');
const asyncHandler = require('express-async-handler');

const signup = asyncHandler(async (req, res) => {
    try {
        const { rollno, password } = req.body;
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
            password: password
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

module.exports = signup;
