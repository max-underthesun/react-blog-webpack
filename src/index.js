import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from './App';

import '../semantic/dist/semantic.min.css';
import 'styles/styles.css';

const rootEl = document.getElementById('app');

ReactDOM.render(
  React.createElement(
    AppContainer, {}, React.createElement(App)
  ),
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    ReactDOM.render(
      React.createElement(
        AppContainer, {}, React.createElement(NextApp)
      ),
      rootEl
    );
  });
}
