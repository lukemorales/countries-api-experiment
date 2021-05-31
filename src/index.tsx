import React from 'react';
import ReactDOM from 'react-dom';

import AppProviders from '@contexts';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
);
