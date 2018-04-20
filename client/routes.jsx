import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Root from './Root';

export default (
  <Router>
    <div>
      <Route path="/" component={Root} />
    </div>
  </Router>
);
