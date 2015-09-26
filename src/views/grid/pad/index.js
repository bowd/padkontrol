import React, { Component, PropTypes } from 'react';
import { connect } from 'lib/flux';
import _style from './index.css';
import PlayActionCreators from 'action_creators/play';
import SequencerActionCreators from 'action_creators/sequencer';
import { play } from 'services/PlayService.js';
import classnames from 'classnames';
const { string, number } = PropTypes;

@connect({
  interests: ({idx}) => ({
    [`pads.samples.${idx}.label`]: 'label',
    [`pads.samples.${idx}.file`]: 'file',
    [`pads.highlighted.${idx}`]: 'highlighted'
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
    let cx = classnames('padWrapper', {
      'is-highlighted': this.props.highlighted
    });
    console.log(this.props.highlighted);
    return (
      <span className={cx}>
        <button className="pad"
          onClick={this.onTrigger}>
        	{this.props.label}
        </button>
      </span>
    )
  }
}


