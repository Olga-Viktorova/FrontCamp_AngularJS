describe('Articles component', function() {

    beforeEach(module('articleApp'));

    var ArticlesController,
    $controller,
    $rootScope,
    $articleScope,
    addArticleDefer,
    updateArticleDefer,
    scope, 
    $scope,
    location, 
    articleService,
    routeParams,
    resource,
    q,
    deferred;

    beforeEach(inject(function(_$rootScope_, _$controller_, _$q_) {
    
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $articleScope = _$rootScope_.$new();
        $q = _$q_;
    
        articleServiceMock = {

        addArticle: function () {
            addArticleDefer = deffered;
            return addArticleDefer.promise;
        },

    //   getStatus: function () {
    //     updateArticleDefer = $q.defer();
    //     return updateArticleDefer.promise;
    //   }
        };
        $articleScope.updateArticle = function () {
                updateArticleDefer = $q.defer();
                return updateArticleDefer.promise;
            } 
        
        ArticlesController = $controller('AddArticleCtrl', {
            $scope: $articleScope,
            articleService: articleServiceMock,
        });
         spyOn(articleServiceMock, "addArticle").and.callThrough();
         spyOn($articleScope, "updateArticle").and.callThrough();
    }));

    it('ArticlesController should be defined', function() {    
        expect(ArticlesController).toBeDefined();
    });

    // it('Check "updateArticle" function', function() {
        
    //     updateArticleDefer.resolve({
    //             status: 'Article was updated successfully !',
    //         });
    
    // $rootScope.$apply();

    // expect($scope.updateArticle).toHaveBeenCalled();
    // expect($scope.status).toEqual('Article was added successfully !');

 // });

    
  });
//});