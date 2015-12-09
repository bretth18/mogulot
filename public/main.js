//main.js
//2015 bretth18
$(function(){

  //initialize var for emailInput page
  var $window = $(window);
  var $emailInput = $('.emailInput');
  var $inputMessage = $('.inputMessage');
  var $emailConf = $('.emailConf');


  //emailInput propmt
  var email;
  var connected = true;
  var typing = false;
  var $currentInput = $emailInput.focus();

  var server = BinaryServer();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//TODO: Define function call badEmail with list of invalids
//      Append userEmail into mongooseDB for collection purposes
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  function adduserEmail (data) {
    var message = 'Sign up';
    if (inputMessage === null, badEmail){
      message += "Please enter a valid email address";
    }
    else {
      mesage += "Thank you for registering, " + inputMessage;
    }
    log(inputMessage);
  });

  //Begin call to stream page
  function addUserToStream (steam, data, user) {
    if (adduserEmail === true, i=0, i++){
      page.load(.stream);
      console.log('Client has connected to remote stream')
      audioAPI.onConnect(load.playerArea);
      log(playerArea);
      return;
    }
    else{
      return;
    }
  //Display current track from stream
  function displayTrackInfo (stream, audioAPI, data) {
    getTrackInfo(audioAPI)
    AppendText.trackinfo(track.title);
    console.log('Now Playing ' + track.title)
    track.Playing = true;
    log('');
  }



    }
  }
}
