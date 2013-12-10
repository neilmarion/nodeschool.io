var concat = require('concat-stream')

p = process.stdin
p.pipe(concat(function (buffer) {
  console.log(buffer.toString().split('').reverse().join(''))
}))
