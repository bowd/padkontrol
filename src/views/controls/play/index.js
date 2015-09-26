import React, { Component, PropTypes } from 'react';
import { connect } from 'lib/flux';
import SequencerActionCreators from 'action_creators/sequencer';
import style from './index.css';

let { bool, number } = PropTypes;

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
    var className = 'PlayButton ' + (this.props.playing ? 'active' : '' );  
    return (
      <button className={className} onClick={this.togglePlay}>
        <i className="fa fa-play play"></i>
        <i className="fa fa-stop stop"></i>
      </button>
    )
  }
}
