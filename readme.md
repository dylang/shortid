# ShortId [![Build Status](https://secure.travis-ci.org/dylang/Shortid.png)](http://travis-ci.org/dylang/Shortid)

ShortId is a tiny id generator good for creating guarenteed unique ids that are easier to use in urls and for sharing than UUID's.

* 8-12 characters
* Non-sequential so they are not predictable.
* Random alphabet based on a seed you provide so others can't decrypt them.
* Includes version in case you want to change how you encode your id.
* Includes cluster worker id so you can use this on multi-processor server instances.
* Includes tests that run on Mocha.

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

## ShortId.generate()

Returns an id.


## Other functions

(Full docs coming soon.)

* ShortId.version(int) sets version, returns ShortId module.
* ShortId.worker(int) sets cluster worker, returns ShortId module.

See the tests for more examples.

Created for Node Knockout 2011 winner [Doodle Or Die](http://doodleordie.com).