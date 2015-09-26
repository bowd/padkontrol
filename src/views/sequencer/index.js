import React, { Component, PropTypes } from 'react';
import { connect } from 'lib/flux';
import Bar from './bar';
import style from './index.css';
let { number } = PropTypes;

@connect({
  interests: {
    'sequencer.currentActivePad': 'activePad'
  }
})
export default class Sequencer extends Component {
  static propTypes = {
    activePad: number
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
