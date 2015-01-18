var randomNum;

// Browser test
if(typeof window !== 'undefined') { // Browser
    // Test if Web Crypto API is available
    if( (window.crypto && window.crypto.getRandomValues) || (window.msCrypto && window.msCrypto.getRandomValues) ) {
        var cryptoObj = window.crypto || window.msCrypto; // IE 11 uses window.msCrypto
        randomNum = function() {
            var dest = new Uint8Array(1);
            cryptoObj.getRandomValues(dest);
            return dest[0] & 0x30;
        }
    }
    else {
        // Fallback to Math.random(), which is not cryptographically-secure
        randomNum = function() {
            return Math.floor(Math.random() * 256) & 0x30;
        }
    }
}
else { // Node.js
    var randomBytes = require('crypto').randomBytes;
    randomNum = function() {
        return randomBytes(1)[0] & 0x30;
    }
}

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomNum() );
        done = number < (Math.pow(16, loopCounter + 1 )  );
        loopCounter++;
    }
    return str;
}

module.exports = encode;
