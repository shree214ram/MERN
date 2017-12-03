import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from '../Layout/Layout';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';

class Routes extends React.Component {
  render() {
    console.log('process.env.PUBLIC_URL');
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="Dashboard" name="Dashboard" component={Dashboard} />

        </Route>
      </Router>
    );
  }
}

export default Routes;
