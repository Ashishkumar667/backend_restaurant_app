const userSchema = require('../models/userSchema');
const bcrypt = require("bcrypt");

const express = require('express');

const router = express.Router();

const usercontroller = async (req, res) => {
    try {
        const user = await userSchema.findById({ _id: req.body.id });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User Not found'
            })
        }

        user.password = undefined

        res.status(200).send({
            success: true,
            message: 'User data get successfully',
            user,
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: "Error in getting user Api",
            err
        })
    }
}

//update user
const updateuserController = async (req, res) => {
    try {
        const User = await userSchema.findById({_id:req.body.id })

        if (!User) {
            return res.status(404).send({ message: 'User not found' })
        }

        const { Name, phone, address } = req.body;
        if (Name) {
            User.Name = Name
        }
        if (phone) {
            User.phone = phone;
        }
        if (address) {
            User.address = address
        }
        await User.save();
        res.status(200).send({ message: "User updated successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            mesage: "User can't updated",
        })
    }
}

//reset password
const resetpasswordController = async (req, res) => {
    try {
        const user = await userSchema.findById({ _id: req.body.id })

        if (!user) {
            return res.status(404).send({ message: 'User not found' })
        }

        const { oldpassword, newpassword } = req.body
        if (!oldpassword || !newpassword) {
            return res.status(500).send({ message: "please provide old as well as new password" })
        }
        const isMatch = await bcrypt.compare(oldpassword, user.password);


        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        user.password = newpassword;
        const hashedPassword = await bcrypt.hash(newpassword, 10);
        user.password =hashedPassword;
        await user.save();
        res.status(200).send({message:"Password updated successfully"})

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            mesage: "password couldn't updated",
        })
    }
}

//delete useraccount
const deleteuseraccount =async(req,res) =>{
 try {
    const user = await userSchema.findByIdAndDelete({_id: req.body.id});

    if(!user){
        res.status(500).send({message:"cannot find user"})
    }else{
        res.status(200).send({message:"your account has been deleted successfully"})
    }
 } catch (error) {
    console.log(error)
        res.status(500).send({
            success: false,
            mesage: "couldn't delete user account",
        })
 }
}
module.exports = {
    usercontroller,
    updateuserController,
    resetpasswordController,
    deleteuseraccount
};

