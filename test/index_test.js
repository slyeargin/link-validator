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
