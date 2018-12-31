var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));


const port = process.env.PORT || 8080 ;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('index.js')
})