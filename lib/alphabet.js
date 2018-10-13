'use strict';

const randomFromSeed = require('./random/random-from-seed');

const NUMERIC = '0123456789';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SYMBOLS = '_-';

const DEFAULT =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';

let possibleCharacters = DEFAULT;
let previousSeed;

let shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(custom) {
    setCharacters({ custom });
}

function setCharacters({
    custom = '',
    numeric = true,
    lower = true,
    upper = true,
    symbols = true
}) {
    if (!custom.length) {
        let chosenSets = '';
        if (numeric) chosenSets = chosenSets.concat(NUMERIC);
        if (lower) chosenSets = chosenSets.concat(LOWER);
        if (upper) chosenSets = chosenSets.concat(UPPER);
        if (symbols) chosenSets = chosenSets.concat(SYMBOLS);

        possibleCharacters = chosenSets;
    } else {
        if (custom === possibleCharacters) {
            return;
        }

        let unique = custom.split('').filter(function(item, ind, arr) {
            return ind !== arr.lastIndexOf(item);
        });

        if (unique.length) {
            console.log(
                'Custom characters for shortid must be unique. These characters were not unique: ' +
                    unique.join(', ')
            );
            throw new Error(
                'Custom characters for shortid must be unique. These characters were not unique: ' +
                    unique.join(', ')
            );
        }

        possibleCharacters = custom;
    }
    reset();
}

function characters(custom) {
    return setCharacters({ custom: custom });
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!possibleCharacters.length) {
        setCharacters(DEFAULT);
    }

    let sourceArray = possibleCharacters.split('');
    let targetArray = [];
    let r = randomFromSeed.nextValue();
    let characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    let possibleCharactersShuffled = getShuffled();
    return possibleCharactersShuffled[index];
}

function get() {
    return possibleCharacters || DEFAULT;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};
