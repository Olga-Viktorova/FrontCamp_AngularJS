var ArticleModel = require('../models/article');

var main = angular.module("articleApp", ['ui.router','ngRoute','ngResource'])

main.config([
    '$locationProvider', '$routeProvider', '$httpProvider',
    function ($locationProvider, $routeProvider, $httpProvider) {
        $routeProvider
            .when('/articles', {
                template: '<articles></articles>'
            })
            .when('/addArticle', {
                template: '<quote></quote>'
            })
            .when('/updateArticle:id?', {
                template: '<quote-proposed-list></<quote-proposed-list>>'
            })
        .otherwise('/index');
    }
]);

angular.module('articleApp').component('articles', {
  //templateUrl: "../Scripts/app/quote/template/quote.template.html",
   template: `<div ng-repeat = "art in $ctrl.articles">
                <div className="article">
                    <img src={art.imagelink} className="img"/>
                    <a href={art.acticlelink} className="link">{art.title}</a>
                    <h4>{art.description}</h4>
                    <h4>By: {art.author}</h4>
                    <div className="inline"> 
                        <form action="articles/update" method="get">
                            <input name="id" value={art._id} type="hidden"/>
                            <button className="button" id="updateArticleButton" type="submit">Update</button>
                        </form>
                    </div>	
                    <div className="inline"> 
                        <form action="articles/delete" method="get">
                            <input name="id" value={art._id} type="hidden"/>
                            <button className="button" id="updateArticleButton" type="submit">Delete</button>
                        </form>
                    </div>								
			    </div>
            </div>`,
   
    controller: function articleListController(quoteService, $routeParams) {
    var self = this;

    self.articles = ArticleModel.find({}, function(err, articles) {
 		return { articles: articles, user: req.user };
 	}); 

    // self.toPropose = function () {
    //   config.redirect(config.proposeUrl);
    // }

    // self.$onInit = function () {
    //   if (!$routeParams.id === false) {
    //     self.isStaticLink = true;
    //   }
      // self.quote = self.isStaticLink
      //   ? quoteService.getQuote($routeParams.id).then(config.responseProcess)
      //   : quoteService.getRandom().then(config.responseProcess);
    }
  //}
});
