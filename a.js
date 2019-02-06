const http = require('http');
const fs = require('fs');
const ps = require('ps-node');

async function printResponse(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (resp) => {
      let data = [];

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data.push(chunk);
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(Buffer.concat(data).toString());
        resolve();
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
      reject();
    });
  });
};

async function printProcesses(processCommand) {
  return new Promise((resolve, reject) => {
    ps.lookup({
      command: processCommand,
    }, function(err, resultList ) {
      console.log(err, resultList);
      resolve();
    });
  });
};

async function run() {
  try {
    await printProcesses('BrowserStackLocal');
    // console.log(fs.readFileSync('$HOME/asd.log'));
    // await printResponse('http://platform.browserstack.com:45691');
    // await printResponse('http://platform.browserstack.com:45691/check');
    return new Promise((resolve) => { resolve(0); });
  } catch(e) {
    console.log("GOT ERROR", e);
    return new Promise((resolve) => { resolve(1); });
  }
}

run().then((re) => {
  process.exit(re);
});
