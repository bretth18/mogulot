var minutes = 0;
var seconds = 0;
var paused = false;
var bar = document.getElementById("loading");
var play = document.getElementById("play");
var time = document.getElementById("time");
var track = document.getElementById("track");
var clock = setInterval(function() {
	if (paused == false) {
		seconds++;
		checkTime();
	}
}, 1000);

function checkTime() {
	if (seconds < 0) {
		seconds = 0;
	}
	if (seconds >= 60) {
		seconds = 0;
		minutes++;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes == 3 && seconds > 52 || minutes > 3) {
		minutes = 0;
		seconds = 0;
	}
	time.innerHTML = minutes + ":" + seconds;
	if (minutes == 3 && seconds == 52) {
		minutes = 0;
		seconds = 0;
	}
}

function playPause(el) {
	if (el.classList.contains('paused')) {
		el.classList.remove('paused');
		paused = false;
		track.play();
	} else {
		el.classList.add('paused');
		paused = true;
		track.pause();
	}

	if (bar.classList.contains('paused')) {
		bar.classList.remove('paused');
	} else {
		bar.classList.add('paused');
	}
}

play.addEventListener("click", function() {
	playPause(this);
});

time.innerHTML = "0:00";
track.play();
track.volume = 0.1;