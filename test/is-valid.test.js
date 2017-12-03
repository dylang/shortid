'use strict';

var isValid = require('../lib/is-valid');
var expect = require('chai').expect;

describe('testing is-valid', function() {

    it('should find these valid', function(done) {
        expect(isValid('N1aGxE')).to.equal(true);
        expect(isValid('N1M6GeN')).to.equal(true);
        expect(isValid('41-aGe4')).to.equal(true);
        expect(isValid('7J--Cn7_Y')).to.equal(true);
        expect(isValid('7kb-y6XdF')).to.equal(true);
        done();
    });

    it('should find these invalid', function(done) {
        expect(isValid('i have spaces')).to.equal(false);
        expect(isValid('i have \n breaks \n of \n the \n lines')).to.equal(false);
        expect(isValid('abc')).to.equal(false);
        expect(isValid(1234)).to.equal(false);
        expect(isValid()).to.equal(false);
        done();
    });
});
