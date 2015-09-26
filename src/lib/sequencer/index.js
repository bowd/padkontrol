import SequencerActionCreators from 'action_creators/sequencer';

export default class Sequencer {
  constructor(props) {
    this.setProps(props);
  }

  setProps({samples, activeSamples, bpm, playing}) {
    this.samples = samples;
    this.activeSamples = activeSamples;
    this.bpm = bpm;
  }

  update(props) {
    this.setProps(props);
  }

  play() {
    this.playing = true;
    setTimeout(this.tick, this.interval());
  }

  stop() {
    this.playing = false;
  }

  tick = () => {
    if (this.playing === true) {
      SequencerActionCreators.advanceBeat();
      setTimeout(this.tick, this.interval());
    }
  }

  interval() {
    return (60 * 64 / this.bpm) * 4;
  }
}

