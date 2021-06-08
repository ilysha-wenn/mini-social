const router = require('express').Router();
const controller = require('./controller');

router.get('/posts', controller.GetAll);
router.get('/posts/:id', controller.GetOne);

router.post('/posts/create', controller.Create);
router.put('/posts/update', controller.Update);


module.exports = router;