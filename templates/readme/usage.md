## Usage

```js
var shortid = require('shortid');

console.log(shortid.generate());
//PPBqWA9
```

Mongoose Unique Id
```js
_id: {
    type: String,
    'default': shortid.generate
},
```
