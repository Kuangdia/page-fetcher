const request = require('request');

// easiest way to write in files in Node.js
const fs = require('fs');

const args = process.argv.slice(2);

const url = args[0];
const filePath = args[1];

request(url, (error, response, body) => {

  if (error) {
    console.log('error:', error);
  }

  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.log("error", err)
      return
    }
  console.log(`Downloaded and saved ${fs.statSync(filePath).size} bytes to ${filePath}`)
  })

});

