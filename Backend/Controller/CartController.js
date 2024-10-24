const User = require('../Modules/user');
const Cart = require('../Modules/Cart');
const Product = require('../Modules/product')
const mongoose = require('mongoose');
const express = require('express');

const addtocart = async (req, res) => {
    try{
        const user = await User.findById(req.user.id);
        const product = await Product.findById(req.body.product);
        if(!product){
            res.status(404).json({message: "Product not found"})
        }
        if (!user){
            res.status(404).json({message: "User not found"})
        }
        const cartDetail = await cart.create({ user: new mongoose.Types.ObjectId(user._id), product:new mongoose.Types.ObjectId(product._id) });
        if (!cartDetail) {
            return res.status(400).json({ message: "Failed to add product to cart" });
        }
        return res.status(200).json({ message: "Product added to cart", cartDetail });
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = { addtocart };