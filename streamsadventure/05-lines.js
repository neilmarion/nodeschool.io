var through = require('through')
var split = require('split')
var c = 1 

process.stdin.pipe(split()).pipe(through(function (buf) {
  if (c % 2 == 0) {
    this.queue(buf.toString().toUpperCase()+"\n")
  } else {
    this.queue(buf.toString().toLowerCase()+"\n")
  }
  c++
}, function(){
  this.queue(null)
})).pipe(process.stdout)
