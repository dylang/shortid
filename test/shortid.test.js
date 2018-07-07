'use strict';

var shortid = require('..');
var expect = require('chai').expect;

describe('testing shortid', function(done) {

    beforeEach(function(){
        // reset to default alphabet
        shortid.seed(1);
        shortid.characters(false);
    });


    it('should run a bunch and never get duplicates', function(done) {
        shortid.seed(1);
        var ids = {};
        var id;

        var i=5000;
        while(i--) {
            id = shortid.generate();
            expect(id.length).to.be.below(17);
            ids[id] = ids[id] ? ids[id]++ : 1;
            expect(ids[id]).to.equal(1);
        }
        done();
    });
});
