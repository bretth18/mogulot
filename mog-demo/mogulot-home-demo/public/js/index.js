/*
var codepen_postmessage_css_hack = new function(){
  var css = document.getElementsByClassName('cp-pen-styles')[0].innerHTML;
  var resetCSS = function(){
    document.getElementsByClassName('cp-pen-styles')[0].innerHTML = css;
  };
  if(css.length>0){
    setInterval(resetCSS, 1);
  }
};
*/


$(document).ready(function(){

  $('.colorplay').remove();

  biscuit.ready(function(){
    // everything is ready, yo

    // our ghetto logging function
    var log = function(msg){$('#status').append('<div>'+msg+'</div>');};

    // function to update the song info
    var updateInfo = function(artist,title,img){
      $('.controls').remove();
      console.log(typeof title);
      var display = ((typeof title != 'undefined' && title.length==0)?artist:artist+' - '+title);
      $('.center-column-container').append('<div class="controls fadeIn"><div class="songinfo">'+display+'</div></div>');
    };

    //intercept the form submit
    $('.center-column').on('submit','#form',function(e){
      e.preventDefault();
      var q = this.search.value;
      this.search.value = '';
      this.search.blur();

      log(q);
      biscuit.searchAndPlay(q,function(data){
        updateInfo(data.artist,data.title);
      });
    });
    $('#form input').on('focus',function(e){
      //$('#background').addClass('opaque');
      log('focus');
    });
    $('#form input').on('blur',function(e){
      //$('#background').removeClass('opaque');
      log('blur');
    });

    $('.center-column').on('click','.songinfo',function(e){
      $('body').hasClass('playing')?biscuit.pause():biscuit.play();
    });

    biscuit.on('play',function(){
      $('body').addClass('playing');
    });
    biscuit.on('pause',function(){
      $('body').removeClass('playing');
    });
    biscuit.on('ended',function(){
      $('.controls').fadeOut(600);
    });

    // lol hack at animating the center-column's height
    var heightPoll = setInterval(function(){
      var e = document.getElementsByClassName('center-column')[0];
      var c = document.getElementsByClassName('center-column-container')[0];
      e.style.height = c.scrollHeight+'px';
    },10);

    // setup presets
    var presetcontainer = $('#page .presets');
    presetcontainer.append('<div class="preset" data-q="chrome sparks marijuana">Chrome Sparks</div>');
    presetcontainer.append('<div class="preset" data-q="mt. ossa time is a seed">MT. OSSA</div>');
    presetcontainer.append('<div class="preset" data-q="tove lo habits">Tove Lo</div>');
    $('.center-column').on('click','.presets .preset',function(e){
      biscuit.searchAndPlay($(this).data('q'),function(data){
        updateInfo(data.artist,data.title);
      });
    });

    // we're ready!
    $('#status').html('ready');

    // kick it off in an animation
    $({count:0}).animate({count:100000}, {
      duration: 10000,
      step: function(now,fx) {
        if( fx.pos < 0.1 ){
          if($('.center-column-container > .hello').length == 0){
            $('.center-column-container').prepend('<div class="hello greet">welcome to mogulotHome</div>');
          }
        }else if(fx.pos < 0.2){
          if($('.center-column-container > .listengreet').length == 0){
            $('.center-column-container').append('<div class="listengreet greet">listen to some music.</div>');
          }
        }else if(fx.pos < 0.4){
          $('.hello').fadeOut(600);
          $('.listengreet').delay(300).fadeOut(300);
        }else if(fx.pos < 0.43){
          if($('.center-column-container > .presetgreet').length == 0){
            $('.center-column-container').append('<div class="presetgreet greet">Try some presets.</div>');
          }
        }else if(fx.pos < 0.48){
          if($('.center-column-container > .presets').length == 0){
            $('.center-column-container').append('<div class="presets flex fadeIn"></div>');
            var presetcontainer = $('#page .presets');
            presetcontainer.append('<div class="preset" data-q="chrome sparks marijuana">Chrome Sparks</div>');
            presetcontainer.append('<div class="preset" data-q="mt. ossa bongo">MT. OSSA</div>');
            presetcontainer.append('<div class="preset" data-q="leon vynehall house of dupree">Leon Vynehall</div>');
            presetcontainer.append('<div class="preset" data-q="dirty art club jetlag">Dirty Art Club</div>');
          }
        }else if(fx.pos < 0.51){
          if($('.center-column-container > .searchgreet').length == 0){
            $('.center-column-container').append('<div class="searchgreet greet">Or search for something.</div>');
          }
        }else if(fx.pos < 0.56){
          if($('.center-column-container > .search').length == 0){
            $('.center-column-container').append('<div class="search fadeIn"><form id="form"><input type="text" placeholder="artist or song" autocomplete="off" name="search" /></form></div>');
          }
        }else if(fx.pos < 0.76){
        }else if(fx.pos < 0.77){
          $('.searchgreet, .presetgreet').fadeOut(800);
        }else if(fx.pos < 0.78){
        }else if(fx.pos < 0.79){
        }
      }
    });
  });
});
