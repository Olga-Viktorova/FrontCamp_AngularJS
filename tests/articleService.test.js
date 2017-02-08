describe('Articles Servise', function () {

    beforeEach(module('articleApp'));

    var ArticlesController,
        $controller,
        $rootScope,
        $articleScope,
        articleService,
        $httpBackend;

    beforeEach(inject(function (_articleService_, _$rootScope_, _$httpBackend_) {

        $httpBackend = _$httpBackend_;
        $articleScope = _$rootScope_.$new();
        articleService = _articleService_;
        
    }));

    it('ArticlesController should be defined', function () {
        expect(articleService).toBeDefined();
    });

    it('Check Add function', function () {
        var status = "OKmmm";
        var mockedArticle = {
            title: "Theresa May 'won't be afraid' to challenge Donald Trump",
            acticlelink: "http://www.bbc.co.uk/news/uk-politics-38710697",
            author: "BBS News"
        };

        $httpBackend
            .whenPOST("/articles/save")
            .respond(function (method, url, data, headers) {
                return [200, {status: status}, {}];
            });

        articleService.addArticle(mockedArticle);
        $httpBackend.flush();
        expect(articleService.getStatus()).toEqual(status);
     });
});