import React, { Component, PropTypes } from 'react';
import { connect } from 'lib/flux';
import SequencerActionCreators from 'action_creators/sequencer';
import style from './index.css';
let { bool } = PropTypes;

@connect({
  interests: {
    'global.playing': 'playing'
  }
})
export default class Play extends Component {
  static propTypes = {
    playing: bool
  }

  togglePlay = () => {
    SequencerActionCreators.togglePlay();
  }

  render() {
    return (
      <a href="#" className="PlayButton" onClick={this.togglePlay}>
        ▶
      </a>
    )
  }
}
