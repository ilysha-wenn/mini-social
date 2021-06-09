const router = require('express').Router();
const controller = require('./controller');
const {check} = require('express-validator');
router.get('/users', controller.GetAll);

router.post('/users/registration',[
    check('email', 'Type email correct').isEmail().notEmpty(),
    check('username', 'Type correct.').notEmpty(),
    check('password', 'Type correct. More 4 and to 10').isLength({min: 4, max: 10})
] ,controller.Registration);

router.post('/users/login', controller.Login);

router.get('/users/role', controller.userRole);


module.exports = router;