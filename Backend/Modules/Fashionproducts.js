const express = require('express');
const mongoose = require('mongoose');
const Product = require('../Modules/product'); // Adjust path to your model

// Connect to your existing database
mongoose.connect('mongodb://localhost:27017/Indian_MM ', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fashionProducts = [
  {
    prod_name: "Floral patchwork jacket",
    prod_price: 790,
    prod_desc: "Floral jacket with plaid accents and ruffled collar.",
    prod_img: "https://i.pinimg.com/564x/44/fb/2b/44fb2bd3aa8fc052a3b9f46ffddbc7b7.jpg",
    prod_category: "Fashion",
    prod_stock: 10,
  },
  {
    prod_name: "Patchwork Dress",
    prod_price: 592,
    prod_desc: "A casual dress featuring a black top with a mixed-pattern patchwork skirt.",
    prod_img: "https://i.pinimg.com/564x/6d/2c/ab/6d2cabced26398f963f3b697054abb18.jpg",
    prod_category: "Fashion",
    prod_stock: 15,
  },
  // Add other fashion products similarly
];

// Insert fashion products into the database
async function insertFashionProducts() {
  try {
    await Product.insertMany(fashionProducts);
    console.log('Fashion products inserted successfully!');
  } catch (error) {
    console.error('Error inserting fashion products:', error);
  }
}

insertFashionProducts();
