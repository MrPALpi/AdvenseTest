const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
router.post('/login', UserController.auth)
router.get('/auth', UserController.check)
module.exports = router