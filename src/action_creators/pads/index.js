import { dispatch } from 'lib/flux';

const PadActionCreators = {
  playFromSequencer(sampleIdx) {
    dispatch({
      type: 'HIGHLIGHT_FROM_SEQUENCER',
      payload: {
        padId: sampleIdx
      }
    });
    setTimeout(function() {
      dispatch({
        type: 'UNHIGHLIGHT_FROM_SEQUENCER',
        payload: {
          padId: sampleIdx
        }
      });
    }, 300);
  }
}

export default PadActionCreators;
