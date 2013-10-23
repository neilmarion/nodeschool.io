var mymodule = require('./06-module.js')

mymodule(process.argv[2], process.argv[3], function(error, res){
  console.log(error.toString())
})
