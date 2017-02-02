main.controller("mainController", function ($scope, $http, $rootScope, $location) {
    $scope.user = {username: '', password: ''};
	//$scope.error_message = '';
    //login call to webapi (node implemented service)
    //$scope.articles = function(){
	//	$http.get('/articles/articles', $scope.user).success(function(data){
      //      $location.path('/');
			// if(data.state == 'success'){
			// 	$rootScope.authenticated = true;
			// 	$rootScope.current_user = data.user.username;
			// 	$rootScope.sess = data.user;
			// 	sessionStorage.setItem('current_user', $rootScope.sess.username);
			// 	$location.path('/');
			// }
			// else{
			// 	$scope.error_message = data.message;
			// 	$rootScope.sess = null;
			// }
	//	});
	//};
});