var ShortId = require('../index');

//Generate 10 ids

var i = 10;
while (i--) {
    console.log(ShortId.generate());
}