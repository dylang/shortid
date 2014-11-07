## shortid  [![Build Status](http://img.shields.io/travis/dylang/shortid.svg?style=flat-square)](https://travis-ci.org/dylang/shortid) [![shortid](http://img.shields.io/npm/dm/shortid.svg?style=flat-square)](https://www.npmjs.org/package/shortid)

> Amazingly short non-sequential url-friendly unique id generator.








ShortId creates amazingly short non-sequential url-friendly unique ids.  Perfect for url shorteners, MongoDB and Reddis ids, and any other id users might see.

 * By default 7-14 url-friendly characters: `A-Z`, `a-z`, `0-9`, `_-`
 * Non-sequential so they are not predictable.
 * Supports `cluster` (automatically), custom seeds, custom alphabet.
 * Can generate any number of ids without duplicates, even millions per day.
 * Perfect for games, especially if you are concerned about cheating so you don't want an easily guessable id.
 * Apps can be restarted any number of times without any chance of repeating an id.
 * Popular replacement for Mongo ID/Mongoose ID.
 * Includes [Mocha](http://visionmedia.github.com/mocha/) tests.



### Usage

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



### Example

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


#### Real World Examples

`shortId` was created for Node Knockout 2011 winner for Most Fun [Doodle Or Die](http://doodleordie.com).
Millions of doodles have been saved with `shortId` filenames. Every log message gets a `shortId` to make it easy
for us to look up later.

Here are some other projects that use shortId:

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
* [rap1ds/dippa](https://github.com/rap1ds/dippa) - Dippa Editor – A web-based LaTeX editor




### API

#### `generate()`

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

#### `seed(float)`

__Default:__ `1`

__Optional__

Choose a unique value that will seed the random number generator so users won't be able to figure out the pattern of the unique ids. Call it just once in your application before using `shortId` and always use the same value in your application.

Most developers won't need to use this, it's mainly for testing ShortId. 

If you are worried about users somehow decrypting the id then use it as a secret value for increased encryption.

__Example__

```js
shortId.seed(1000);
```

---------------------------------------

#### `characters(string)`

__Default:__ `'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'`

__Optional__

Change the characters used.

You must provide a string of all 64 unique characters. Order is not important.

The default characters provided were selected because they are url safe.

__Example__

```js
// use $ and @ instead of - an _
shortId.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
```

```js
// any 64 unicode charcters work
shortId.characters('ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨⑩⑪⑫');
```






### About the Author [![@dylang](https://img.shields.io/badge/github-dylang-green.svg?style=flat-square)](https://github.com/dylang) [![@dylang](https://img.shields.io/badge/twitter-dylang-blue.svg?style=flat-square)](https://twitter.com/dylang)

Hi! Thanks for checking `shortid`! My name is **Dylan Greene**. When not overwhelmed with my two young kids I enjoy contributing
to the open source community. I'm also a tech lead at [Opower](http://opower.com).

Here's some of my other Node projects:

| Name | Description | npm&nbsp;Downloads |
|---|---|--:|--:|
| [`grunt‑notify`](https://github.com/dylang/grunt-notify) | Automatic desktop notifications for Grunt errors and warnings using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center, and Notify-Send. | [![grunt-notify](https://img.shields.io/npm/dm/grunt-notify.svg?style=flat-square)](https://www.npmjs.org/package/grunt-notify) |
| [`grunt‑prompt`](https://github.com/dylang/grunt-prompt) | Interactive prompt for your Grunt config using console checkboxes, text input with filtering, password fields. | [![grunt-prompt](https://img.shields.io/npm/dm/grunt-prompt.svg?style=flat-square)](https://www.npmjs.org/package/grunt-prompt) |
| [`npm‑check`](https://github.com/dylang/npm-check) | Check for outdated, incorrect, and unused dependencies. | [![npm-check](https://img.shields.io/npm/dm/npm-check.svg?style=flat-square)](https://www.npmjs.org/package/npm-check) |
| [`rss`](https://github.com/dylang/node-rss) | RSS feed generator. Add RSS feeds to any project. Supports enclosures and GeoRSS. | [![rss](https://img.shields.io/npm/dm/rss.svg?style=flat-square)](https://www.npmjs.org/package/rss) |
| [`xml`](https://github.com/dylang/node-xml) | Fast and simple xml generator. Supports attributes, CDATA, etc. Includes tests and examples. | [![xml](https://img.shields.io/npm/dm/xml.svg?style=flat-square)](https://www.npmjs.org/package/xml) |
| [`changelog`](https://github.com/dylang/changelog) | Command line tool (and Node module) that generates a changelog in color output, markdown, or json for modules in npmjs.org's registry as well as any public github.com repo. | [![changelog](https://img.shields.io/npm/dm/changelog.svg?style=flat-square)](https://www.npmjs.org/package/changelog) |
| [`grunt‑attention`](https://github.com/dylang/grunt-attention) | Display attention-grabbing messages in the terminal | [![grunt-attention](https://img.shields.io/npm/dm/grunt-attention.svg?style=flat-square)](https://www.npmjs.org/package/grunt-attention) |
| [`observatory`](https://github.com/dylang/observatory) | Beautiful UI for showing tasks running on the command line. | [![observatory](https://img.shields.io/npm/dm/observatory.svg?style=flat-square)](https://www.npmjs.org/package/observatory) |
| [`anthology`](https://github.com/dylang/anthology) | Module information and stats for any @npmjs user | [![anthology](https://img.shields.io/npm/dm/anthology.svg?style=flat-square)](https://www.npmjs.org/package/anthology) |
| [`grunt‑cat`](https://github.com/dylang/grunt-cat) | Echo a file to the terminal. Works with text, figlets, ascii art, and full-color ansi. | [![grunt-cat](https://img.shields.io/npm/dm/grunt-cat.svg?style=flat-square)](https://www.npmjs.org/package/grunt-cat) |

_This list was generated using [anthology](https://github.com/dylang/anthology)._


### License
Copyright (c) 2014 Dylan Greene, contributors.

Released under the [MIT license](https://tldrlegal.com/license/mit-license).

Screenshots are [CC BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) (Attribution-ShareAlike).

***
_Generated using [grunt-readme](https://github.com/assemble/grunt-readme) with [grunt-templates-dylang](https://github.com/dylang/grunt-templates-dylang) on Friday, November 7, 2014._

