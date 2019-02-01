const http = require('http');

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

async function run() {
  await printResponse('http://platform.browserstack.com:45691');
  await printResponse('http://platform.browserstack.com:45691/check');
}

run();
