var fs = require('fs')

b = fs.readFileSync(process.argv[2])
console.log(b.toString().split('\n').length-1)
