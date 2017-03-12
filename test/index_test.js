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
