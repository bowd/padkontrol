import React, { Component } from 'react';
import PlayButton from './play';
import style from './index.css';

export default class Controls extends Component {
  render() {
    return (
      <div className="Controls">
        <PlayButton />
        <input type="text" ref="tempo"
               className="Tempo" value="120" />
        <span className="Tempo-Label">
          bpm
        </span>
      </div>
    )
  }
}
