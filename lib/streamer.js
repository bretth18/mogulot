//streamer.js
//2015 bretth18

var icecast = require('icecast');
var request = require('request');


function Streamer(app, radio, audioAPI, decoder, provider, AudioBufferService){
  if(! (this instanceof arguments.callee)){
    return new arguments.callee(arguments);
  }

  var self = this;

  self.app = app;
  self.settings = app.settings.server;
  self.radio = radio;
  self.audioAPI = audioAPI
  self.decoder = decoder;
  self.provider = provider;
  self.AudioBufferService = AudioBufferService;
}

Streamer.proto.init = function(){
  var self = this;
  self.createStream();
  setInterval(function(){
    self.serverCallback()},
    1* 10000);
  };
  })
}
};
