import React, { Component } from 'react';
import SequencerActionCreators from 'action_creators/sequencer';
import style from './index.css';

export default class Play extends Component {
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
