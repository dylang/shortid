var shortId = require('../shortid');
var expect = require('chai').expect;

describe('testing shortid', function(done) {

    beforeEach(function(){
        // reset to default alphabet
        shortId.seed(1);
        shortId.characters(false);
    });


    it('should run a bunch and never get duplicates', function(done) {
        shortId.seed(1);
        var ids = {};
        var id;

        var i=1000;
        while(i--) {
            id = shortId.generate();
            expect(ids[id]).to.be.undefined;
            expect(id).to.have.length.below(17);
            ids[id] = 1;
        }
        done();
    });

    it('should decode worker', function(done){
        shortId.worker(0);
        expect(shortId.decode(shortId()).worker).to.equal(0);

        shortId.worker(1);
        expect(shortId.decode(shortId()).worker).to.equal(1);

        shortId.worker(2);
        expect(shortId.decode(shortId()).worker).to.equal(2);

        shortId.worker(3);
        expect(shortId.decode(shortId()).worker).to.equal(3);

        shortId.worker(15);
        expect(shortId.decode(shortId()).worker).to.equal(15);

        done();
    });
});
