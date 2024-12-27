
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
   
  } else {
    audio.pause();
    
  }
});


const musicRange = document.getElementById('musicRange');

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.addEventListener('timeupdate', () => {
  document.getElementById('currentTime').innerHTML = formatTime(audio.currentTime);
  document.getElementById('duration').innerHTML = formatTime(audio.duration);
  musicSlider.value = (audio.currentTime / audio.duration) * 100;
});

musicRange.addEventListener('input', () => {
  audio.currentTime = (musicSlider.value / 100) * audio.duration;
  document.getElementById('currentTime').innerHTML = formatTime(audio.currentTime);
  
});

audio.addEventListener('timeupdate', () => {
  musicRange.value = (audio.currentTime / audio.duration) * 100;
});

document.getElementById('playss').addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    
   
  } else {
    audio.pause();
    
  }
});

const playPauseIcon = document.getElementById('playss');

audio.addEventListener('play', () => {
  playPauseIcon.src = 'images/pause.png';
});

audio.addEventListener('pause', () => {
  playPauseIcon.src = 'images/playbt.png';
});


const likeUnlike = document.getElementById('liun');

let isLiked = false;

likeUnlike.addEventListener('click', () => {
  if (isLiked) {
    likeUnlike.src = 'images/like-icon-like.png';
  } else {
    likeUnlike.src = 'images/like-icon-liked.png';
  }
  isLiked = !isLiked;
});