import _polyfill from 'babel-core/polyfill';
import React from 'react';
import App from './views/app';
import normalize from 'normalize.css';
import FastClick from 'fastclick';

import stores from './stores';
import { initStateTree } from 'lib/flux';

let stateString = localStorage.getItem('state');
let state = stateString !== null ? JSON.parse(stateString) : {};

FastClick.attach(document.body);

initStateTree(stores, state);
React.render(<App />, document.getElementById('root'));

window.addEventListener("beforeunload", function (e) {
  debugState.global.playing = false;
  debugState.sequencer.activeBeat = -1;
  localStorage.setItem('state', JSON.stringify(debugState));
});
