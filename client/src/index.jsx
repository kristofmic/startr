/* eslint-disable */

if (process.env.BROWSER) {
  require('../styles/theme.scss');
}

import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import { createStore } from './store';

const store = createStore();

if (process.env.BROWSER && process.env.NODE_ENV !== 'production') {
  window.__startr = window.__startr || {};
}

ReactDOM.render(<Main store={store} />, document.getElementById('main'));
