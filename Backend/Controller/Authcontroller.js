const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Modules/user");

const   SignUp = async (req, res) => {
    try{
        const {name,email,password}=req.body;
        const user = await UserModel.findOne({email});
        if (user){
           return res.status(400).json({message:"User already exist"});
        }
        const UserModel1 = new UserModel({name,email,password});
        UserModel1.password = await bycrpt.hash(password,10);
        await UserModel1.save();
        return res.status(200).json({message:"User created successfully"});

    }catch(err){
        return res.status(500).json({   
            message: "Internal server errror",
        
        });
        console.log(err)
        
    }
}
const Login = async (req, res) => {
    try{
        const {email,password}=req.body;
        const User = await UserModel.findOne({email});
        const errmsg = "Invalid email or password";
        if (!User){
            return res.status(400).json({message:errmsg});
            
        }
        const isMatch = await bycrpt.compare(password,User.password);
        if (!isMatch){
            return res.status(400).json({message:errmsg});
        }
        const jwtToken = jwt.sign({ email: User.email, id: User._id }, process.env.JWT_SECRET,
            { expiresIn: "24h" });

        return res.status(200).json({message:"Login successful",token:jwtToken,
        email ,
        name :User.name,
        });

    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: "Internal server error",
        })
        
    }
}

module.exports = {
    SignUp,
    Login
}