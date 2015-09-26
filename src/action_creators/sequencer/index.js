import { dispatch } from 'lib/flux';

const SequencerActionCreators = {
  changeActivePad: function(id) {
    dispatch({
      type: 'CHANGE_ACTIVE_PAD',
      payload: {
        padId: id
      }
    })
  },

  togglePlay: function() {
    dispatch({ type: 'TOGGLE_PLAY' });
  },

  advanceBeat: function() {
    dispatch({ type: 'ADVANCE_BEAT' });
  },

  toggleBeat: function(barId, beatId, padId){
  	dispatch({
  		type: 'TOGGLE_BEET',
  		payload:{ barId, beatId, padId }
  	});
  }

}

export default SequencerActionCreators;
