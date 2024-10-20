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
        const products = await Products.find();
        return res.status(200).json(products);


    }catch (err) {
        console.log(err);
        return res.status(500).json({message:"sever Error : could not get product"});
    }
}

const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedProduct = await Products.findByIdAndDelete(id);
        return res.status(200).json(deletedProduct);

    }catch (err) {
        console.log(err);
        return res.status(500).json({message:"sever Error : could not delete product"});
    }
}

const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const updatedProduct = await Products.findByIdAndUpdate(id, req.body, {new:true});
        return res.status(200).json(updatedProduct);
    }catch (err) {
        console.log(err);
        return res.status(500).json({message:"sever Error : could not update product"});
    }
}

module.exports = {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct
}