import Howler from 'howler';
var _sounds = {};

function updateSounds(url){
  if( !_sounds[url] ){
      _sounds[url] = new Howl({urls: [url] });
    }
}

export function play( url ){
  updateSounds(url);
  _sounds[url].play();
}

export function playWithDelay(url, delay){
  updateSounds(url);
	setTimeout(_sounds[url].play, delay);
}
