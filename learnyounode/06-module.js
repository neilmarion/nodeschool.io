var fs = require('fs')

module.exports = function(file, filter, callback){
  fs.readdir(file, function(err, data){
    var arr = [] 
    var re = new RegExp('\\.'+filter+'$');
    if(err){
      return callback(err, arr)
    }

    for(var x = 0; x < data.length; x++){
      if(data[x].match(re)) {
        console.log(data[x]) 
        arr.push(data[x])
      }
    }
    return callback(err, arr)
  })
}
