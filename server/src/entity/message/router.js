const router = require('express').Router();
const controller = require('./controller');
const sign = require('./../../middlewares/signUp');

router.get('/message/room', sign.sign ,controller.GetAll);
router.get('/message/admin/:id', sign.sign  ,controller.GetOne);

router.post('/message/room',sign.sign  , controller.Create);
router.put('/message/change', sign.sign  ,controller.Update);
router.delete('/message/delete/:id', sign.sign  ,controller.Delete);


module.exports = router;