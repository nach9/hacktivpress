var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connection.openUri(`mongodb://localhost/hactivepress-nach9`);

var articleSchema = new Schema({
  title: String,
  content:String,
  category:String,
  author:{type: Schema.Types.ObjectId, ref: 'User'}
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
