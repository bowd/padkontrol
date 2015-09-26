import React, { Component } from 'react';
import Pad from './pad';
import _style from './index.css';

var temp = {
	
  pad_1: {
    label : 'Pad Name',
    file : 'url'
  },

  pad_2: {
    label : 'Pad Name',
    file : 'url'
  },
  
  pad_3: {
    label : 'Pad Name',
    file : 'url'
  },
  
  pad_4: {
    label : 'Pad Name',
    file : 'url'
  },  

  pad_5: {
    label : 'Pad Name',
    file : 'url'
  },

  pad_6: {
    label : 'Pad Name',
    file : 'url'
  },
  
  pad_7: {
    label : 'Pad Name',
    file : 'url'
  },
  
  pad_8: {
    label : 'Pad Name',
    file : 'url'
  }
};

export default class Grid extends Component {

  getPads(){
    var padKeys = Object.keys(this.props.pads);

    return padKeys.map(function(padId, i){
      return (
          <Pad 
            key={padId} 
            name={this.props.pads[padId]['label']}
            url={this.props.pads[padId]['file']}
          />
        );
    }.bind(this));
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

Grid.defaultProps = {pads: temp};