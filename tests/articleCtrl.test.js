describe('Article Ctrl', function() {

    beforeEach(module('articleApp'));

    var ArticlesController,
    $controller,
    $rootScope,
    $articleScope,
    addArticleDefer,
    updateArticleDefer,
    getStatusDefer,
    showArticleDefer,
    scope, 
    $scope,
    articleService,
    q;

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

      getStatus: function () {
        getStatusDefer = $q.defer();
        return getStatusDefer.promise;
      }
        };
        $articleScope.showArtickles = function () {
                showArticleDefer = $q.defer();
                return showArticleDefer.promise;
            } 
        
        ArticlesController = $controller('ArticleCtrl', {
            $scope: $articleScope,
            articleService: articleServiceMock,
        });
         spyOn($articleScope, "showArtickles").and.callThrough();
        // spyOn($articleScope, "updateArticle").and.callThrough();
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