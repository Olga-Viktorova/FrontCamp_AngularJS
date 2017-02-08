// myApp.controller('AddArticleCtrl', ['$scope', '$http', '$location', 'articleService', '$routeParams', '$resource', function($scope, $http, $location, articleService, $routeParams, $resource) {
//   $scope.status = '';
//   $scope.id = $routeParams.id;
//   $scope.currentArticle = {};

//   $scope.saveArticle = function() {
//     var article = {
//                     id: $scope.currentArticle._id,
//                     title: $scope.currentArticle.title,
//                     author: $scope.currentArticle.author,
//                     imagelink : $scope.currentArticle.imagelink,
//                     acticlelink: $scope.currentArticle.acticlelink,
//                     description: $scope.currentArticle.description
//                 };
//     articleService.addArticle(article);
//   }

//   $scope.updateArticle = function(){

//     var UpdateArticle = $resource('/articles/update?id=:id', {id:'@id'});
//     UpdateArticle.get({id: $routeParams.id}, function(success) {
//     $scope.currentArticle = success.article;
//             console.log('RESPONSE', success);
//             }, function(error) {
//             console.log('ERROR', error);
//         });  
//   }
  
//   $scope.updateArticle();
// //   $scope.getCurrentArticle = function(id) {
// //       $http.get('/articles/update?id=' + id).then(
// //             function(success) {
// //                 $scope.currentArticle = success.data.article;
// //                 console.log('RESPONSE', success);
// //                 }, function(error) {
// //                 console.log('ERROR', error);
// //                 });
// //   }
//   //$scope.getCurrentArticle($routeParams.id);
// }]);