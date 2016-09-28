exports.config = {
  'specs': [ '../specs/local.js' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': process.env.BROWSERSTACK_USER || 'BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESSKEY || 'BROWSERSTACK_ACCESS_KEY',
    'build': 'protractor-browserstack',
    'name': 'local_test',
    "browserName": "chrome",
    "browser_version": "49",
    "os": "OS X",
    "os_version": "El Capitan",
    'browserstack.local': true,
    'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
    'browserstack.debug': 'true'
  },

  // Code to start browserstack local before start of test
  beforeLaunch: function(){
    return new Promise(function(resolve, reject){
      console.log('Now testing...');
      resolve();
    })
  },

  afterLaunch: function(){
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  }
};
