var random = require('../lib/random');
var expect = require('chai').expect;

describe('random seed', function(done) {

    it('should return a random number based on a seed', function(done) {

        expect(random(0)).to.equal(0.21132115912208504);
        expect(random(0)).to.equal(0.21132115912208504);
        expect(random(1)).to.equal(0.2511917009602195);
        expect(random(2)).to.equal(0.2910622427983539);
        expect(random(100)).to.equal(0.1983753429355281);
        expect(random(10000)).to.equal(0.9167395404663923);
        expect(random(0.21132115912208504)).to.equal(0.2197466482381452);
        done();
    });

});
