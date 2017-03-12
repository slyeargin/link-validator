var validUrl = require('valid-url');

// var links = process.argv.slice(2);
// validateUrls(links);

// function validateUrls(links)
  // map through links

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

// function validResponse(link)

// function printAnalysis(link)

module.exports = {
  objectify: objectify,
  validSyntax: validSyntax
}
