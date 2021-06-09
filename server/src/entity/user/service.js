const User = require('./model');
const UserRole = require('./modelRole');
const fileService = require('../../serviceFiles/fileService');
const bcrypt = require('bcrypt');
const jwt = require('../jwt/index'); 

module.exports.Registration = async(user, picture) => { 
    const {email, username, password } = user;
    const fileName = fileService.saveFile(picture);

    const candidate = await User.findOne({email});
    if(candidate) throw new Error('Email not correct');

    const hashPassword = bcrypt.hashSync(password, 5);
    
    const userRole = await UserRole.findOne({role:'USER'});
    if(!userRole) res.json('Error find role');

    const newUser = await User.create({email, username, password: hashPassword, picture: fileName, role: [userRole.role]});
    return newUser;
}

module.exports.Login = async(user) => {
    const {email, password} = user;

    const account = await User.findOne({email});
    if(!account) throw new Error('email not in db');

    const checkPassword = bcrypt.compareSync(password, account.password);
    if(!checkPassword) throw new Error('password not in db');

    const jsonToken = jwt.generateAccsessToken(account._id, account.role, account.username);
    return jsonToken;
}
