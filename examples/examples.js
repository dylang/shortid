var shortId = require('../shortid');

//Generate 10 ids

var i = 10;
while (i--) {
    console.log(shortId.generate());
}