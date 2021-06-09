const router = require('express').Router();
const controller = require('./controller');
const sign = require('../../middlewares/signUp');

router.get('/posts', controller.GetAll);
router.get('/posts/:id', sign.sign, controller.GetOne);

router.post('/posts/create', sign.sign ,controller.Create);
router.put('/posts/update', sign.sign ,controller.Update);


module.exports = router;