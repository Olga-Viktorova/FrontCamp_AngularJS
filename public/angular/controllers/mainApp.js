var main = angular.module("main", ['ui.router','ngRoute','ngResource'])
.run(function($http,$rootScope)
{
    //defining global veriables
    $rootScope.roles = [{
		  name: "Administrator",
          code: 0
	   }, {
		  name: "Staff",
          code: 1
	   }, {
		  name: "General",
          code: 2
	}];
    
    //roles enum for authorization
    // $rootScope.AuthenticRoles = {
    //   Administrator: "Administrator",
    //   Staff: "Staff",
    //   General: "General"
    // };
    // $rootScope.routeForUnauthorizedAccess = 'unauth';
    
    
    //Checking current session value
    // if(sessionStorage.length > 0){
    //     $rootScope.current_user = sessionStorage.current_user;
    //     $rootScope.authenticated = true;
    // }else{
    //     $rootScope.authenticated = false;
    //     $rootScope.current_user = 'Guest';
    // }
    
    // $rootScope.signout = function(){
    //     $http.get('auth/signout');
    //     $rootScope.authenticated = false;
    //     $rootScope.current_user = 'Guest';
    //     sessionStorage.clear();
    // };
});

//Routing Configuration (define routes)
main.config([
    '$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider,$rootScope) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'index.html',
                caseInsensitiveMatch: true,
                controller: 'mainController'
            })
            .state('articles', {
                url: '/articles/articles',
                templateUrl: 'index.html',
                caseInsensitiveMatch: true,
                controller: 'mainController'
                //below code is for authentication
                // ,
                // resolve: {
                // permission: function(authorizationService, $rootScope) {
                //     return authorizationService.permissionCheck($rootScope.AuthenticRoles.Administrator);
                // }
                // }
            })
            // .state('about', {
            //     url: '/about',
            //     templateUrl: 'About.html',
            //     caseInsensitiveMatch: true,
            //     controller: 'MainController'
            // })
            // .state('login',{
            //     url: '/login',
            //     templateUrl: 'login.html',
            //     caseInsensitiveMatch: true,
            //     controller: 'AuthController'
            // })
            // .state('register',{
            //     url: '/register',
            //     templateUrl: 'register.html',
            //     caseInsensitiveMatch: true,
            //     controller: 'AuthController'
            // })
            // .state('unauth',{
            //     url: '/unauth',
            //     templateUrl: 'unauth.html',
            //     caseInsensitiveMatch: true
            // });
    }
]);