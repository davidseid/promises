/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');

// require appropriate functions
var PromiseConstructor = require('./promiseConstructor.js');
var promisification = require('./promisification.js');

var getGitHubProfileAsync = promisification.getGitHubProfileAsync;
var pluckFirstLineFromFileAsync = PromiseConstructor.pluckFirstLineFromFileAsync;




var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pluckFirstLineFromFileAsync(readFilePath)
    .then(function(username) {
      if (username) {
        return username;
      }
    })
    .then(function(username) {
      return getGitHubProfileAsync(username);
    })
    .then(function(data) {
      console.log(data);
      fs.writeFile(writeFilePath, data, function(err) {
        if (err) {
          throw err;
        } else {
          console.log('SUCCESS');
        }
      });
    });
  // asynchronously read a file and get the first line of the file as the username
  // async send a request to the Github API for the user's profile
  // async write that response to the writeFilePath
};





// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
