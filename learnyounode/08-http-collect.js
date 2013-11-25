http = require('http')
bl = require('bl')

http.get(process.argv[2], function(resp){
  resp.setEncoding("utf8")
  resp.on("data", console.log)
  resp.on("error", console.error)
})
