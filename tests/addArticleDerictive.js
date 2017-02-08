
describe('Add article directive', function() {

  var $compile,
      $scope,
      directiveElem,
      directiveController,
      directiveScope;

    // Before each test load bloglog module
  beforeEach(angular.mock.module('articleApp'));
  
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    
    directiveElem = getCompiledElement();
   }));

  function getCompiledElement() {
    var element = angular.element('<add-an-article></add-an-article>');
    var compiledElement = $compile(element)($scope);
    directiveScope = compiledElement.isolateScope() || compiledElement.scope();
    $scope.$digest();
    directiveController = compiledElement.controller("AddArticleCtrl");
    return compiledElement;
  }

  it('Articles directive should be defined', function() {
    expect(directiveElem).toBeDefined();
  });
});