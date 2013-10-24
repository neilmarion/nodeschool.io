http = require('http')

http.get(process.argv[2], function(resp){
  resp.on("data", function(data){
    console.log(data) 
  }).setEncoding("utf8")
})
