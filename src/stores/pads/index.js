import { actionSwitch } from 'stores/lib';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  numberOfPads: 8,
  samples: {
    0: {
      label: 'Kick',
      file: require('samples/kick.wav')
    },
    1: {
      label: 'Snare 1',
      file: require('samples/snare1.wav')
    },
    2: {
      label: 'Snare 2',
      file: require('samples/snare2.wav')
    },
    3: {
      label: 'Hat',
      file: require('samples/hat.wav')
    },
    4: {
      label: 'Crash',
      file: require('samples/crash.wav')
    },
    5: {
      label: 'Perc',
      file: require('samples/perc1.wav')
    },
    6: {
      label: 'Bass',
      file: require('samples/bassloop2.wav')
    },
    7: {
      label: 'Lead',
      file: require('samples/lead2.wav')
    }
  },
  highlighted: {}
});

function highlight(state, {padId}) {
  state.setIn(['highlighted', padId.toString()], true);
  return state
}

function unhighlight(state, {padId}) {
  state.setIn(['highlighted', padId.toString()], false);
  return state
}



export default function reducer(state=initialState, action) {
  return actionSwitch({
    HIGHLIGHT_FROM_SEQUENCER: highlight,
    UNHIGHLIGHT_FROM_SEQUENCER: unhighlight
  }, state, action);
}
