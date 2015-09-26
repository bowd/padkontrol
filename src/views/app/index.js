import React, { Component } from 'react';
import Controls from '../controls';
import Grid from '../grid';
import Sequencer from '../sequencer';
import _style from './index.css';

export default class App extends Component {
  render() {
    return (
      <div className="App clearfix">
        <div className="Controls-container">
          <Controls />
        </div>
        <div className="Grid-container">
          <Grid />
        </div>
        <div className="Sequencer-container">
          <Sequencer />
        </div>
      </div>
    );
  }
}
