var express = require('express');
var router = express.Router();
const ArticleController = require('../controllers/articles')

router.get('/',ArticleController.getAll )
// router.post('/',ArticleController.login )



module.exports = router;
