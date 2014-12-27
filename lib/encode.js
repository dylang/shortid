var randomBytes = require('crypto').randomBytes;

function encode(lookup, number) {
    var loopCounter = 0;
    var str = '';

    do {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | (randomBytes(1)[0] & 0x30)  );
    } while ( number >= Math.pow(16, ++loopCounter) );
    return str;
}

module.exports = encode;
