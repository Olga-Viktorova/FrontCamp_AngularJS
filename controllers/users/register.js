'use strict';

var mongoose  = require('../../mongooseConf');
var User      = require('../../models/user');

module.exports = function(req, res, next) {
  var user = new User({ username: req.body.email, password: req.body.password});
  user.save(function(err) {
    return err
      ? next(err)
      : req.login(user, function(err) {
        return err
          ? next(err)
          : res.redirect('/articles');
      });
  });
};