const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    productName:{
        type : String,
        required: true
    },
    productPrice:{
        type : Number,
        required: true
    },
    productQuantity:{
        type : Number,
        required: true
    },
    productImage:{
        type : String,
        required: true
    },
    productDescription:{
        type : String,
        required: true
    },
    productCategory:{
        type : String,
        required: true
    },
    productShipping:{
        type : String,
        required: true
    }
})

const OrderModel = mongoose.model("Order",OrderSchema);
module.exports = OrderModel;