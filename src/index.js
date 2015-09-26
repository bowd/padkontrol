import _polyfill from 'babel-core/polyfill';
import React from 'react';
import App from './views/app';
import normalize from 'normalize.css';

import stores from './stores';
import { initStateTree } from 'lib/flux';

initStateTree(stores, {});
React.render(<App />, document.getElementById('root'));
