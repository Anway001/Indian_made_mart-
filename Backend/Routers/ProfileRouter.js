const express = require("express");
const router = express.Router();
const {VerifyToken} = require("../Middlewares/VerifyToken");
const User = require("../Modules/user");



///routes to fetch user profile///
router.get('/profile', VerifyToken ,async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select("-password");////omits password from the user
        if (!user){
            res.status(404).json({message:"User not found"})
        }else{
            res.status(200).json(user)
        }
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

module.exports = router;