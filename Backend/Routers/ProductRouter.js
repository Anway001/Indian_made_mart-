const router = require("express").Router();
const ProductsController = require('../Controller/ProductsController');
const multer = require('multer');

// Set up multer storage configuration // for image thing 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'ImagesBackend/');  // place where image should store //
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);  // Unique filename
    }
});

// Initialize multer with storage settings////
const upload = multer({ storage: storage });

// POST route for adding a product with an image/////
router.post('/', upload.single('prod_img'), ProductsController.addProduct);


router.get('/', ProductsController.getProducts);

module.exports = router;
