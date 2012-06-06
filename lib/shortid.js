/*
 * Short Id
 * by Dylan Greene
 *
 */
var randomBytes = require('crypto').randomBytes;

var DEBUG = false;

// Older (pre 0.6) versions of Node don't have a randomBytes function
if (!randomBytes) {
    randomBytes = function(){
        return [Math.random()*256];
    }
}

// remove from Date.now all the milliseconds before this thing was created
var LESS_TIME = 1324151035201;

// Use a shuffled alphabet based on a seed so that predicting future numbers is more difficult
var ALPHABET_ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var ALPHABET_SHUFFLED;

var options = {
    version: 0,     //don't change unless we change the algos or seeds
    seed:   1,      // change to any positive int if you don't want people to figure out your id scheme
    worker: 0       // if you are using cluster or multiple servers use this to make sure
                    // two machines don't create the same id.  VERY unlikely but this is just in case.
};

// Counter always starts at zero
var counter = -1;
var previousSeconds;

function toString(buffer) {
    var str = '';
    var i;
    for(i = 0; i < buffer.length; i++) {
        str = str + ALPHABET_SHUFFLED[buffer[i]];
    }
    return str;
}

/**
 * Generate the id
 * Returns a unique short id.
 */
function generate() {

    var seconds = Math.round((Date.now() - LESS_TIME) * 0.01);  // using >> got us negative numbers somehow

    counter = seconds == previousSeconds ? counter + 1 : 0;

    var buffer = [];

    function encode(number) {
        var loopCounter = 0;
        var done = false;
        while (!done) {
            buffer.push( ( (number >> (4 * loopCounter)) & 0x0f ) | (randomBytes(1)[0] & 0x30)  );
            done = number < (Math.pow(16, loopCounter + 1 )  );
            loopCounter++;
        }
    }

    encode(options.version);

    DEBUG && console.log('just version', toString(buffer));

    encode(options.worker);

    DEBUG && console.log('worker', toString(buffer));

    if (counter > 0) {
        encode(counter);
        DEBUG && console.log('counter', toString(buffer));

    }
    encode(seconds);  //seconds since this module was created.  >> 10 removes the milliseconds more or less.

    DEBUG && console.log('seconds', toString(buffer), seconds);

    previousSeconds = seconds;

    return toString(buffer);

}

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as ShortId.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function setSeed(seed) {
    options.seed = seed;

    // Found online somewhere
    function random(seed) {
        seed = seed || 0;
        seed = (seed * 9301 + 49297) % 233280;
        return seed/(233280.0);
    }

    var sourceArray = ALPHABET_ORIGINAL.split('');
    var targetArray = [];
    var r = random(seed);
    var characterIndex;
    while (sourceArray.length > 0) {
        r = random(r * 1000);
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    ALPHABET_SHUFFLED = targetArray.join('') + '-_';

    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as ShortId.worker(int)
 * @param worker worker must be positive integer.  Number less than 16 is recommended.
 * returns ShortId module so it can be chained.
 */
function setWorker(worker) {
    options.worker = worker;
    return module.exports;
}

/**
 * Set the version.
 * exposed as ShortId.version(int)
 * @param version version must be positive integer.  Number less than 16 is recommended.
 * returns ShortId module so it can be chained.
 */
function setVersion(version) {
    options.version = version;
    return module.exports;
}

/**
 * returns the shuffled alphabet
 */
function alphabet() {
    return ALPHABET_SHUFFLED;
}

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the ShortId-generated id.
 */
function decode(id) {
    return {
        version: ALPHABET_SHUFFLED.indexOf(id.substr(0, 1)) & 0x0f,
        worker: ALPHABET_SHUFFLED.indexOf(id.substr(1, 1)) & 0x0f
    };
}

// use defaults
setSeed(options.seed);
setVersion(options.version);
setWorker(process.env.CLUSTER_UNIQUE_ID ? parseInt(CLUSTER_UNIQUE_ID, 10)
            : process.env.NODE_WORKER_ID ? parseInt(process.env.NODE_WORKER_ID, 10)
            : options.worker);

module.exports = generate;
module.exports.generate = generate;
module.exports.seed     = setSeed;
module.exports.version  = setVersion;
module.exports.worker   = setWorker;
module.exports.alphabet = alphabet;
module.exports.decode   = decode;
