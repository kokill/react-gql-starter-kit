import React from 'react';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import App from './components/App/App';

const Root = () => (
  <div>
    <App />
  </div>
);

export default hot(module)(Root);
