import React, { Component, PropTypes } from 'react';
import { connect } from 'lib/flux';
import PlayButton from './play';
import SequencerActionCreators from 'action_creators/sequencer';
import style from './index.css';
let { number } = PropTypes;

@connect({
  interests: {
    'global.bpm': 'bpm'
  }
})
export default class Controls extends Component {
  static propTypes = {
    bpm: number
  }

  triggerPlay = () => {
    SequencerActionCreators.togglePlay();
  }

  render() {
    return (
      <div className="Controls">
        <PlayButton onClick={this.triggerPlay}/>
        <input type="text" ref="tempo"
               className="Tempo" value={this.props.bpm} />
        <span className="Tempo-Label">
          bpm
        </span>
      </div>
    )
  }
}
