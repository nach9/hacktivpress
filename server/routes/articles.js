var express = require('express');
var router = express.Router();
const ArticleController = require('../controllers/articles')

router.get('/',ArticleController.getAll )
router.get('/:id',ArticleController.getID )
router.post('/',ArticleController.addNew )
router.put('/:id',ArticleController.updateData )
router.delete('/:id',ArticleController.deleteData )


module.exports = router;
