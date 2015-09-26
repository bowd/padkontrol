import React, { Component, PropTypes } from 'react';
import { connect } from 'lib/flux';
import style from './index.css';
let { number } = PropTypes;

const colors = {
  1: '#16a085',
  2: '#3498db',
  3: '#e74c3c',
  4: '#f1c40f'
}

@connect({
  interests: {
    'sequencer.activeBeat': 'activeBeat'
  }
})
export default class Beat extends Component {
  static propTypes = {
    playingBeat: number
  }

  isPlaying() {
    let { activeBeat, barIdx, idx } = this.props;
    return (barIdx-1) * 4 + idx === activeBeat + 1;
  }

  render() {
    let style = {
      background: colors[this.props.barIdx]
    };

    let classNames = 'Beat' + (this.isPlaying() ? ' is-playing' : '');

    return (
      <span className={classNames}>
        <span className="Beat-Indicator" style={style}>
          <span className="Beat-Active"> • </span>
        </span>
      </span>
    )
  }
}
