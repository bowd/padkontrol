import SequencerActionCreators from 'action_creators/sequencer';
import PlayActionCreators from 'action_creators/play';

export default class Sequencer {
  constructor(props) {
    this.setProps(props);
  }

  setProps({samples, activeSamples, bpm, playing}) {
    this.samples = samples;
    this.activeSamples = activeSamples || [];
    this.bpm = bpm;
  }

  update(props) {
    this.setProps(props);
  }

  play() {
    this.playing = true;
    setTimeout(this.tick, this.interval());
  }

  playSamples() {
    for (let sample of this.activeSamples) {
      PlayActionCreators.playSample(this.samples[sample].file);
    }
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

