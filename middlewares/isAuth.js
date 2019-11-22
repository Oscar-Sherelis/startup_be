const jwt = require('jsonwebtoken');
const config = require('../config/auth').jwt;


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) 
    {
        return res.status(401).json({ message: 'Token not provided!' });
    }
    
    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, config.secret);
        if (payload.type !== config.tokens.access.type) {
            return res.status(401).json({ message: 'Invalid token!' });
        }
        res.userId = payload.userId
        
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: 'Token expired!' })
        }
        if (e instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'Invalid token!', token, authHeader })
            return;
        }
    }

    next();
};

module.exports = authenticateToken;
