var shortid = require('..')

var COUNT = 100 * 1000
var LENGTH = shortid().length

var chars = { }
for (var i = 0; i < COUNT; i++) {
  var id = shortid()
  for (var j = 0; j < id.length; j++) {
    var char = id[j]
    if (!chars[char]) chars[char] = 0
    chars[char] += 1
  }
}

var ALPHABET = Object.keys(chars).length

var d = Object
  .keys(chars)
  .map(i => [i, chars[i]])
  .sort((a, b) => b[1] - a[1])
  .map(i => {
    var probability = i[1] * ALPHABET / (COUNT * LENGTH)
    console.log(i[0] + '  ' + probability)
    return probability
  })

console.log('\nMax. difference: ' + (d[0] - d[d.length - 1]))
