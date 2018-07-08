'use strict';

var nanoIdgenerate = require('nanoid/generate');
var alphabet = require('./alphabet');

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    var random = nanoIdgenerate(alphabet.characters(), 16);

    while (!done && loopCounter < 16) {
        str = str + random[loopCounter];
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;
