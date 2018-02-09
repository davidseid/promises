/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  //using the node style callback (err, content)
  //read the file using fs.readFile 
  //and we will split the content on \n and return content[0]
  var temp;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (data) {
      temp = data.split('\n')[0];
    }
    callback(err, temp);
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  var tmp;
  request.get(url, (err, res) => {
    if (res) {
      tmp = res.statusCode;
    }
    callback(err, tmp);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
