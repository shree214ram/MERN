/**
 * @file MERN BreadCrumbs.
 * @author Deepu
 */
import React from 'react';
import { Link } from 'react-router';
import './BreadCrumbs.scss';

class BreadCrumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }
  render() {
    // const pathArr = this.props.location.pathname.split('/').filter(Boolean);
    const breadCrumbCont = (
      <div
        className={this.props.location.pathname === '/'
          ? 'HomeNavBar'
          : 'sub-navbar'}
      >
        <ul className="breadcrumbs">
          <li>
            <Link to="/" className="breadcrumbs-item">MERN Login Demo</Link>
          </li>
        </ul>
      </div>
    );
    return (
      <div>
        {breadCrumbCont}
      </div>
    );
  }
}

export default BreadCrumbs;
