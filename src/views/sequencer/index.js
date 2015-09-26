import React, { Component, PropTypes } from 'react';
import { connect } from 'lib/flux';
import SequencerHelper from 'lib/sequencer';
import Bar from './bar';
import style from './index.css';
let { number, bool, object, array } = PropTypes;

@connect({
  interests: {
    'pad.samples': 'samples',
    'sequencer.currentActivePad': 'activePad',
    'sequencer.playingBeat': 'playingBeat',
    'global.playing': 'playing',
    'global.bpm': 'bpm'
  }
})
@connect({
  interests: ({playingBeat}) => {
    return {
      [ `sequencer.activeSamples.${playingBeat}` ]: 'activeSamples'
    }
  },

  propTyps: {
    playingBeat: number
  }
})
export default class Sequencer extends Component {
  static propTypes = {
    activePad: number,
    samples: object,
    activeSamples: array,
    playing: bool,
    bpm: number
  }

  constructor(props) {
    super(props);
    this.sequencer = new SequencerHelper(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.sequencer.update(this.props);
    if (this.props.activeBeat !== nextProps.activeBeat) {
      this.sequencer.playSamples();
    }
    if (this.props.playing === false && nextProps.playing === true) {
      this.sequencer.play();
    }
    if (this.props.playing === true && nextProps.playing === false) {
      this.sequencer.stop();
    }
  }

  render() {

    return (
      <div className="Sequencer">
        {
          [1, 2, 3, 4].map((barIdx) => (
            <Bar idx={barIdx} pad={this.props.activePad}/>
          ))
        }
      </div>
    )
  }
}
