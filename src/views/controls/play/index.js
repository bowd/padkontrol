import React, { PropTypes, Component } from 'react';
import SequencerActionCreators from 'action_creators/sequencer';
import style from './index.css';

let { number } = PropTypes;

export default class Play extends Component {
  togglePlay = () => {
    SequencerActionCreators.togglePlay();
  }

  render() {
    return (
      <a href="#" className="PlayButton playing" onClick={this.togglePlay}>
        <i className="fa fa-play play"></i>
        <i className="fa fa-stop stop"></i>
      </a>
    )
  }
}
