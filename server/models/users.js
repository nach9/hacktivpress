var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connection.openUri(`mongodb://localhost/hactivepress-nach9`);

var userSchema = new Schema({
  name:String,
  username:{type: String,unique: true,required:true},
  password:{type: String,required:true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
