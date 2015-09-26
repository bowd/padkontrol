import { actionSwitch } from 'stores/lib';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  currentActivePad: 0
});

function init(state) {
}

function changeActivePad(state, {padId}) {
  state.set('currentActivePad', padId);
  return state;
}


export default function reducer(state=initialState, action) {
  return actionSwitch({
    INIT: init,
    CHANGE_ACTIVE_PAD: changeActivePad
  }, state, action);
}
