# ShortId [![Build Status](https://secure.travis-ci.org/dylang/shortid.png)](http://travis-ci.org/dylang/shortid)

ShortId creates amazingly short non-sequential url-friendly unique ids.  Perfect for url shorteners, MongoDB and Reddis ids, and any other id users might see.

* 7-12 url-friendly characters: A-Za-z_-
* Non-sequential so they are not predictable.
* Shuffled alphabet based on an optional seed you provide so others can't decrypt your ids.
* Includes version in case you want to change how you encode your id.
* Includes cluster worker id so you can use on node instances running using Cluster.
* Includes tests that run on [Mocha](http://visionmedia.github.com/mocha/).
* Requires Node 0.6 because it uses Node's new crypto functions.

## Example

```javascript
    var ShortId = require('../index');
    var i = 10;
    while (i--) {
        console.log(ShortId.generate());
    }
    
    // Resulting ids:
    PPBqWA9
    PefBO4A
    eV9B94A
    eemGO4d
    PPGBqhd
    VPyX9hw
    eeDX94w
    PT7GOWA
    PP4XqWA
    PTxG9hD
```

## API

### ShortId.generate()

Returns an amazingly short non-sequential unique id.

### Other functions

(Full docs coming soon.)

* ShortId.version(int) sets version, returns ShortId module.
* ShortId.worker(int) sets cluster worker, returns ShortId module.

See the tests for more examples.

Created for Node Knockout 2011 winner [Doodle Or Die](http://doodleordie.com).