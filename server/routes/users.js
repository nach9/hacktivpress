var express = require('express');
var router = express.Router();
const UserController = require('../controllers/users')

router.get('/',UserController.getAll )
router.post('/',UserController.register )


module.exports = router;
