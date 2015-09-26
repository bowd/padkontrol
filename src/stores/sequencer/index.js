import { actionSwitch } from 'stores/lib';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
});

function init(state) {
  debugger
}

export default function reducer(state=initialState, action) {
  return actionSwitch({
    INIT: init
  }, state, action);
}
