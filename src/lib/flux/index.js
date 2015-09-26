/*
 * Experimental flux implementation based on redux patters
 */

import {
  setState,
  getState,
  reduceAction,
  stateChangedFor,
  stateMap
} from './state.js';

let _listeners = {};
let _lastKey = 0;

export function addListener(interests, handler) {
  _listeners[_lastKey] = {interests, handler};
  _lastKey += 1;
  return _lastKey -1;
}

export function removeListener(index) {
  delete _listeners[index];
}

export function dispatch(action) {
  let prevState = getState();
  let changedCache = {};
  let nextState = reduceAction(action);

  setState(nextState);

  for (let index in _listeners) {
    let {interests, handler} = _listeners[index];

    if (stateChangedFor(interests, prevState, changedCache)) {
      handler.call(null, stateMap(interests));
    }
  }

  window.lastChanged = changedCache;
}

export { initStateTree } from './state.js';
export { connect } from './wrapper.js';
