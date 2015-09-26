import { actionSwitch } from 'stores/lib';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  playing: false,
  bpm: 128
});

export default function reducer(state=initialState, action) {
  return actionSwitch({
  }, state, action);
}
