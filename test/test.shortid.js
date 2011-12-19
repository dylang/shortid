var log = require('logging').from(__filename);
var ShortId = require('../index');

var Assert = require('assert');

describe('testing shortid', function(done) {

    it('should create a unique random alphabet with each seed', function(done) {
        Assert.equal(ShortId.seed(1).alphabet(),    'efOCXpDj8xs60SaFV59UGyd7WvLo2YQrTMimKgwb4Rct1ZI3PJqEBuAHhzknNl-_', 'Seeded with 1');
        Assert.equal(ShortId.seed(1).alphabet(),    'efOCXpDj8xs60SaFV59UGyd7WvLo2YQrTMimKgwb4Rct1ZI3PJqEBuAHhzknNl-_', 'Got the same alphabet');
        Assert.equal(ShortId.seed(1234).alphabet(), 'CXEje6P0mYBauThDkFiOUwLGKZboHMzRINWptx74gs935nd2qA1yfJrVSl8Qvc-_', 'Got new alphabet');
        done();
    });

    it('should run a bunch and never get duplicates', function(done) {
        ShortId.seed(1);
        var ids = {};
        var id;

        var i=1000;
        while(i--) {
            id = ShortId.generate();
            Assert.ok(!ids[id], 'no repeat ids');
            Assert.ok(id.length < 17, 'length less than 10 characters ' + id);
            ids[id] = 1;
        }
        done();
    });

    it('should decode worker', function(done){
        ShortId.worker(0);
        Assert.equal(ShortId.decode(ShortId.generate()).worker, 0, 'worker value not correct');

        ShortId.worker(15);
        Assert.equal(ShortId.decode(ShortId.generate()).worker, 15, 'worker value not correct');

        done();
    });

    it('should decode version', function(done){
        ShortId.version(0);
        Assert.equal(ShortId.decode(ShortId.generate()).version, 0, 'version value not correct');

        ShortId.version(15);
        Assert.equal(ShortId.decode(ShortId.generate()).version, 15, 'version value not correct');

        done();
    });


});
