import { actionSwitch } from 'stores/lib';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  currentActivePad: 0,
  activeBeat: -1
});

function init(state) {
}

function changeActivePad(state, {padId}) {
  state.set('currentActivePad', padId);
  return state;
}

function advanceBeat(state) {
  let beat = state.get('activeBeat');
  beat = (beat + 1) % 16;
  state.set('activeBeat', beat);
  return state;
}

function resetBeat(state) {
  state.set('activeBeat', -1);
  return state;
}

export default function reducer(state=initialState, action) {
  return actionSwitch({
    INIT: init,
    CHANGE_ACTIVE_PAD: changeActivePad,
    ADVANCE_BEAT: advanceBeat,
    TOGGLE_PLAY: resetBeat,
  }, state, action);
}
