const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required : true
    },
    phoneNo :{
        type : Number,
    },
    address : {
        type : String,
    }
})

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;
