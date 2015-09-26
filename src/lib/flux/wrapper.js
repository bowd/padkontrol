import React from 'react';
import Immutable from 'immutable';
import { stateMap } from './state.js';
import { addListener, removeListener } from './index.js';
import invariant from 'react/lib/invariant';
import equals from 'is-equal-shallow';

export function connect(_options) {
  return function(Component) {
    let options = _options;
    if (_options.interests === undefined) {
      options = {interests: _options};
    }
    return wrapperConstructor(Component, options);
  }
}

let wrapperConstructor = function(Component, {interests, load, loader, propTypes={}}) {
  let _interests = interests;
  interests = typeof _interests === 'function' ? _interests : (props) => { return _interests; }
  load = !!load ? load : () => {};
  let Loader = loader;

  invariant(
    typeof Component.propTypes === 'object',
    'You must specify propTypes for all wrapped components. Check: %s',
    Component.displayName
  );

  let wrapperPropTypes = {...Component.propTypes, ...propTypes};
  // Prune propTypes derived from state
  for (let prop of Object.values(interests({}))) {
    delete wrapperPropTypes[prop];
  }

  return class Wrapper extends React.Component {
    static propTypes = wrapperPropTypes
    static displayName = `${Component.displayName}-Connector`
    static _isWrapper = true
    static _child = (Component._isWrapper ? Component._child : Component)

    constructor(props) {
      super(props);
      this.interests = interests(props);
      this.state = this.stateFromMap(stateMap(this.interests));
      this._definedShouldRender =
        Object.values(interests(props)).indexOf('shouldRender') !== -1;
    }

    stateFromMap(stateMap) {
      let stateMutation = {};
      for (let key in stateMap) {
        stateMutation[this.interests[key]] = stateMap[key];
      }
      return stateMutation;
    }

    componentWillMount() {
      this.registerInterest(this.props);
      if (!this._definedShouldRender || (!!this.state.shouldRender === false)) {
        load(this.props, this.state);
      }
    }

    registerInterest(props) {
      this.listenerId = addListener(this.interests, (stateMap) => {
        this.setState(this.stateFromMap(stateMap));
      });
    }

    componentWillReceiveProps(nextProps) {
      let nextInterests = interests(nextProps);
      if (!equals(this.interests, nextInterests)) {
        this.interests = nextInterests
        removeListener(this.listenerId);
        this.registerInterest(nextProps);
        load(nextProps, this.state)
        this.setState(this.stateFromMap(stateMap(interests(nextProps))));
      }
    }


    componentWillUnmount() {
      removeListener(this.listenerId);
    }

    render() {
      let {shouldRender, ...propsFromState} = this.state;
      let props = {...propsFromState, ...this.props};

      for (let prop in propTypes) {
        if (Object.keys(Component.propTypes).indexOf(prop) === -1) {
          delete props[prop];
        }
      }

      if (this._definedShouldRender && shouldRender !== true) {
        if (Loader !== undefined) {
          return (<Loader />);
        } else {
          return null;
        }
      } else {
        return (<Component {...props} />)
      }
    }
  };
}
