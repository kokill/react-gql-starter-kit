import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import routes from './routes';
// import './index.css';

// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import '../node_modules/bootstrap/js/src/util.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// const routes = require('./routes');

const client = new ApolloClient({ uri: '/graphql' });
render(
  <ApolloProvider client={client}>{routes}</ApolloProvider>,
  document.getElementById('root')
);
