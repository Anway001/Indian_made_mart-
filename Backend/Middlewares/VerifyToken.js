const jwt = require('jsonwebtoken');

// Middleware to verify the token//
function VerifyToken  (req, res, next)  {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });

    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next()
        
    }catch (err) {
        console.log(err);
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
}

module.exports = {VerifyToken};