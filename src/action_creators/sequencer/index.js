import { dispatch } from 'lib/flux';

const SequencerActionCreators = {
  changeActivePad: function(id) {
    dispatch({
      type: 'CHANGE_ACTIVE_PAD',
      payload: {
        padId: id
      }
    })
  }
}

export default SequencerActionCreators;
