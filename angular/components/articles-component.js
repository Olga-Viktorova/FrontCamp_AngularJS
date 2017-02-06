angular.module('articlesApp').component('articles', {
  templateUrl: "../Scripts/app/quote/template/quote.template.html",

  controller: function quoteListController(quoteService, $routeParams) {
    var self = this;

    var config = {
      id: -1,
      baseUrl: 'quote#/show/',
      proposeUrl: 'quote#/propose',
      quoteUrl: this.baseUrl + this.id,
      redirect: function (url) {
        window.location = url;
      },
      responseProcess: function (response) {
        if (!response.data) {
          config.redirect(config.baseUrl);
        }

        self.quote = response.data;
        config.id = self.quote.Id;
      }
    }

    self.isStaticLink = false;

    self.next = function () {
      quoteService.getRandom().then(config.responseProcess);
    }

    self.toStatic = function () {
      config.redirect(config.baseUrl + config.id);
    }

    self.toRandom = function () {
      config.redirect(config.baseUrl);
    }

    self.toPropose = function () {
      config.redirect(config.proposeUrl);
    }

    self.$onInit = function () {
      if (!$routeParams.id === false) {
        self.isStaticLink = true;
      }
      self.quote = self.isStaticLink
        ? quoteService.getQuote($routeParams.id).then(config.responseProcess)
        : quoteService.getRandom().then(config.responseProcess);
    }
  }
});