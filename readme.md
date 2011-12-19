# ShortId [![Build Status](https://secure.travis-ci.org/dylang/Shortid.png)](http://travis-ci.org/dylang/Shortid)

ShortId is a tiny id generator good for creating guarenteed unique ids that are easier to use in urls and for sharing than UUID's.

* 8-12 characters
* Non-sequential so they are not predictable.
* Random alphabet based on a seed you provide so others can't decrypt them.
* Includes version in case you want to change how you encode your id.
* Includes cluster worker id so you can use this on multi-processor server instances.
* Includes tests that run on Mocha.

## ShortId.generate() returns id

Other functions (docs coming soon)

* ShortId.version(int) sets version, returns ShortId
* ShortId.worker(int) sets cluster worker, returns ShortId

See the tests for more examples.