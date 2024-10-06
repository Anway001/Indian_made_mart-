const jwt = require('jsonwebtoken');
const User = require('../Modules/user');

// Middleware to verify the token//
const VerifyToken =async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });

    }
    try {
        const jwtToken= token.replace('Bearer ', '').trim();
        // console.log(jwtToken);
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        // console.log(decoded);
        const userData = await User.findOne({email:decoded.email}).select({password:0});


        req.token=token;
        req.user = userData;
        req.userId = User._id;
        next()
        
    }catch (err) {
        console.log(err);
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
}

module.exports = {VerifyToken};