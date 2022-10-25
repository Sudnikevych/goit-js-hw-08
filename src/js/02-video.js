import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

initialization();

function playback({ seconds }) {
  localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
}

player.on('timeupdate', throttle(playback, 1000));

function initialization() {
  let saveData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saveData) {
    player.setCurrentTime(saveData);
  }
}
