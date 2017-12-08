var express = require('express');
var app = express();


app.use(express.static('dist'))
app.use(express.json())

app.post('/api/v1/save', function(req, res){
  var body = req.body;
  console.log(body)
  res.send('hello world');
});


app.listen(3000);