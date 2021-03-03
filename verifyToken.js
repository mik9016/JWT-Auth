const { func } = require('@hapi/joi');
const jwt = require('jsonwebtoken');

module.exports = function (req,res,next){
    const token = req.header('auth-token');
    const SECRET = process.env.TOKEN_SECRET;
    if(!token) return res.status(401).send('Access Denied');

    try{
        const verified = jwt.verify(token, SECRET);
        req.user = verified;
        next();
    }catch (err){
        res.status(400).send('invalid token')
    }
}