import React, { Component } from 'react';
import style from './index.css';
const colors = {
  1: '#16a085',
  2: '#3498db',
  3: '#e74c3c',
  4: '#f1c40f'
}

export default class Beat extends Component {
  render() {
    let style = {
      background: colors[this.props.barIdx]
    };

    console.log(style);
    console.log(this.props);

    return (
      <span className="Beat">
        <span className="Beat-Indicator" style={style}>
          <span className="Beat-Active"> • </span>
        </span>
      </span>
    )
  }
}
