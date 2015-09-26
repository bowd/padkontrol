import React, { Component } from 'react';

export default class pad extends Component {
  render() {
    return (
      <button className="pad">
      	{this.props.name}
      </button>
    )
  }
}

