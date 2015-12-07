//index.js
//2015 bretth18

//+++++++++++++++++++++++++++++++++++++++++++++
//TODO: create functional audioservice handler
//      lossless audioservice, audioAPI
//+++++++++++++++++++++++++++++++++++++++++++++


var http = require('http');
var app = require('express')();

// create a server with the express app as a listener
var server = http.createServer(app).listen(9000);

// attach BinaryServer to the base http server
var BinaryServer = require('/node_modules/binaryjs/').BinaryServer;
var bs = BinaryServer({server: server});

//express routing

// Wait for new user connections
bs.on('connection', function(client){
  console.log('Client has connected to remote server');
  client.on('connection', function(broadcast, client){
    username: client.username
    message: client.data
  }

  // Incoming stream from browsers
  client.on('stream', function(stream, meta){
    //
    var file = fs.createWriteStream(__dirname+ '/public/' + meta.name);
    stream.pipe(file);
    //

    //Audio stream handler
    //Audioservice is pulled from server based audio input

    var audioservice =  require('/lib/audioAPI').audioservice;
      stream.pipe('##REMOTEUPSTREAMAUDIO');
      if client.on('stream', null){
        console.log('Client failed to connect to remote upstream audio');


      }
    // Send progress back
    stream.on('data', function(data){
      stream.write({rx: data.length / meta.size});
    });
    //
  });
});
//
//

server.listen(9000);
console.log('HTTP and BinaryJS server started on port 9000');
