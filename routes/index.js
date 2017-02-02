var express 				= require('express');
var router 					= express.Router();
var user 					= require('../models/user')

//var requireTree 			= require('require-tree');
//var controllers 			= requireTree('../controllers');
var mustAuthenticatedMw 	= require('../middlewares/must-authenticated');  

router.get('/',function(req,res,next){	
	res.render('Starter',{title:"Super App"});	
});

//router.get('/articles/articles', function(req, res, next) {
 // res.render('index');
	
	// ArticleModel.find({}, function(err, articles) {
 	// 	res.render('index', { articles: articles, user: req.user });
 	//});
//});
// router.get('/', function(req, res, next) {
// 	res.render('index');
// });

router.get('/login', function(req, res, next) {
  res.render('user/login');
});

router.get('/register', function(req, res, next) {
  res.render('user/register');
});

router.get('/fail', function(req, res, next) {
  res.render('fail');
});

router.post('/login', function(req, res, next) {
	var login = require('../controllers/users/login');
    login(req, res, next);
});

router.post('/register',  function(req, res, next) {
	var register = require('../controllers/users/register');
	register(req, res, next);
});

router.get('/logout', function(req, res) {
	var logout = require('../controllers/users/logout');
	logout(req, res);
});

  // Basic routes
/*router.get('/login', 	       controllers.render('user/login'));
router.get('/register', 	   controllers.render('user/register'));
router.get('/fail',            controllers.render('fail'));

router.post('/login', 		   controllers.users.login);
router.post('/register', 	   controllers.users.register);
router.get('/logout', 		   controllers.users.logout);*
*/

module.exports = router;
