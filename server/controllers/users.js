const User = require('../models/users')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()

const saltRounds = 10;

class UserController {
  static getAll (req,res) {
    User.find({})
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(500).json(err)
    })
  }

  static register (req,res) {
    let hash = bcrypt.hashSync(req.body.password, saltRounds);
    let newuser={
      name: req.body.name,
      username: req.body.username,
      password: hash
    }
    User.create(newuser)
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      res.status(500).json(err)
    })
  }

  static login (req,res) {
    User.findOne({username:req.body.username})
    .then(result=>{
      let cpass=bcrypt.compareSync(req.body.password, result.password)
      if (cpass) {
        var tokenjwt = jwt.sign({ userid: result._id , username: result.username }, process.env.SECRET);
        res.status(200).json(tokenjwt)
      }else{
        res.status(500).json('wrong password')
      }
    }).catch(err=>{
      res.status(500).json(err)
    })
  }

}

module.exports = UserController;
