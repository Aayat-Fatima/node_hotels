const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000);

// const http=require('http');

// const site=http.createServer(function(req,res){
//   res.end("heelo,world");
// })
// site.listen(3000);

