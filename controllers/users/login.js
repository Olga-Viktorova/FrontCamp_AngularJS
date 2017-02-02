'use strict';

var config            = require('nconf');
var passport          = require('passport');
var LocalStrategy     = require('passport-local').Strategy;
var mongoose          = require('../../mongooseConf');
var User              = require('../../models/user');


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(username, password,done){
    User.findOne({ username : username},function(err,user){
      return err 
        ? done(err)
        : user
          ? password === user.password
            ? done(null, user)
            : done(null, false, { message: 'Incorrect password.' })
          : done(null, false, { message: 'Incorrect username.' });
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err,user){
      err 
        ? done(err)
        : done(null,user);
    });
  });


module.exports = function(req, res, next) {

  passport.authenticate('local',
    function(err, user, info) {
      console.log(user);
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('/articles');
            })
          : res.redirect('/fail');
    }
  )(req, res, next);
    
};