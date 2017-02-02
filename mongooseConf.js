var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://volha:123456@ds041506.mlab.com:41506/heroku_5mldxthd');

module.exports = mongoose;
 
