const express = require('express');
const router = express.Router();
const Product = require('../Modules/product'); // Adjust path to your Product model

// Get all fashion products from the database
router.get('/', async (req, res) => {
  try {
    const fashionProducts = await Product.find({ prod_category: 'Fashion' });
    res.json(fashionProducts); // Send the fashion products as a JSON response
  } catch (error) {
    console.error('Error fetching fashion products:', error);
    res.status(500).json({ message: 'Error fetching products from the database' });
  }
});

module.exports = router;
