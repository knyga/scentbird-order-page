import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
// eslint-disable-next-line
import { AppContainer } from 'react-hot-loader';
import App from 'components/App';
import Redbox from 'redbox-react';

render(
  <AppContainer errorReporter={Redbox}>
    <App />
  </AppContainer>,
  document.getElementById('root'),
);


if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('./components/App').default;

    render(
      <AppContainer
        errorReporter={Redbox}
      >
        <NewApp />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}

// TODO remove unused modules and code
