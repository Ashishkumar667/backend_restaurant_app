const bcrypt = require('bcrypt');
const User = require('../models/userSchema');
const JWT = require('jsonwebtoken');


const registerController = async (req, res) => {
    try {
        const { Name, email, password, phone, address } = req.body;
        //validation
        if (!Name || !email || !password || !phone || !address) {
            return res.status(400).send('Please provide all the required fields.')
        };

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const Userdata = new User({
                Name,
                email,
                password: hashedPassword,
                phone,
                address,
            })
            await Userdata.save();
            res.status(201).send({
                success: true,
                message: 'Successfully Registered',
                Userdata,
            })

        } else {
            res.status(409).send('User already registered')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            succes: false,
            message: 'Error in register',
            error
        })
    }
}

const loginMethod = async (req, res) => {
    try {
        const { email, password } = req.body;

        const Userdata = await User.findOne({ email });

        if (!Userdata) {
           return res.status(400).send({
                success: false,
                message: 'User not found',
            })
        }

        const isMatch = await bcrypt.compare(password, Userdata.password);


        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        } else {
            console.log(Userdata);
            const token = JWT.sign({ id:Userdata._id }, process.env.JWT_SECRET, {
                expiresIn : "5d",
            })
            res.status(200).send({
                succes: true,
                message: 'You have successfully Login in our APP',
                token,
                Userdata,
            });
        }



    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in Login'
        })
    }

}

module.exports = { registerController, loginMethod }