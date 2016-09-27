var browserstack = require('browserstack-local');

exports.config = {
  'specs': [ '../specs/local.js' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'commonCapabilities': {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    'build': 'protractor-browserstack',
    'name': 'parallel_local_test',
    'browserstack.local': true,
    'browserstack.debug': 'true'
  },

  'multiCapabilities': [
    //{"emulator":true,"browserName":"ipad","os_version":"6.0","os":"ios","device":"iPad 3rd (6.0)","browser_version":null},
    //{"emulator":true,"browserName":"iphone","os_version":"6.0","os":"ios","device":"iPhone 4S (6.0)","browser_version":null},
    //{"emulator":true,"browserName":"iphone","os_version":"6.0","os":"ios","device":"iPhone 5","browser_version":null},
    //{"emulator":true,"browserName":"ipad","os_version":"5.1","os":"ios","device":"iPad 3rd","browser_version":null},
    //{"emulator":true,"browserName":"iphone","os_version":"5.1","os":"ios","device":"iPhone 4S","browser_version":null},
    //{"emulator":true,"browserName":"ipad","os_version":"5.0","os":"ios","device":"iPad 2 (5.0)","browser_version":null},
    //{"emulator":true,"browserName":"ipad","os_version":"9.1","os":"ios","device":"iPad Air 2","browser_version":null},
    //{"emulator":true,"browserName":"ipad","os_version":"9.1","os":"ios","device":"iPad Mini 4","browser_version":null},
    //{"emulator":true,"browserName":"ipad","os_version":"9.1","os":"ios","device":"iPad Pro","browser_version":null},
    //{"emulator":true,"browserName":"iphone","os_version":"9.1","os":"ios","device":"iPhone 6S","browser_version":null},
    //{"emulator":true,"browserName":"iphone","os_version":"9.1","os":"ios","device":"iPhone 6S Plus","browser_version":null},
    //{"emulator":true,"browserName":"ipad","os_version":"8.3","os":"ios","device":"iPad Mini 2","browser_version":null},
    //{"emulator":true,"browserName":"ipad","os_version":"8.3","os":"ios","device":"iPad Air","browser_version":null},
    //{"emulator":true,"browserName":"iphone","os_version":"8.3","os":"ios","device":"iPhone 6","browser_version":null},
    //{"emulator":true,"browserName":"iphone","os_version":"8.3","os":"ios","device":"iPhone 6 Plus","browser_version":null},
    //{"emulator":true,"browserName":"ipad","os_version":"7.0","os":"ios","device":"iPad Mini","browser_version":null},
    {"emulator":true,"browserName":"ipad","os_version":"7.0","os":"ios","device":"iPad 4th","browser_version":null},
    {"emulator":true,"browserName":"ipad","os_version":"7.0","os":"ios","device":"iPad 4th","browser_version":null},
    {"emulator":true,"browserName":"ipad","os_version":"7.0","os":"ios","device":"iPad 4th","browser_version":null},
    {"emulator":true,"browserName":"ipad","os_version":"7.0","os":"ios","device":"iPad 4th","browser_version":null},
    {"emulator":true,"browserName":"ipad","os_version":"7.0","os":"ios","device":"iPad 4th","browser_version":null},
    //{"emulator":true,"browserName":"iphone","os_version":"7.0","os":"ios","device":"iPhone 5S","browser_version":null},
  ],

  // Code to start browserstack local before start of test
  beforeLaunch: function(){
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.commonCapabilities['browserstack.key'] }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function(){
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  }
};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
