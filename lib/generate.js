'use strict';

var nanoIdgenerate = require('nanoid/generate');
var alphabet = require('./alphabet');

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + nanoIdgenerate(alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;
