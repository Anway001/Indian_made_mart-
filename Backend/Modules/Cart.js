const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
   
})

const  CartModel = mongoose.model("cart", CartSchema)
module.exports = CartModel
