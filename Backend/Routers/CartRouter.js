const express = require("express");
const router = express.Router();
const CartController = require('../Controller/CartController');


//post router //
router.post("/", CartController.addtocart);





module.exports = router;