const audio = new Audio();

const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');
const stopButton = document.querySelector('.stop-button');

playButton.addEventListener('click', () => {
  audio.play();
});

pauseButton.addEventListener('click', () => {
  audio.pause();
});

stopButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

audio.addEventListener('ended', () => {
  audio.currentTime = 0;
});
