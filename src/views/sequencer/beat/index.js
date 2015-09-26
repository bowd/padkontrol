import React, { Component } from 'react';
import style from './index.css';
import SequencerActionCreators from 'action_creators/sequencer';

const colors = {
  1: '#16a085',
  2: '#3498db',
  3: '#e74c3c',
  4: '#f1c40f'
}

export default class Beat extends Component {
  
  onTrigger = () => {
    SequencerActionCreators.toggleBeat( this.props.idx, this.props.barIdx );
  }

  render() {
    let style = {
      background: colors[this.props.barIdx]
    };


    return (
      <span className="Beat"
        onClick={this.onTrigger}
      >
        <span className="Beat-Indicator" style={style}>
          <span className="Beat-Active"> • </span>
        </span>
      </span>
    )
  }
}
