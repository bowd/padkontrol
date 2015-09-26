import React, { Component } from 'react';
import Beat from '../beat';
import style from './index.css';

export default class Bar extends Component {
  render() {
    let {idx, pad} = this.props;
    return (
      <div className="Bar">
        {
          [1, 2, 3, 4].map((beatIdx) => (
            <Beat barIdx={idx} idx={beatIdx} pad={pad} />
          ))
        }
      </div>
    )
  }
}
