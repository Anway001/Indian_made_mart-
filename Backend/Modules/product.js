const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    prod_name: {
        type: String,
        required: true
    },
    prod_price: {
        type: Number,
        required: true
    },
    prod_desc: {
        type: String,
        required: true
    },
    prod_stock: {
        type: Number,
        default: 0
    },
    prod_img: {
        type: String,
        // required: true
    },
    prod_category: {
        type: String,
        required: true
    }
   
})

const  ProductModel = mongoose.model("Product", productSchema)
module.exports = ProductModel
