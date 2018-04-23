import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import { ThemeProvider } from 'styled-components';

import Root from './Root/Root';
import Home from './Home/Home';

const theme = {
  main: 'mediumseagreen',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route path="/app" component={Home} />
    </Switch>
  </ThemeProvider>
);

export default hot(module)(App);
