var validUrl = require('valid-url');
var request = require('request');

var links = process.argv.slice(2);
validateUrls(links);

function validateUrls(links) {
  var linkObject = links.map((link) => {return objectify(link)});
  var checkedSyntax = linkObject.map((link) => {return validSyntax(link)});
  checkedSyntax.map((link) => {return validResponse(link)});
}


function objectify(link) {
  var linkObject = {};
  linkObject.url = link;
  return linkObject;
}

function validSyntax(link) {
  if (validUrl.isWebUri(link.url)) {
    link.validSyntax = true;
    return link;
  } else {
    link.validSyntax = false;
    return link;
  }
}

function validResponse(link) {
  if (link.validSyntax) {
    link.timeout = 5000;
    request(link, function(error, response, body) {
      if (!error) {
        link.statusCode = response.statusCode.toString();
        link.statusMessage = response.statusMessage;
        return printAnalysis(link);
      } else {
        return printAnalysis(link);
      }
    });
  } else {
    return printAnalysis(link);
  }
}

function printAnalysis(link) {
  var successCodes = ["200", "301", "302"];
  if (!link.validSyntax) {
    return console.log("Invalid syntax: " + link.url);
  } else if (successCodes.indexOf(link.statusCode) === -1){
    return console.log("Unsuccessful response: " + link.url + ". Status: " + link.statusCode + ", " + link.statusMessage);
  } else {
    return;
  }
}

module.exports = {
  objectify: objectify,
  validSyntax: validSyntax,
  validResponse: validResponse,
  printAnalysis: printAnalysis
}

/* Improvements:
   - Could cache URLs marked with validSyntax = true and a successful response for a period of time, then query the cache before
     making a request to valid URLs.
   - Could be added as an Express route; instead of parsing args from the CLI, would parse req.body and return res object as JSON
     to be used by a front-end application.
   - Could use promise chaining to return values from validResponse() and printAnalysis() rather than solely console.logging them.
*/
