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
          <img src="/assets/images/travel-homepage-slide-1200x500-.jpg" alt="" width="950px" />
        </div>
      </div>
    );
  }
}

export default Home;
