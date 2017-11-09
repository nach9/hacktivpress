var express = require('express');
var router = express.Router();
const ArticleController = require('../controllers/articles')

router.get('/',ArticleController.getAll )
router.get('/:id',ArticleController.getID )
router.post('/new',ArticleController.addNew )
router.put('/:id',ArticleController.updateData )
router.delete('/:id',ArticleController.deleteData )
router.post('/category',ArticleController.findCategory )
router.post('/author',ArticleController.findAuthor )


module.exports = router;
