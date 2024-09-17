const Products = require ('../Modules/product')

const addProduct = async (req, res) => {
    try{
        const {prod_name , prod_price, prod_desc,prod_stock, prod_image,prod_category} = req.body;
        const Product1 = new Products({
            prod_name,
            prod_price,
            prod_desc,
            prod_stock,
            prod_image,
            prod_category
        });
       
            const saveProduct = await Product1.save();
            return res.status(200).json(saveProduct);
        }catch (err) {
            console.log(err);
            return res.status(500).json({message:"sever Error : could not add product"});
        
    }
}

const getProducts = async (req, res) => {
    try{
        // fetch all products from database 
        const products = await Product.find();
        return res.status(200).json(products);


    }catch (err) {
        console.log(err);
        return res.status(500).json({message:"sever Error : could not get product"});
    }
}

module.exports = {
    addProduct,
    getProducts
}