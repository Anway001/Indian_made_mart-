const OrderModel = require('../Modules/Order')



const OrderController = async (req, res) => {
    try {
        const order = await OrderModel.find();
        res.status(200).json(order);

    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { 
    OrderController 
}
