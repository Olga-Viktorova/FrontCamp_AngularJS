var myApp = angular.module('articleApp', ['ui.router', 'ui.bootstrap' , 'ngRoute', "ngResource"])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
     // $locationProvider.html5Mode(true);
      $routeProvider
       .when("/", {
            templateUrl: "views/index.html",
            controller: "ArticleCtrl" 
         })
        .when("/articles", {
            templateUrl:"views/articles.html",
            controller: "ArticleCtrl" 
         })
        .when("/articles/add", {
            template: "<add-article-directive></<add-article-directive>",
        })
        .when("/articles/update/:id?", {
            template: "<add-article-directive></<add-article-directive>",
        })
        .when("/articles/save", {
            controller: "AddArticleCtrl" 
        })
        .otherwise({ redirectTo: "/test" });
     }
  ]
 );
// .filter('startFrom', function(){
//     return function(data, start){
//         if(data){
//             start = 0 + start;
//             return data.slice(start);
//         }
//     }
// });

myApp.controller('AddArticleCtrl', ['$scope', '$http', '$location', 'articleService', '$routeParams', '$resource', function($scope, $http, $location, articleService, $routeParams, $resource) {
  $scope.status = '';
  $scope.id = $routeParams.id;
  $scope.currentArticle = {};

  $scope.save = function() {
    var article = {
                    id: $scope.currentArticle._id,
                    title: $scope.currentArticle.title,
                    author: $scope.currentArticle.author,
                    imagelink : $scope.currentArticle.imagelink,
                    acticlelink: $scope.currentArticle.acticlelink,
                    description: $scope.currentArticle.description
                };
    articleService.addArticle(article);
  }

  $scope.updateArticle = function(){

    var UpdateArticle = $resource('/articles/update?id=:id', {id:'@id'});
    UpdateArticle.get({id: $routeParams.id}, function(success) {
    $scope.currentArticle = success.article;
            console.log('RESPONSE', success);
            }, function(error) {
            console.log('ERROR', error);
        });  
  }
  
  $scope.updateArticle();
//   $scope.getCurrentArticle = function(id) {
//       $http.get('/articles/update?id=' + id).then(
//             function(success) {
//                 $scope.currentArticle = success.data.article;
//                 console.log('RESPONSE', success);
//                 }, function(error) {
//                 console.log('ERROR', error);
//                 });
//   }
  //$scope.getCurrentArticle($routeParams.id);
}]);