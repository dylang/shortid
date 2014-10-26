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
