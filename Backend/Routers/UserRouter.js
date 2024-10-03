const express = require("express");
const bycrypt = require("bcrypt");
const User = require('../Modules/user')
const {VerifyToken} = require('../Middlewares/VerifyToken')
const router = express.Router();


/////Put router for updating user////
router.put ('/profile',VerifyToken,async(req,res)=>{
    try{
        console.log("req.user:", req.user);  // Log req.user

        const userId= req.user.id;//getting the user id from the token//
        
        const {name , email , address , password}= req.body;
        //finding the user by id//
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        //updating the user//
        if (name ) user.name = name;
        if (email ) user.email = email;
        if (address ) user.address = address;
        //if password to be change then hashing the password//
        if (password){
            const salt = await bycrypt.genSalt(10);
            user.password = await bycrypt.hash(password,salt);
        }
        //saving the updated user//
        await user.save();
        res.status(200).json({message:"User updated successfully"})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal server error"})
        
    }
})
module.exports= router;