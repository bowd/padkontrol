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

export default function reducer(state=initialState, action) {
  return actionSwitch({
    'TOGGLE_PLAY': togglePlay
  }, state, action);
}
