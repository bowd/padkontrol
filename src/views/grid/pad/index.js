import React, { Component } from 'react';
import _style from './index.css';

export default class pad extends Component {
  render() {
    return (
      <span className="padWrapper">
        <button className="pad">
        	{this.props.name}
        </button>
      </span>
    )
  }
}

