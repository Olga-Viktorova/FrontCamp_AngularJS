describe('Articles component', function () {

    beforeEach(module('articleApp'));

    var ArticlesController,
        $controller,
        $rootScope,
        $articleScope,
        articleService,
        resource;

    beforeEach(inject(function (_$rootScope_, _$controller_, _$q_) {

        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $articleScope = _$rootScope_.$new();
        $q = _$q_;

        var mockedArticle = {
            title: "Theresa May 'won't be afraid' to challenge Donald Trump",
            acticlelink: "http://www.bbc.co.uk/news/uk-politics-38710697",
            author: "BBS News"
        }

        resource = function (url, obj) {
            return {
                get: get,
                save: save,
                status
            }
            function get(objID, callbackSuccess, callbackFailure) {
                callbackSuccess({ article: mockedArticle });
            }
            function save(objID, callbackSuccess, callbackFailure) {
                callbackSuccess(status);
            }
        }


        articleServiceMock = {
            addArticle: function (data) {
                status = "Article was added successfully !";
            },
            getStatus: function () {
                return status;
            },
            status: ''
        };

        ArticlesController = $controller('AddArticleCtrl', {
            $scope: $articleScope,
            articleService: articleServiceMock,
            $resource: resource
        });
    }));

    it('ArticlesController should be defined', function () {
        expect(ArticlesController).toBeDefined();
    });

    it('Check "updateArticle" function', function () {
        $articleScope.updateArticle();

        expect($articleScope.currentArticle.title).toEqual("Theresa May 'won't be afraid' to challenge Donald Trump");
        expect($articleScope.currentArticle.acticlelink).toEqual("http://www.bbc.co.uk/news/uk-politics-38710697");
        expect($articleScope.currentArticle.author).toEqual("BBS News");
    });

    it('Check "addArticle" function', function () {
        $articleScope.saveArticle();
        expect($articleScope.status).toEqual("Article was added successfully !");

    });
});