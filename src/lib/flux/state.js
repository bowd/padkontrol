import Immutable from 'immutable';

let _reducers = {};
let _state = Immutable.Map();

export function initStateTree(reducers, initialState = {}) {
  _reducers = reducers;
  setState(
    reduceAction(
      {type: 'INIT'},
      Immutable.fromJS(initialState)
    )
  )
}

export function setState(state) {
  _state = state;
  window.debugState = _state.toJS();
}

export function getState() {
  return _state;
}

export function reduceAction(action, state=_state, reducers=_reducers) {
  return state.withMutations((newState) => {
    for (let key in reducers) {
      let reducer = reducers[key];
      let nestedState = state.get(key);
      let newNestedState;
      if (typeof reducer === 'function') {
        newNestedState = reducer(nestedState, action);
      } else {
        newNestedState = reduceAction(action, nestedState, reducer);
      }
      newState.set(key, newNestedState);
    }
    return newState;
  })
}


export function stateChangedFor(interests, prevState, _cache = {}) {
  let changed = false;
  for (let interestKey in interests) {
    let keySpread = interestKey.split('.');
    if (_cache[interestKey] === undefined) {
      let prevVal = prevState.getIn(keySpread);
      let nextVal = _state.getIn(keySpread);

      _cache[interestKey] = prevVal !== nextVal;
    }
    changed = changed || _cache[interestKey];
  }

  return changed;
}

export function stateMap(interests, state = _state) {
  let map = {};
  for (let interestKey in interests) {
    let keySpread = interestKey.split('.');
    let value = state.getIn(keySpread);
    value = value && value.toJS ? value.toJS() : value;
    map[interestKey] = value;
  }

  return map;
}


