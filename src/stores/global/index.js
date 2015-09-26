import { actionSwitch } from 'stores/lib';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  playing: false,
  bpm: 128
});

function togglePlay(state) {
  state.set('playing', !state.get('playing'));
  return state;
}

function setBPM(state, {bpm}) {
  state.set('bpm', bpm);
  return state;
}

export default function reducer(state=initialState, action) {
  return actionSwitch({
    'TOGGLE_PLAY': togglePlay,
    'SET_BPM': setBPM
  }, state, action);
}
