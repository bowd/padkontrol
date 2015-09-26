import React, { Component, PropTypes } from 'react';
import { connect } from 'lib/flux';
import _style from './index.css';
import PlayActionCreators from 'action_creators/play';
import SequencerActionCreators from 'action_creators/sequencer';
import { play } from 'services/PlayService.js';
const { string, number } = PropTypes;

@connect({
  interests: ({idx}) => ({
    [`pads.samples.${idx}.label`]: 'label',
    [`pads.samples.${idx}.file`]: 'file',
  })
})
export default class Pad extends Component {
  static propTypes = {
    label: string,
    file: string,
    idx: number
  }

  onTrigger = () => {
    PlayActionCreators.playSample(this.props.file);
    SequencerActionCreators.changeActivePad(this.props.idx);
  }


  render() {
    return (
      <span className="padWrapper">
        <button className="pad"
          onClick={this.onTrigger}>
        	{this.props.label}
        </button>
      </span>
    )
  }
}


