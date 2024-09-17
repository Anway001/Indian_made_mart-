const router = require("express").Router();
const ProductsController=require('../Controller/ProductsController')

//router post //

router.post('/',ProductsController.addProduct)

//router get //
router.get('/',ProductsController.getProducts)

module.exports = router;
