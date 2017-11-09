var express = require('express');
var router = express.Router();
const UserController = require('../controllers/users')

router.get('/',UserController.getAll )
router.post('/register',UserController.register )
router.post('/login',UserController.login )

module.exports = router;
