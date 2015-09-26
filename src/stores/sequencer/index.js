import { actionSwitch } from 'stores/lib';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  currentActivePad: 0,
  activeBeat: -1,
  activePads: {}
});


function init(state) {

}

function toggleBeat(state, {barId, beatId, padId}){
  let globalBeat = ((barId-1) * 4 + beatId).toString();
  let activeSamples = state.getIn(['activePads', globalBeat]);
  activeSamples = activeSamples === undefined ? [] : activeSamples.toJS();

  let index = activeSamples.indexOf(padId);

  if (index === -1) {
    activeSamples.push(padId);
  } else {
    activeSamples.splice(index, 1);
  }

  state.setIn(['activePads', globalBeat], Immutable.fromJS(activeSamples));
  return state;
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

function clearPatch(state) {
  state.set('activePads', Immutable.fromJS({}));
  return state;
}

export default function reducer(state=initialState, action) {
  return actionSwitch({
    INIT: init,
    CHANGE_ACTIVE_PAD: changeActivePad,
    ADVANCE_BEAT: advanceBeat,
    TOGGLE_PLAY: resetBeat,
    TOGGLE_BEET: toggleBeat,
    CLEAR_PATCH: clearPatch
  }, state, action);
}
