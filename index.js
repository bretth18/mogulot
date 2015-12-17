//index.js
//2015 bretth18

//+++++++++++++++++++++++++++++++++++++++++++++
//TODO: create functional audioservice handler
//      lossless audioservice, audioAPI
//      manage clientID in connectedDB
//      socket routing through express
//      fix client.onconnect to broadcast metaID
//+++++++++++++++++++++++++++++++++++++++++++++


var http = require('http');
var app = require('express')();
var connectedDB = require('mongoose');
var client = require('streamer');

// create a server with the express app as a listener
var server = http.createServer(app).listen(9000);

// attach BinaryServer to the base http server
var BinaryServer = require('/node_modules/binaryjs/').BinaryServer;
var bs = BinaryServer({server: server});

//express routing
app.use(express.static(__dirname+ '/public'));

// Wait for new user connections
// Client onConnect:
bs.on('connection', function(client){
  console.log('Client has connected to remote server')
  client.on('connection', function(broadcast, client, mongoose){
    username: client.username
    message: client.data
    var addedUser = true;
    mongoose.addedUser('##CLIENTID');

  }

  // Incoming stream from browsers
  client.on('stream', function(stream, meta){

    //stream needs to interpret remote audio source, not local file, leave for testing
    var file = fs.createWriteStream(__dirname+ '/public/' + meta.name);
    stream.pipe(file);
    //
    //stream.pipe(audioservice);

    //Audio stream handler
    //Audioservice is pulled from server based audio input

    var audioservice =  require('/lib/audioAPI').audioservice;
      stream.pipe('##REMOTEUPSTREAMAUDIO');
      if client.on('stream', null){
        console.log('Client failed to connect to remote upstream audio');
        stream.pause();
      else client.on('stream', true){
        console.log('Client has connected to the remote stream');
        stream.write({cdn: stream.id / meta.id});
        client.log('##CLIENTID', function(clientlog, meta));



      }
    var client.onConnect = require(remote.upstream).Audioservice;
      console.log('Client has connected to remote server');

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

//exit manager
client.on('quit', function(exit){
  stream.end();
  console.log('Client has disconnected from the server');

}

server.listen(9000);
console.log('HTTP and BinaryJS server started on port 9000');
