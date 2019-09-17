
// progressbar oppe i toppen
document.addEventListener(
  "scroll",
  function() {
    var scrollTop =
      document.documentElement["scrollTop"] || document.body["scrollTop"];
    var scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;
    scrollPercent = scrollTop / scrollBottom * 100 + "%";
    document.getElementById("progress").style.setProperty("--scroll", scrollPercent);
  },
  { passive: true }
);

//autoplay frontpage video
var vid = document.getElementById("reelVideo");
vid.autoplay = true;
vid.load();


//autoplay second video when in viewport
/**
 * fil: audio.js
 * purpose: play audio when the containing div is visible
 **/

// eventlistener: a window scroll
window.addEventListener("scroll", function() { // detect scroll event

  var myVideo = document.getElementById("myvideo"); // select audio id
  var video = document.getElementById("video");

// Below: start and stop audio
  if (elFllVsbl(video)) { // if the #lyd div is visible then
    if (!(myVideo.curentTime > 0)) {
      myVideo.play(); // play audio
    }
  } else {
    myVideo.pause();
    myVideo.currentTime = 0; // rewind the sound
  }
})

// this function will check whether a tag is visible
function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

/*
NB: the audio / video tags will allways return true,
solution: place the tag in a div and test for that div.
*/

//billedeskift
var billeder = [
  "dina.png",
  "mikkel.png",
  "lynge.png",
  "balder.png"
];
var pic = document.getElementById('polaroid');
let a = 0;
function changeImage() {
    pic.style.backgroundImage = 'url("images/' + billeder[a] + '")';
    sound.innerHTML = '<audio>'+'<source src="audio/' + voice[a] + '">' + '</audio>';
    a++;
    if (a>billeder.length-1) {
      a=0
    }
  }
// play sound when button is pressed
var sound = document.getElementById('speaker');
var voice = [
  "balder.mp3",
  "dina.mp3",
  "mikkel.mp3",
  "forstander.mp3"
];

function changeSound(){
    sound.innerHTML = '<audio autoplay>'+'<source src="audio/' + voice[a] + '">' + '</audio>';
}

var time;

function timedAudioStart() {
  var element = document.getElementById("speaker-img");
  element.classList.add("speakercolor-start");
  time = setTimeout(function(){ element.classList.remove("speakercolor-start")
}, 23000);
}


function stopPlay() {
  var element = document.getElementById("speaker-img");
  element.classList.remove("speakercolor-start");
}

function StopFunction() {
  clearTimeout(time);
}





//parallax billede

var px = Array.prototype.slice.call(document.querySelectorAll('.parallax'));
window.addEventListener('scroll', function() {
  parallax(px);
})

function parallax(targetElements) {
  targetElements.forEach(el => {
    if (inView(el)) {
      var scroll = (window.pageYOffset - el.offsetTop) / 4;
      var y = scroll > 0 ? -scroll:scroll;
      el.style.backgroundPosition = "0% " + y + "px";
    }
  })
}

function inView(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 ||
    rect.bottom <= window.innerHeight
   );
}
