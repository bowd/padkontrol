import { actionSwitch } from 'stores/lib';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  currentActivePad: 0,
	activePads: [[false, false, false, false],[false, false, false, false],[false, false, false, false],[false, false, false, false]]
});


function init(state) {
	
}

function toggleBeat(state, {barId, beatId}){
	var beatStatus = initialState.getIn(['activePads', barId, beatId]);
  var nextBeatStatus;


  if( beatStatus === undefined ){
    nextBeatStatus = true;
  } else {
    nextBeatStatus = !beatStatus;
  }

  initialState.setIn(['activePads', barId, beatId], nextBeatStatus);
}

function changeActivePad(state, {padId}) {
  state.set('currentActivePad', padId);
  return state;
}


export default function reducer(state=initialState, action) {
  return actionSwitch({
    INIT: init,
    CHANGE_ACTIVE_PAD: changeActivePad,
    TOGGLE_BEET: toggleBeat
  }, state, action);
}
