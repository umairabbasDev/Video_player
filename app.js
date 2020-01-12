const video = document.querySelector('.video');
const juice = document.querySelector('.green-juice');
const btn = document.getElementById('play-pause');
const fsbtn = document.getElementById('fs');


function togglePlayPause() {
  if (video.paused) {
    btn.className = 'pause';
    video.play();
  }
  else {
    btn.className = "play";
    video.pause();
  }
}

btn.onclick = function () {
  togglePlayPause();

};

video.addEventListener('timeupdate', function () {
  let juicePos = video.currentTime / video.duration;
  juice.style.width = juicePos * 100 + "%"

  if (video.ended) {
    btn.className = 'play';
  }
})

function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE/Edge */
    video.msRequestFullscreen();
  }
}

fsbtn.onclick = function () {
  openFullscreen()
};




window.onload = function () {
  const fileupload = document.getElementById("FileUpload1");
  const filePath = document.getElementById("spnFilePath");
  const button = document.getElementById("btnFileUpload");
  button.onclick = function () {
    fileupload.click();
  };
  fileupload.onchange = function () {
    let fileName = fileupload.value.split('\\')[fileupload.value.split('\\').length - 1];
    filePath.innerHTML = `<b class="alert" >Selected File: ${fileName} </b>`;
  };
};