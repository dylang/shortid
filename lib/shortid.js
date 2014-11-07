/*
 * Short Id
 * by Dylan Greene
 */

var alphabet = require('./alphabet'),
    encode = require('./encode');

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1415358116771;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 4;

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
var clusterWorkerId = parseInt(process.env.NODE_UNIQUE_ID || 0, 10);

// Counter is used when shortId is called multiple times in one second.
var counter;

// Remember the last time shortId was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function generate() {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}


/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as ShortId.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as ShortId.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns ShortId module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the ShortId-generated id.
 */
function decode(id) {
    var alphabet = characters();
    return {
        version: alphabet.indexOf(id.substr(0, 1)) & 0x0f,
        worker: alphabet.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = generate;
module.exports.generate = generate;
module.exports.seed     = seed;
module.exports.worker   = worker;
module.exports.characters = characters;
module.exports.decode   = decode;
