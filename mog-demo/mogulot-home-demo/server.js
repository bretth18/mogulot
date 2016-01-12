//server.js
//2016 bretth18

var express = require('express'),
    path = require('path'),
    app = express();

//sluts love heroku, baby
var port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, function () {
  console.log("Bitch Mob server listening on port %s.", + port);

});
