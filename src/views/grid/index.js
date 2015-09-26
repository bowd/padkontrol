import React, { Component, PropTypes } from 'react';
import Pad from './pad';
import _style from './index.css';
import { connect } from 'lib/flux';
import range from 'lib/range';
let { number } = PropTypes;

@connect({
  interests: {
    'pads.numberOfPads': 'numberOfPads'
  }
})
export default class Grid extends Component {
  static propTypes = {
    numberOfPads: number
  }

  getPads() {
    return range(this.props.numberOfPads).map((_null, i) => (
      <Pad key={i} idx={i} />
    ))
  }

  render() {
    var pads = this.getPads();
    return (
      <div className="grid">
        {pads}
      </div>
    )
  }
}
