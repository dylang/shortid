'use strict';

var random = require('../../lib/random/random-from-seed');
var expect = require('chai').expect;

describe('random seed', function(done) {

    it('should return a random number based on a seed', function(done) {

        random.seed(0);
        expect(random.nextValue()).to.equal(0.21132115912208504);

        random.seed(0);
        expect(random.nextValue()).to.equal(0.21132115912208504);

        random.seed(1);
        expect(random.nextValue()).to.equal(0.2511917009602195);

        random.seed(2);
        expect(random.nextValue()).to.equal(0.2910622427983539);

        random.seed(0.21132115912208504);
        expect(random.nextValue()).to.equal(0.2197466482381452);

        random.seed(0);
        expect(random.nextValue()).to.equal(0.21132115912208504);

        done();
    });

});
