import React, { Component } from 'react';
import Bar from './bar';

export default class Sequencer extends Component {
  render() {
    return (
      <div className="Sequencer">
        {
          [1, 2, 3, 4].map((barIdx) => (
            <Bar idx={barIdx} />
          ))
        }
      </div>
    )
  }
}
