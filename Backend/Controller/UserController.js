const user = require('../Modules/user')

const getallUser = async (req, res) => {
    try{
        const allUser = await user.find();
        return res.status(200).json(allUser)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const addUser = async (req, res) => {
    try{
        const newUser = await user(req.body);
        await newUser.save();
        return res.status(200).json(newUser)
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}


module.exports = {getallUser, addUser}