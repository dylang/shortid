'use strict';

var shortid = require('..');
var expect = require('chai').expect;

describe('testing shortid', function(done) {

    before(function(){
        // reset to default alphabet
        shortid.seed(1);
        shortid.characters(false);
    });

    var i;
    for (i=1; i < 11; i++) {
        var id = shortid.generate();
        it(i + ') should print 10 examples: ' + id, function(done){
            expect(id).to.not.be.empty;
            expect(shortid.isValid(id)).to.equal(true);
            //TODO: check if valid id
            done();
        });
    }
});
