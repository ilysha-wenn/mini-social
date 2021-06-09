const jwt = require('jsonwebtoken');
const config = require('../entity/jwt/config');


module.exports.sign = (req, res, next) =>{
    if(req.method === 'OPTIONS') next();
    try { const jsonToken = req.headers.authorization.split(' ')[1];
          if(!jsonToken) return res.json('Token undef');
          const data = jwt.verify(jsonToken, config.secret);
          req.user = data;
          next();
    } catch (e) { return res.json(e.message) } 
}