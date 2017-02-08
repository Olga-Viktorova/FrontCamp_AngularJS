describe('Article List component', function () {

    beforeEach(module('articleApp'));

    var ArticleListController,
        $controller,
        $rootScope,
        $articleListScope,
        articleService,
        resource;
    var mockArticles = [
        {
            title: "Theresa May 'won't be afraid' to challenge Donald Trump",
            acticlelink: "http://www.bbc.co.uk/news/uk-politics-38710697",
            author: "BBS News"
        },
        {
            title: "Theresa May 'won't be afraid' to challenge Donald Trump",
            acticlelink: "http://www.bbc.co.uk/news/uk-politics-38710697",
            author: "BBS News"
        },
        {
            title: "Theresa May 'won't be afraid' to challenge Donald Trump",
            acticlelink: "http://www.bbc.co.uk/news/uk-politics-38710697",
            author: "BBS News"
        }
    ];
    var status = "OK delete";
    var mockID = 123456;

    beforeEach(inject(function (_$rootScope_, _$controller_) {

        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $articleListScope = _$rootScope_.$new();

        var mockedArticle = {
            title: "Theresa May 'won't be afraid' to challenge Donald Trump",
            acticlelink: "http://www.bbc.co.uk/news/uk-politics-38710697",
            author: "BBS News"
        }

        resource = function (url, obj) {
            return {
                get: get,
            }
            function get(objID, callbackSuccess, callbackFailure) {
                if (objID.id) {
                    callbackSuccess({ status: status });
                }
                else {
                    callbackSuccess({ articles: mockArticles });
                }
            }
        }

        ArticleListController = $controller('ArticleListController', {
            $scope: $articleListScope,
            $resource: resource
        });
    }));

    it('ArticleListController should be defined', function () {
        expect(ArticleListController).toBeDefined();
    });

    it('Check "getArticles" function', function () {
        ArticleListController.getArticles();
        expect(ArticleListController.articles).toEqual(mockArticles);
    });

    it('Check "deleteArticle" function', function () {
        ArticleListController.delete(mockID);
        expect(ArticleListController.status).toEqual(status);
    });
});