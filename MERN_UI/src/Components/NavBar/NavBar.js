/**
 * @file MERN NavBar.
 * @author Deepu
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link, hashHistory } from 'react-router';
import { RadioGroup, Radio } from 'react-radio-group';
import { NavDropdown, Navbar, Nav, MenuItem } from 'react-bootstrap';
import NotificationSvg from '../Shared/SvgComponents/NotificationSvg';
import { userLogin, userLogOut } from '../../actions/LoginAction';

import './NavBar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        userName: '',
        password: ''
      },
      errorMessage: '',
      isAuthendicated: false,
      isInvalidData: false
    };
    this.updateModel = this.updateModel.bind(this);
    this.ValidateUser = this.ValidateUser.bind(this);
    this.LogoutUser = this.LogoutUser.bind(this);
  }
  updateModel(value, name) {
    const loginModel = this.state.login;
    loginModel[name] = value;
    this.setState({ login: loginModel });
  }
  LogoutUser() {
    if (this.props.NavBar.isAuthendicated === true || this.state.isInvalidData === false) {
      this.props.dispatch(userLogOut());
      setTimeout(() => {
        if (!this.props.NavBar.isAuthendicated) { this.props.dispatch(hashHistory.push('/')); } else {
          this.props.dispatch(hashHistory.push('/'));
          const loginMessage = this.props.NavBar.loginMessage;
          this.setState({ errorMessage: loginMessage, isInvalidData: true });
        }
      }, 500);
    }
  }
  ValidateUser() {
    this.Validation();
    if (this.state.isInvalidData === false) {
      const loginModel = this.state.login;
      this.props.dispatch(userLogin(loginModel));
      setTimeout(() => {
        if (this.props.NavBar.isAuthendicated === true) { this.props.dispatch(hashHistory.push('/Dashboard')); } else {
          const loginMessage = this.props.NavBar.loginMessage;
          this.setState({ errorMessage: loginMessage, isInvalidData: false });
        }
      }, 1000);
    }
  }
  Validation() {
    let isDataNotValid = false;
    let errorValMessage = '';
    if (this.state.login.userName === '') {
      isDataNotValid = true;
      errorValMessage = 'Please enter User Name';
    } else if (this.state.login.password === '') {
      isDataNotValid = true;
      errorValMessage = 'Please enter password';
    }
    this.state.isInvalidData = isDataNotValid;
    this.state.errorMessage = errorValMessage;
    setTimeout(() => {
      this.setState({ errorMessage: errorValMessage, isInvalidData: isDataNotValid });
    }, 500);
    // this.setState({ isInvalidData: isDataNotValid, errorMessage: errorValMessage }); @sp commented 4oct2017
  }
  handleRoleChange = (value) => {
    this.setState({ currentUser: value });
  }
  render() {
    let LoG = false;
    let LG = false;
    let UserName = '';
    let listItems = '';
    if (localStorage.getItem('isAuthenticated')) {
      LG = localStorage.getItem('userInfo');
      LoG = (LG) ? JSON.parse(LG) : false;
    }
    if (LoG) {
      if ('Name' in LoG) {
        // UserName = { `${LoG.Name}`(${LoG.Country.overseenPartyId})`};
        // UserName = `${LoG.Name} (${LoG.Country.name})`;
        UserName = `${LoG.Name} (${(LoG.Country.name === null ? 'All' : LoG.Country.name)})`;
        listItems = LoG.userRole.map((link) =>
          <div className="userList"><Radio className="radioB" value="{link.id}" /> {link.name} </div>
        );
      }
    }
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <div className="sidebar-logo-image">
                <img src="/assets/images/logo.png" alt="" height="70px" />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* <Navbar.Form>
            <input className="navbar-search-submit" type="submit" value="" />
            <input className="navbar-search-text" type="text" />
          </Navbar.Form> */}
          <Nav pullRight>
            {/* {localStorage.getItem('isAuthenticated') && LoG.Email && */}
            {localStorage.getItem('isAuthenticated') &&
              <NavDropdown
                eventKey={1}
                className="navbar-name notify-dropdown"
                title={
                  <div className="navbar-action-icon"><NotificationSvg />
                    <span className="navbar-action-notification">10</span>
                  </div>
                }
              >
                <MenuItem>Approval Pending (3)</MenuItem>
                <MenuItem divider />
                <MenuItem>Review Pending (1)</MenuItem>
                <MenuItem divider />
                <MenuItem>Create Reports (6)</MenuItem>
              </NavDropdown>
            }
            {localStorage.getItem('isAuthenticated') &&
              <NavDropdown eventKey={2} title={UserName} id="basic-nav-dropdown" className="navbar-name">
                <RadioGroup
                  name="userroles"
                  selectedValue={this.state.currentUser}
                  onChange={this.handleRoleChange}
                >
                  {listItems}

                </RadioGroup>
              </NavDropdown>
            }
            {!localStorage.getItem('isAuthenticated') &&
              <NavDropdown
                eventKey={3}
                className="navbar-name notify-dropdown"
                title={
                  <div><i className="fa fa-user-circle userIcon" aria-hidden="true" /> Sign In
                </div>
                }
              >
                <div>
                  <div className="form-field">
                    <label className="form-label">User Name</label>
                    <input
                      type="text"
                      className="form-input"
                      name="userName"
                      value={this.state.login.userName}
                      onSelect={e => e.stopPropagation()}
                      onChange={(e => this.updateModel(e.target.value, 'userName'))}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-input"
                      name="log-in-password"
                      value={this.state.login.password}
                      onChange={(e => this.updateModel(e.target.value, 'password'))}
                      onSelect={e => e.stopPropagation()}
                    />
                  </div>
                  <label className="errorMessage">{(this.props.NavBar.isAuthendicated === false && this.props.NavBar.loginMessage) || (this.state.isInvalidData === true && this.state.errorMessage)}</label>
                  <div className="text-center">
                    <input className="log-in-submit btn btn-primary margin-right" type="button" onClick={this.ValidateUser} value="Log in" />
                  </div>
                </div>
              </NavDropdown>
            }
            {localStorage.getItem('isAuthenticated') &&
              <NavDropdown
                eventKey={4}
                className="navbar-name notify-dropdown"
                title={
                  <div><i className="fa fa-user-circle userIcon" aria-hidden="true" /> Sign Out
                </div>
                }
              >
                <div>
                  <div className="form-field">
                    <input className="log-in-submit btn btn-primary margin-right" type="button" onClick={this.LogoutUser} value="Log Out" />
                  </div>
                </div>
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

// export default NavBar;
function mapStateToProps(state) {
  return { NavBar: state.login };
}

export default connect(mapStateToProps)(NavBar);
