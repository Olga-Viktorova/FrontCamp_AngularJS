// Karma configuration
// Generated on Tue Feb 07 2017 01:49:27 GMT+0300 (Belarus Standard Time)

module.exports = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './public/angular/js/angular.js',
      './public/angular/js/angular-resource.js',
      './public/angular/js/angular-route.js',
      './public/angular/js/angular-ui-router.js',
      './public/angular/js/ui-bootstrap-tpls-2.5.0.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './public/angular/controllers/mainApp.js',

      './tests/\*.js'
    ],


    // list of files to exclude
    exclude: [
      //'yes'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],
    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: './tests/coverage'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
   // logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-coverage'
    ]
}
