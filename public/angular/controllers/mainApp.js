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
)
.filter('startFrom', function(){
    return function(data, start){
        if(data){
            start = 0 + start;
            return data.slice(start);
        }
    }
});


//COMPONENTS
angular.module('articleApp').component('articles', {
   template: ['<div ng-repeat = "art in $ctrl.articles | startFrom: ($ctrl.currentPage-1) * $ctrl.pageSize | limitTo:$ctrl.pageSize" >',
                '<div class="article">',
                    '<img ng-src={{art.imagelink}} class="img"/>',
                    '<a href={{art.acticlelink}} class="link" ng-click="$ctrl.update(art._id)">{{art.title}}</a>',
                    '<h4>{{art.description}}</h4>',
                    '<h4>By: {{art.author}}</h4>',
                    '<div class="inline"> ',
                        '<form method="get">',
                           '<button class="button" id="updateArticleButton" type="submit" ng-click="$ctrl.update(art._id)">Update</button>',
                        '</form>',
                    '</div>	',
                    '<div class="inline"> ',
                        '<form method="get">',
                           '<button class="button" id="updateArticleButton" type="submit" ng-click="$ctrl.delete(art._id)">Delete</button>',
                        '</form>',
                    '</div>',								
			    '</div>',
            '</div>',
            '<div class = "align-center">',
            '<div uib-pagination total-items="$ctrl.articles.length" ng-model="$ctrl.currentPage" items-per-page="$ctrl.pageSize"></div>',
            '</div>'].join(''),
   
    controller: function ArticleListController($scope, $http, $location, $resource, $routeParams, $route) {
    var self = this;

    self.currentPage = 1;
    self.pageSize = 5;

    self.$onInit = function () {
      self.getArticles();
    }

    self.getArticles = function () {
       $http.get('/articles/getArticles').then(
            function(success) {
                self.articles = success.data.articles;
                console.log('RESPONSE', success);
            }, function(error) {
                console.log('ERROR', error);
            });
    }

    self.update = function (id) {
       $location.path('articles/update/'+id);
    }
    self.delete = function (id) {
      var DeleteArticle = $resource('/articles/delete?id=:id', {id:'@id'});
         DeleteArticle.get({id: id}, function(success) {
                status = success.status;
                $route.reload();
            console.log('RESPONSE', success);
            }, function(error) {
            console.log('ERROR', error);
    });
    }
}});


angular.module('articleApp').component('addAnArticle', {
   template:['<div class="align-center">',
                '<form method="get">',
                    '<button class="button" id="addArticleButton" type="submit" ng-click="$ctrl.add()">Add an article</button>',
                '</form>',
             '</div>' ].join(''),
   
    controller: function AddAnArticleController($scope, $http, $location) {
 
    var self = this;

    self.add = function () {
       $location.path('articles/add');
    }
}});


//CONTROLLERS
myApp.controller('ArticleCtrl', ['$scope', '$http', '$location', 'articleService', function($scope, $http, $location, articleService) {
  $scope.status = articleService.getStatus();
  $scope.currentPage = 1;
  $scope.pageSize = 5;

  $scope.showArticles = function (){
      $location.path('articles');
  }
}]);



//SERVISE
myApp.service('articleService',['$http', '$location', '$resource', function($http, $location, $resource) {
  var status = '';
  var addArticle = function(data) {
  var currentArticle = {
                            id: data.id,
                            title: data.title,
                            author: data.author,
                            imagelink : data.imagelink,
                            acticlelink: data.acticlelink,
                            description: data.description
                         };    
   var AddArticle = $resource('/articles/save');
   AddArticle.save(currentArticle, function(success) {
        status = success.status;
        $location.path('/articles', success.status);
        console.log('RESPONSE', success);
        }, function(error) {
        console.log('ERROR', error);
    });
  }   

//   var addArticle = function(data) {
//        $http.post('/articles/save',
//             {
//                 id: data.id,
//                 title: data.title,
//                 author: data.author,
//                 imagelink : data.imagelink,
//                 acticlelink: data.acticlelink,
//                 description: data.description
//             }
//             ).then(
//             function(success) {
//                 status = success.data.status;
//                 $location.path('/articles', success.data.status);
//                 console.log('RESPONSE', success.data.status);
//             }, function(error) {
//                 status = error;
//                 console.log('ERROR', error);
//             });
//}

  var getStatus = function(){
      return status;
  };

  return {
    addArticle: addArticle,
    getStatus: getStatus, 
  };

}]);


//DERICTIVES
myApp.directive('addArticleDirective', function(){
     var directive = {};
     directive.template = ['<link rel="stylesheet" href="/stylesheets/articleAdd.css"/>',
            '<div class="container" ng-submit="saveArticle()" ng-controller="AddArticleCtrl">',
               '<form id="contact"  method="post" name="article">',
                    '<h3>Add Acticle</h3>'    ,
                    '<h4>Contact us for custom quote</h4> ',
                     '<fieldset>',
                       '<input placeholder="ID" type="hidden" tabindex="1" required="" autofocus="" name="id" ng-model="currentArticle._id"/>',
                    '</fieldset>      ',
                    '<fieldset>',
                       '<input ng-model="currentArticle.title" placeholder="Title" type="text" tabindex="1" required autofocus="" name="title"  /><!--min-words="20"-->',
                       '<!--<ng-message when="minWords">It should be more 20 symbols</ng-message>-->',
                    '</fieldset>    ',
                    '<fieldset>',
                        '<input placeholder="Author" type="text" tabindex="2" required="" ng-model="currentArticle.author" />',
                    '</fieldset>    ',
                    '<fieldset>',
                        '<input placeholder="Image link" type="url" tabindex="3" required="" ng-model="currentArticle.imagelink"/>',
                    '</fieldset>    ',
                    '<fieldset>',
                        '<input placeholder="Article Limk" type="url" tabindex="4" required="" ng-model="currentArticle.acticlelink"/>',
                    '</fieldset>    ',
                    '<fieldset>',
                       '<textarea placeholder="Description" tabindex="5" required ng-model="currentArticle.description"></textarea>',
                    '</fieldset>    ',
                    '<fieldset>',
                       '<button id="contact-submit" name="submit" type="submit" data-submit="...Sending">Submit</button>',
                    '</fieldset>    ',
                '</form>',
            '</div>'
            ].join('')
        //directive.templateUrl = "views/addArticle.html"
     directive.restrict = "E";

    return directive;
    
});

myApp.controller('AddArticleCtrl', ['$scope', '$http', '$location', 'articleService', '$routeParams', '$resource', function($scope, $http, $location, articleService, $routeParams, $resource) {
  $scope.status = '';
  $scope.id = $routeParams.id;
  $scope.currentArticle = {};

  $scope.saveArticle = function() {
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

myApp.directive('minWords', function() {
    return {
      restrict: 'A',
      scope:{
           minWords : "="
     },
     require: 'ngModel',
     link: function($scope, $element, $attr, $ctrl) {
          $ctrl.$validators.minWords = function(modelValue){
         if(modelValue != undefined){
             //var words = value.split('   ');
             if(modelValue.length >= $scope.minWords){
                 return true;
             }
         }
         return false;
          }
     }
};

});