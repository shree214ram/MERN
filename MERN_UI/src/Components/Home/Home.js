/**
 * @file MERN Home.
 * @author Deepu
 */
import React from 'react';
// import DashBoard from '../Dashboard/Dashboard';
import './Home.scss';

class Home extends React.Component {

  render() {
    return (
      <div className="landing-wrapper">
        <div className="landing-col col-lg-8 col-md-7">
          <a href="http://localhost:8080/#/Login" className="btn btn-info">Login</a><br /><br />
          <a href="http://localhost:8080/#/Registration" className="btn btn-info">Registration</a>
          <img src="/assets/images/travel-homepage-slide-1200x500-.jpg" alt="" width="950px" />
        </div>
      </div>
    );
  }
}

export default Home;
