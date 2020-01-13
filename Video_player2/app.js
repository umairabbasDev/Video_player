// Set object references
const player = document.querySelector('.player');
const video = player.querySelector('.video');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_fill');

const playBtn = player.querySelector('.play-pause');
const skipButtons= player.querySelectorAll('[data-skip]');

const ranges = player.querySelectorAll('.player_slider');


//main funtions
function playPause() {
  video[video.paused ? 'play' : 'pause']();
}


function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function progresshandle() {
    progressBar.style.width = `${(video.currentTime / video.duration)* 100}%`;
    
}

function rangupdate() {
    video[this.name] = this.value;
}


function scrub(e) {
    video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;

}


//hook the events
video.addEventListener('click', playPause);
playBtn.addEventListener('click', playPause);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', rangupdate));

ranges.forEach(range => range.addEventListener('mousemove', rangupdate));


video.addEventListener('timeupdate' , progresshandle)


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);





















// // Add event listeners
// playbtn.addEventListener('click', playPause, false);
// seekslider.addEventListener('change', vidSeek, false);
// vid.addEventListener('timeupdate', seektimeupdate, false);
// mutebtn.addEventListener('click', vidmute, false);
// volumeslider.addEventListener('change', setvolume, false);
// fullscreenbtn.addEventListener('click', toggleFullScreen, false);


// function playPause() {
//     if (vid.paused) {
//         vid.play();
//         playbtn.style.background = 'url(pause.png)';
//     } else {
//         vid.pause();
//         playbtn.style.background = 'url(play.png)';
//     }
// }
// function vidSeek() {
//     var seekto = vid.duration * (seekslider.value / 100);
//     vid.currentTime = seekto;
// }
// function seektimeupdate() {
//     let nt = vid.currentTime * (100 / vid.duration);
//     seekslider.value = nt;
//     let curmins = Math.floor(vid.currentTime / 60);
//     let cursecs = Math.floor(vid.currentTime - curmins * 60);
//     let durmins = Math.floor(vid.duration / 60);
//     let dursecs = Math.floor(vid.duration - durmins * 60);
//     if (cursecs < 10) { cursecs = '0' + cursecs; }
//     if (dursecs < 10) { dursecs = '0' + dursecs; }
//     if (curmins < 10) { curmins = '0' + curmins; }
//     if (durmins < 10) { durmins = '0' + durmins; }
//     curtimetext.innerHTML = curmins + ':' + cursecs;
//     durtimetext.innerHTML = durmins + ':' + dursecs;
// }
// function vidmute() {
//     if (vid.muted) {
//         vid.muted = false;
//         mutebtn.innerHTML = 'Mute';
//     } else {
//         vid.muted = true;
//         mutebtn.innerHTML = 'Unmute';
//     }
// }
// function setvolume() {
//     vid.volume = volumeslider.value / 100;
// }
// function toggleFullScreen() {
//     if (vid.requestFullScreen) {
//         vid.requestFullScreen();
//     } else if (vid.webkitRequestFullScreen) {
//         vid.webkitRequestFullScreen();
//     } else if (vid.mozRequestFullScreen) {
//         vid.mozRequestFullScreen();
//     }
// }