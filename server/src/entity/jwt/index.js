const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports.generateAccsessToken = (id, roles, username) => {
    const payload = {id, roles, username};
    return jwt.sign(payload, config.secret, {expiresIn: "24h"});
}