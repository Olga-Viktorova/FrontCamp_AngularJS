describe('PasswordController', function() {
  beforeEach(module('app'));

  var $controller, $resource;

  beforeEach(inject(function(_$controller_, _$resource_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $resource = _$resource_;
  }));

//   describe('$scope.grade', function() {
//     it('sets the strength to "strong" if the password length is >8 chars', function() {
//       var $scope = {};
//       var controller = $controller('PasswordController', { $scope: $scope });
//       $scope.password = 'longerthaneightchars';
//       $scope.grade();
//       expect($scope.strength).toEqual('strong');
//     });
//   });
});