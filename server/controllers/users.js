const User = require('../models/users')
var bcrypt = require('bcrypt');
const saltRounds = 10;

class UserController {
  static getAll (req,res) {
    User.find({})
    .then(result=>{
      res.status(200).json(result)
    }).catch(err=>{
      console.error(err);
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
      console.error(err);
    })
  }

}

module.exports = UserController;
