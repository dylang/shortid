var alphabet = require('../lib/alphabet');
var expect = require('chai').expect;

describe('testing shortid', function(done) {

    beforeEach(function(){
        alphabet.seed(1);
    });


    it('should create a unique random alphabet with each seed', function(done) {
        alphabet.seed(1);
        expect(alphabet.shuffled()).to.equal('ylZM7VHLvOFcohp01x-fXNr8P_tqin6RkgWGm4SIDdK5s2TAJebzQEBUwuY9j3aC');

        alphabet.seed(1234);
        expect(alphabet.shuffled()).to.equal('ef4w9iMboqLOQdWu3hKI72A0VZpCtzDlXk5_a6cFSNYGnH-gmsP1UBxvTRJjE8ry');
        done();
    });

    it('should return the same alphabet with a single seed', function(done) {
        alphabet.seed(1);
        expect(alphabet.shuffled()).to.equal('ylZM7VHLvOFcohp01x-fXNr8P_tqin6RkgWGm4SIDdK5s2TAJebzQEBUwuY9j3aC');

        alphabet.seed(1);
        expect(alphabet.shuffled()).to.equal('ylZM7VHLvOFcohp01x-fXNr8P_tqin6RkgWGm4SIDdK5s2TAJebzQEBUwuY9j3aC');
        done();
    });

    it('should shuffle into a 64-character string of unique characters', function(done){
        // use default character set
        alphabet.characters(false);

        // use the randomly sorted defeault set to make new set
        alphabet.characters(alphabet.shuffled());

        expect(alphabet.shuffled()).to.equal('WN3JLu5ARbdoPx_ylgC09eqvzant-8HEX1YKr7BsIhTViZUm2pcGQD4wk6jOfMFS');

        done();
    });


    it('should work with custom alphabets', function(done) {

        var fn = function(str) {
            return function() {
                alphabet.characters(str);
            };
        };

        expect(fn('-‾zʎxʍʌnʇsɹbdouɯlʞɾıɥƃɟǝpɔqɐzʎxʍʌnʇsɹbdouɯlʞɾıɥƃɟǝpɔqɐ9876543210')).to.throw(Error, 'Custom alphabet for shortId must be 64 unique characters. These characters were not unique: z, ʎ, x, ʍ, ʌ, n, ʇ, s, ɹ, b, d, o, u, ɯ, l, ʞ, ɾ, ı, ɥ, ƃ, ɟ, ǝ, p, ɔ, q, ɐ');
        expect(fn('abc')).to.throw(Error, /Custom alphabet for shortId must be 64 unique characters./);

        alphabet.characters('①②③④⑤⑥⑦⑧⑨⑩⑪⑫ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ');
        expect(alphabet.shuffled()).to.equal('ⓌⒿⓧⓚ⑧ⓣⓕⓙⓉⓜⓓⒶⓂⒻⓃ①②ⓋⓩⒹⓥⓛⓅ⑨ⓝⓨⓇⓄⒼⓁ⑦ⓟⒾⒺⓤⓔⓀ⑤ⓠⓖⓑⒷⓘ⑥Ⓠ③ⓡⓎⓗⒸ⑫ⓍⓞⓒⓏⓢⓊⓈⓦ⑩Ⓗ④⑪ⓐ');
        done();

    });

});
