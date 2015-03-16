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

    it('should decode worker', function(done){
        shortid.worker(0);
        expect(shortid.decode(shortid()).worker).to.equal(0);

        shortid.worker(1);
        expect(shortid.decode(shortid()).worker).to.equal(1);

        shortid.worker(2);
        expect(shortid.decode(shortid()).worker).to.equal(2);

        shortid.worker(3);
        expect(shortid.decode(shortid()).worker).to.equal(3);

        shortid.worker(15);
        expect(shortid.decode(shortid()).worker).to.equal(15);

        done();
    });
});
