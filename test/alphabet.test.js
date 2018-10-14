'use strict';

const alphabet = require('../lib/alphabet');
const expect = require('chai').expect;

describe('testing alphabet', function(done) {
    beforeEach(function() {
        alphabet.seed(1);
    });

    it('should create a unique random alphabet with each seed', function(done) {
        alphabet.seed(1);
        expect(alphabet.shuffled()).to.equal(
            'ylZM7VHLvOFcohp01x-fXNr8P_tqin6RkgWGm4SIDdK5s2TAJebzQEBUwuY9j3aC'
        );

        alphabet.seed(1234);
        expect(alphabet.shuffled()).to.equal(
            'ef4w9iMboqLOQdWu3hKI72A0VZpCtzDlXk5_a6cFSNYGnH-gmsP1UBxvTRJjE8ry'
        );
        done();
    });

    it('should return the same alphabet with a single seed', function(done) {
        alphabet.seed(1);
        expect(alphabet.shuffled()).to.equal(
            'ylZM7VHLvOFcohp01x-fXNr8P_tqin6RkgWGm4SIDdK5s2TAJebzQEBUwuY9j3aC'
        );

        alphabet.seed(1);
        expect(alphabet.shuffled()).to.equal(
            'ylZM7VHLvOFcohp01x-fXNr8P_tqin6RkgWGm4SIDdK5s2TAJebzQEBUwuY9j3aC'
        );
        done();
    });

    it('should shuffle into a string of unique characters', function(done) {
        // use the randomly sorted default set to make new set
        alphabet.characters(alphabet.shuffled());

        expect(alphabet.shuffled()).to.equal(
            'WN3JLu5ARbdoPx_ylgC09eqvzant-8HEX1YKr7BsIhTViZUm2pcGQD4wk6jOfMFS'
        );

        done();
    });

    it('should work with custom alphabets', function(done) {
        var fn = function(str) {
            return function() {
                alphabet.characters(str);
            };
        };

        expect(
            fn(
                '-‾zʎxʍʌnʇsɹbdouɯlʞɾıɥƃɟǝpɔqɐzʎxʍʌnʇsɹbdouɯlʞɾıɥƃɟǝpɔqɐ9876543210'
            )
        ).to.throw(
            Error,
            'Custom characters for shortid must be unique. These characters were not unique: z, ʎ, x, ʍ, ʌ, n, ʇ, s, ɹ, b, d, o, u, ɯ, l, ʞ, ɾ, ı, ɥ, ƃ, ɟ, ǝ, p, ɔ, q, ɐ'
        );

        alphabet.characters(
            '①②③④⑤⑥⑦⑧⑨⑩⑪⑫ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'
        );
        expect(alphabet.shuffled()).to.equal(
            'ⓌⒿⓧⓚ⑧ⓣⓕⓙⓉⓜⓓⒶⓂⒻⓃ①②ⓋⓩⒹⓥⓛⓅ⑨ⓝⓨⓇⓄⒼⓁ⑦ⓟⒾⒺⓤⓔⓀ⑤ⓠⓖⓑⒷⓘ⑥Ⓠ③ⓡⓎⓗⒸ⑫ⓍⓞⓒⓏⓢⓊⓈⓦ⑩Ⓗ④⑪ⓐ'
        );
        done();
    });

    it('should work with short custom alphabets', function(done) {
        var fn = function(str) {
            return function() {
                alphabet.characters(str);
            };
        };

        alphabet.characters('qwertyuiop');
        expect(alphabet.shuffled()).to.equal('yrpiqotuew');

        done();
    });
});
