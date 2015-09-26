import _polyfill from 'babel-core/polyfill';
import React from 'react';
import App from './views/app';
import normalize from 'normalize.css';

React.render(<App />, document.getElementById('root'));
