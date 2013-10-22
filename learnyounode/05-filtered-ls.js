var fs = require('fs')

fs.readdir(process.argv[2], function(err, data){
  var re = new RegExp('\\.'+process.argv[3]+'$');
  for(var x = 0; x < data.length; x++){
    if(data[x].match(re)) {
      console.log(data[x]) 
    }
  }
})
