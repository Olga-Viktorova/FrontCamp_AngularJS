'use strict';

var mongoose = require('../mongooseConf');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  books: []
});

var User = mongoose.model('user', UserSchema);

module.exports = User;