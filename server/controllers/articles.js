const Article = require('../models/articles')

class ArticleController {
  static getAll(req,res){
    Article.find()
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(400).json(err)
    })
  }



}

module.exports = ArticleController;
