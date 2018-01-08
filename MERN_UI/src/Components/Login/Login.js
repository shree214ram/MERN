/**
 * @file MERN Home.
 * @author Deepu
 */
import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
// import { RadioGroup, Radio } from 'react-radio-group';
// import { NavDropdown, Navbar, Nav, MenuItem } from 'react-bootstrap';
// import NotificationSvg from '../Shared/SvgComponents/NotificationSvg';
import { userLogOut, userLogin } from '../../actions/LoginAction';
// import DashBoard from '../Dashboard/Dashboard';
import './Login.scss';

class Home extends React.Component {
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
    console.log('sunny');
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
  // handleRoleChange = (value) => {
  //   this.setState({ currentUser: value });
  // }
  render() {
    return (
      <div className="landing-wrapper">
        <div className="landing-col col-lg-8 col-md-7">
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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { NavBar: state.login };
}

export default connect(mapStateToProps)(Home);
// export default Home;
