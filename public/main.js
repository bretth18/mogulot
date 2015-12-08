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

//TODO: Define function call badEmail with list of invalids
//      Append userEmail into mongooseDB for collection purposes

  function adduserEmail (data) {
    var message = 'Sign up';
    if (inputMessage === null, badEmail){
      message += "Please enter a valid email address";
    }
    else {
      mesage += "Thank you for registering, " + inputMessage;
    }
    log(inputMessage);

    }
  }
}
