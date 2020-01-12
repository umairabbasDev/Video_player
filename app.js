// Set object references
const vid = document.getElementById("my_video");
const playbtn = document.getElementById("playpausebtn");
const seekslider = document.getElementById("seekslider");
const curtimetext = document.getElementById("curtimetext");
const durtimetext = document.getElementById("durtimetext");
const mutebtn = document.getElementById("mutebtn");
const volumeslider = document.getElementById("volumeslider");
const fullscreenbtn = document.getElementById("fullscreenbtn");



// Add event listeners
playbtn.addEventListener("click", playPause, false);
seekslider.addEventListener("change", vidSeek, false);
vid.addEventListener("timeupdate", seektimeupdate, false);
mutebtn.addEventListener("click", vidmute, false);
volumeslider.addEventListener("change", setvolume, false);
fullscreenbtn.addEventListener("click", toggleFullScreen, false);


function playPause() {
    if (vid.paused) {
        vid.play();
        playbtn.style.background = "url(pause.png)";
    } else {
        vid.pause();
        playbtn.style.background = "url(play.png)";
    }
}
function vidSeek() {
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
}
function seektimeupdate() {
    let nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;
    let curmins = Math.floor(vid.currentTime / 60);
    let cursecs = Math.floor(vid.currentTime - curmins * 60);
    let durmins = Math.floor(vid.duration / 60);
    let dursecs = Math.floor(vid.duration - durmins * 60);
    if (cursecs < 10) { cursecs = "0" + cursecs; }
    if (dursecs < 10) { dursecs = "0" + dursecs; }
    if (curmins < 10) { curmins = "0" + curmins; }
    if (durmins < 10) { durmins = "0" + durmins; }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;
}
function vidmute() {
    if (vid.muted) {
        vid.muted = false;
        mutebtn.innerHTML = "Mute";
    } else {
        vid.muted = true;
        mutebtn.innerHTML = "Unmute";
    }
}
function setvolume() {
    vid.volume = volumeslider.value / 100;
}
function toggleFullScreen() {
    if (vid.requestFullScreen) {
        vid.requestFullScreen();
    } else if (vid.webkitRequestFullScreen) {
        vid.webkitRequestFullScreen();
    } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen();
    }
}