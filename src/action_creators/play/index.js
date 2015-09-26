import { dispatch } from 'lib/flux';
import { play } from 'services/PlayService';

const PlayActionCreators = {
  playSample(file) {
    play(file)
  }
}

export default PlayActionCreators;
