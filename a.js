var browserstack = require('browserstack-local');
var fs = require('fs');

//creates an instance of Local
var bs_local = new browserstack.Local();

// replace <browserstack-accesskey> with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
var bs_local_args = {  };

// starts the Local instance with the required arguments
bs_local.start(bs_local_args, function() {
  console.log("Started BrowserStackLocal");

  // check if BrowserStack local instance is running
  console.log(bs_local.isRunning());

  // stop the Local instance
  bs_local.stop(function() {
    console.log("Stopped BrowserStackLocal");

    fs.readFile('local.log', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
  });
});
