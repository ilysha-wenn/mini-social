const User = require('./model');
const UserRole = require('./modelRole');
const { validationResult } = require('express-validator');
const service = require('./service')


module.exports.Registration = async(req, res) => {
    try{ const errors = validationResult(req);
         if(!errors.isEmpty()) return res.json(errors)
         const user = await service.Registration(req.body, req.files.picture);
         res.json(user);
       }catch(e){ res.status(500).json(e.message)};
}

module.exports.Login = async(req, res) => {
    try{ const userLog = await service.Login(req.body);
         res.json(userLog);
    }catch(e) { res.status(500).json(e.message)};
}


module.exports.userRole = async(req, res) => {
    try{ const userRoles = new UserRole();
         await userRoles.save();
         res.json('Good');
    }catch(e) { res.status(500).json(e)}
}

module.exports.GetAll = async(req, res) =>{
    try{ const users = await User.find();
         res.json(users);
        }catch(e){ res.status(500).json(e)};
}

