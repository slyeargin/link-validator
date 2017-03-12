// var links = process.argv.slice(2);
// validateUrls(links);

// function validateUrls(links)
  // map through links

function objectify(link) {
  var linkObject = {};
  linkObject.url = link;
  return linkObject;
}

// function validSyntax(link)

// function validResponse(link)

// function printAnalysis(link)

module.exports = {
  objectify: objectify
}
