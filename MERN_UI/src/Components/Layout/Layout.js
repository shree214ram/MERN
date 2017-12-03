import React from 'react';
import { connect } from 'react-redux';
import SideMenuBar from '../SideMenuBar/SideMenuBar';
import NavBar from '../NavBar/NavBar';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import './Layout.scss';

class Layout extends React.Component {

  render() {
    return (
      <div className="page-panel">
        <SideMenuBar {...this.props} />
        <main className="app">
          <div className="app-wrapper">
            <NavBar />
            <div className="sub-navbar">
              <BreadCrumbs location={this.props.location} />
            </div>
            <div className="app-container">
              <div className="containerWrap">
                {this.props.children}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { locale: state.locale };
}

export default connect(mapStateToProps)(Layout);
