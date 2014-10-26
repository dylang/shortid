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

Most developers won't need to use this, it's mainly for testing ShortId. 

If you are worried about users somehow decrypting the id then use it as a secret value for increased encryption.

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
shortId.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
```

```js
// any 64 unicode charcters work
shortId.characters('ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨⑩⑪⑫');
```

