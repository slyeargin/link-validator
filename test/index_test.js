var expect = require('chai').expect;
var index = require('../index');

describe('.objectify', function() {
  it('turns an array item into an object with a .url property', function(done){
    var url = "http://amazon.com";
    var result = index.objectify(url);
    expect(result).to.be.ok;
    expect(result).to.be.an.object;
    expect(result.url).to.equal(url);
    done();
  });
});

describe('.validSyntax', function() {
  it('identifies a syntactically-valid URL', function(done){
    var link = {};
    link.url = "http://example.com";
    var result = index.validSyntax(link);
    expect(result).to.be.ok;
    expect(result).to.be.an.object;
    expect(result.validSyntax).to.be.true;
    expect(result.url).to.equal(link.url);
    done();
  });

  it('identifies a syntactically-invalid URL', function(done){
    var link = {};
    link.url = "foo://example.net";
    var result = index.validSyntax(link);
    expect(result).to.be.ok;
    expect(result).to.be.an.object;
    expect(result.validSyntax).to.be.false;
    expect(result.url).to.equal(link.url);
    done();
  });
});

/*  Improvements to testing: if able to implement promises + mapping + request,
would test index.validResponse using sinon stubbing, and index.printAnalysis. */

// describe('.validResponse', function() {
  // it('identifies a successful response from a URL', function(done){
  //   var link = {};
  //   link.url = "http://example.com";
  //   link.validSyntax = true;
  //   var result = index.validResponse(link);
  //   expect(result).to.be.ok;
  //   expect(result).to.be.an.object;
  //   expect(result.url).to.equal(link.url);
  //   expect(result.statusCode).to.equal("200");
  //   done();
  // });

  // it('identifies an unsuccessful response from a URL', function(done){
  //   var link = {};
  //   link.url = "http://example.com/404";
  //   link.validSyntax = true;
  //   var result = index.validResponse(link);
  //   expect(result).to.be.ok;
  //   expect(result).to.be.an.object;
  //   expect(result.url).to.equal(link.url);
  //   expect(result.statusCode).to.equal("404");
  //   done();
  // });

//   it('ignores a URL that is not syntactically-valid', function(done){
//     var link = {};
//     link.url = "foo://example.net";
//     link.validSyntax = false;
//     var result = index.validResponse(link);
//     expect(result).to.be.ok;
//     expect(result).to.be.an.object;
//     expect(result.url).to.equal(link.url);
//     expect(result.statusCode).to.equal(undefined);
//     done();
//   });
// });

// describe('.printAnalysis', function() {
//   it('explains a successful response', function(done){
//     var link = {};
//     link.url = "http://example.com";
//     link.validSyntax = true;
//     link.statusCode = "200";
//     let analysis = "Success: http://example.com";
//     var result = index.printAnalysis(link);
//     expect(result).to.be.ok;
//     expect(result).to.be.an.object;
//     expect(result.url).to.equal(link.url);
//     expect(result.analysis).to.equal(analysis);
//     done();
//   });
//
//   it('explains an unsuccessful response, providing status code and message', function(done){
//     var link = {};
//     link.url = "http://example.com/404";
//     link.validSyntax = true;
//     link.statusCode = "404";
//     link.statusMessage = "Not found.";
//     let analysis = "Unsuccessful response: http://example.com/404. Status: 404, Not found.";
//     var result = index.printAnalysis(link);
//     expect(result).to.be.ok;
//     expect(result).to.be.an.object;
//     expect(result.url).to.equal(link.url);
//     expect(result.analysis).to.equal(analysis);
//     done();
//   });
//
//   it('ignores a URL that is not syntactically-valid', function(done){
//     var link = {};
//     link.url = "foo://example.net";
//     link.validSyntax = false;
//     let analysis = "Invalid syntax: foo://example.net";
//     var result = index.printAnalysis(link);
//     expect(result).to.be.ok;
//     expect(result).to.be.an.object;
//     expect(result.url).to.equal(link.url);
//     expect(result.statusCode).to.equal(undefined);
//     expect(result.analysis).to.equal(analysis);
//     done();
//   });
// });
