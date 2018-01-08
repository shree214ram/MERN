import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import Layout from '../Layout/Layout';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

class Routes extends React.Component {
  render() {
    console.log('process.env.PUBLIC_URL');
    return (
      <Router history={hashHistory}>
        <Route path="/" >
          <IndexRoute component={Home} />
          <Route path="Registration" name="Registration" component={Registration} />
          <Route path="Login" name="Login" component={Login} />
          <Route path="Dashboard" name="Dashboard" component={Dashboard} />

        </Route>

        {/* <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="Dashboard" name="Dashboard" component={Dashboard} />

        </Route> */}
      </Router>
    );
  }
}

export default Routes;
