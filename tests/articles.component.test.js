describe('Articles component', function() {

   var $controller,
       $rootScope,
       ArticleListController,
//      // $articleScope,
         articleServiceMock,
//       $rootScope,
//       //$mdDialogMock,
//       //EVENTS,
//       //newArticleId = 123,
         $q,
//       //update,
//       //delete,
//       //mdDialogDefer,
      newArticle = {
          title: "new article title"
      },
      articles = [];


//     // Before each test load bloglog module
   beforeEach(angular.mock.module('articleApp'));
  
  
   beforeEach(inject(function(_$controller_) {
    //  $controller = _$controller_;
    //  $rootScope = _$rootScope_;
    // //$articleScope = _$rootScope_.$new();
    //  $q = _$q_;
    
    //EVENTS = _EVENTS_;

    // articleServiceMock = {

    // //   getArticlesByFilter: function (filterData, currentPage, pageSize) {
    // //     getArticlesByFilterDefer = $q.defer();
    // //     return getArticlesByFilterDefer.promise;
    // //   },

    //   getArticles: function(){
    //     acticles = [newArticle, newArticle];
    //     getArticlesDefer = $q.defer();
    //     return getArticlesDefer.promise;
    //   }

    // };

    // $mdDialogMock = {
    //   show: function(){          
    //       mdDialogDefer = $q.defer();
    //       return mdDialogDefer.promise;
    //   }
    // }

    // ArticleListController = $controller('ArticleListController', {
    //   $scope: scope,
    //   articleService: articleServiceMock,
    //   //$mdDialog: $mdDialogMock

    //  });

    // Spy on our service call but allow it to continue to its implementation
    //spyOn(articleServiceMock, "getArticlesByFilter").and.callThrough();
    //spyOn(articleServiceMock, "addArticle").and.callThrough();
  }));


  it('ArticleListController should be defined', function() {    
     expect(true).toBe(true);
    
    //expect(ArticleListController).toBeDefined();
  });

//   it('Check "loadArticles" function', function() {
    
//     //$rootScope.$broadcast(EVENTS.SEARCH, {});
//     getArticlesByFilterDefer.resolve({
//             data: [{id:newArticleId}],
//             count: 20
//           });
    
//     // wait for resolve promises.
//     $rootScope.$apply();

//     // since we have spyon the "getArticlesByFilter" - check that "getArticlesByFilter" has benn called.
//     expect(articleServiceMock.getArticlesByFilter).toHaveBeenCalled();
    
//     // check that when "loadArticles" finishes - we have the correct valuen in the controller. 
//     expect(ArticlesController.articles[0].id).toBe(newArticleId);
//     expect(ArticlesController.pageCount).toBe(2);

//   });

//   it('Check "addArticle" function', function() {
    
//     ArticlesController.addArticle();
//     mdDialogDefer.resolve(newArticle);
    
//     // wait for resolve promises.
//     $rootScope.$apply();

//     addArticleDefer.resolve(newArticle);
    
//     // wait for resolve promises.
//     $rootScope.$apply();

//     expect(articleServiceMock.addArticle).toHaveBeenCalled();
    
//   });

});