const Article = require('../models/articles')

class ArticleController {
  static getAll(req,res){
    Article.find().populate('author')
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(400).json(err)
    })
  }

  static getID(req,res){
    Article.findOne({_id:req.params.id})
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(400).json(err)
    })
  }

  static addNew (req,res){
    Article.create(req.body)
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(400).json(err)
    })
  }

  static updateData (req,res){
    Article.findOneAndUpdate({_id:req.params.id},req.body)
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(400).json(err)
    })
  }

  static deleteData (req,res){
    Article.findOneAndRemove({_id:req.params.id})
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(400).json(err)
    })
  }

  static findCategory(req,res){
    Article.find({category: req.body.category})
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(400).json(err)
    })
  }

  static findAuthor(req,res){
    Article.find({author:req.body.author})
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(400).json(err)
    })
  }


}

module.exports = ArticleController;
