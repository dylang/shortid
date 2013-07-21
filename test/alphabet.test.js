var alphabet = require('../lib/alphabet');
var expect = require('chai').expect;

describe('testing shortid', function(done) {

    it('should create a unique random alphabet with each seed', function(done) {
        alphabet.seed(1);
        expect(alphabet.shuffled()).to.equal('egQDZqEk8yt60UbGX59WIzf7YwMp2_SrVOjmNhxc4Tau1-J3RLsFHvCKiBdoPnAl');

        alphabet.seed(1234);
        expect(alphabet.shuffled()).to.equal('DZFje6Q0nYCavViEkGlPWxNIL-bpHMATJR_quy74gwc35of2mB1KdOsXUr8St9hz');
        done();
    });

    it('should return the same alphabet with a single seed', function(done) {
        alphabet.seed(1);
        expect(alphabet.shuffled()).to.equal('egQDZqEk8yt60UbGX59WIzf7YwMp2_SrVOjmNhxc4Tau1-J3RLsFHvCKiBdoPnAl');

        alphabet.seed(1);
        expect(alphabet.shuffled()).to.equal('egQDZqEk8yt60UbGX59WIzf7YwMp2_SrVOjmNhxc4Tau1-J3RLsFHvCKiBdoPnAl');
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
        expect(alphabet.shuffled()).to.equal('ⒸⒺⓞⓑⓧⓄⓒⒾ⑨ⓌⓇ⑦①ⓢ⑫ⓔⓥ⑥⑩ⓤⓖⓍⒹ⑧ⓦⓊⓚⓃ③ⓨⓠⓅⓣⓜⒽⓀⓛⒻⓋⒶ⑤ⓡ⑪Ⓢ②ⓩⓗ④ⓟⓙⓆⓓⓕⓉⓐⓘⒼⓏⒷⓂⓝⓁⓎⒿ');
        done();

    });

});
