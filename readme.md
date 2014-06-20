# ShortId [![Build Status](https://secure.travis-ci.org/dylang/shortid.png)](http://travis-ci.org/dylang/shortid)

[![NPM](https://nodei.co/npm/shortid.png?downloads=true)](https://nodei.co/npm/shortid/)

ShortId creates amazingly short non-sequential url-friendly unique ids.  Perfect for url shorteners, MongoDB and Reddis ids, and any other id users might see.

 * By default 7-14 url-friendly characters: `A-Z`, `a-z`, `0-9`, `_-`
 * Non-sequential so they are not predictable.
 * Supports `cluster` (automatically), custom seeds, custom alphabet.
 * Popular replacement for Mongo ID/Mongoose ID.
 * Includes [Mocha](http://visionmedia.github.com/mocha/) tests.

- - -

## Install

```shell
$ npm install shortid --save
```

`shortid` has no dependencies.

- - -

## Usage

```js
var shortId = require('shortid');

console.log(shortId.generate());

//PPBqWA9
```

Mongoose Unique Id
```js
_id: {
    type: String,
    unique: true,
    'default': shortId.generate
},
```

- - -

## Example

```js
~/projects/shortid ❯ node examples/examples.js
eWRhpRV
23TplPdS
46Juzcyx
dBvJIh-H
2WEKaVNO
7oet_d9Z
dogPzIz8
nYrnfYEv
a4vhAoFG
hwX6aOr7
```

- - -

## API

### `generate()`

Returns an amazingly short non-sequential unique id.

__Alias:__ `shortId()`

__Example__

```js
users.insert({
    _id: shortId.generate()
    name: ...
    email: ...
    });
```

---------------------------------------

### `seed(float)`

__Default:__ `1`

__Optional__

Choose a unique value that will seed the random number generator so users won't be able to figure out the pattern of the unique ids. Call it just once in your application before using `shortId` and always use the same value in your application.

Most developers won't need to use this. If you are worried about users decrypting the id then use it as a secret value to better encrypt the id.

__Example__

```js
shortId.seed(1000);
```

---------------------------------------

### `characters(string)`

__Default:__ `'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'`

__Optional__

Change the characters used.

You must provide a string of all 64 unique characters. Order is not important. 

The default characters provided were selected because they are url safe.

__Example__

```js
// use $ and @ instead of - an _
shortId.alphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
```

```js
// any 64 unicode charcters work
shortId.alphabet('ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨⑩⑪⑫');
```

- - -

### Some projects using `shortId`

`shortId` was created for Node Knockout 2011 winner for Most Fun [Doodle Or Die](http://doodleordie.com).
Millions of doodles have been saved with `shortId` filenames. Every log message gets a `shortId` to make it easy
for us to look up later.

Here are some other projects that use shortid:

* [bevy](https://npmjs.org/package/bevy) - A simple server to manage multiple Node services.
* [capre](https://npmjs.org/package/capre) - Cross-Server Data Replication.
* [cordova-build](https://www.npmjs.org/package/cordova-build) - an alternative to phonegap build that runs on your servers/agents.
* [couchdb-tools](https://www.npmjs.org/package/couchdb-tools) - A library of handy functions for use when working with CouchDB documents.                                                          
* [CleverStack/clever-email](https://github.com/CleverStack/clever-email) - E-mail system for CleverStack.
* [CloudTypes](https://github.com/ticup/CloudTypes) - JavaScript end2end implementation of the Cloud Types model for Eventual Consistency programming.
* [dnode-tarantula](https://github.com/jutaz/dnode-tarantula) - an asynchronous rpc and event system for node.js based on dnode-protocol and TCP sockets.
* [mongoose-url-shortener](https://www.npmjs.org/package/mongoose-url-shortener) - A simple URL Shortening library for NodeJS using Promises/A+ results.
* [mozilla/smokejumper](https://github.com/mozilla/smokejumper) - The Smoke Jumper project is an effort to bring dead simple, secure, P2P file sharing to Firefox.
* [shortness](https://npmjs.org/package/shortness) - Node based URL shortener that uses SQLite.
* [file-db](https://npmjs.org/package/file-db) - Document database that uses directories and files to store its data, supporting nested key-value objects in named collections.
* [resume-generator](https://www.npmjs.org/package/resume-generator) - Resume Generator.
* [riffmint](https://npmjs.org/package/riffmint) - Collaboration in musical space.
* [rap1ds/dippa](https://github.com/rap1ds/dippa) - Dippa Editor – A web-based LaTeX editor http://dippaeditor.com


- - -

## License

(The MIT License)

Copyright (c) 2011-2014 Dylan Greene <dylang@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
