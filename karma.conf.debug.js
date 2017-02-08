// Karma configuration
// Generated on Sun Jan 29 2017 12:32:37 GMT+0300 (Беларусь (зима))
let configObject = require('./karma.conf');

module.exports = function(config) {

  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  configObject.logLevel = config.LOG_INFO;
  
  config.set(configObject);
}