/**
 * @file MERN Home.
 * @author Deepu
 */
import React from 'react';
import { connect } from 'react-redux';
// import { hashHistory } from 'react-router';
import ReactSuperSelect from 'react-super-select';
import { omit } from 'lodash';
// import { RadioGroup, Radio } from 'react-radio-group';
// import { NavDropdown, Navbar, Nav, MenuItem } from 'react-bootstrap';
// import NotificationSvg from '../Shared/SvgComponents/NotificationSvg';
import {
  setTextFiled,
  setCountry,
  postRegistration
} from '../../actions/RegistrationAction';
// import DashBoard from '../Dashboard/Dashboard';
import './Registration.scss';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [
        {
          name: 'India',
          id: 1
        },
        {
          name: 'Pakistan',
          id: 2
        },
        {
          name: 'America',
          id: 3
        },
        {
          name: 'Africa',
          id: 4
        }
      ],
      login: {
        id: '',
        firstName: '',
        email: '',
        country: '',
        userName: '',
        password: ''
      },
      errorMessage: '',
      isAuthendicated: false
      // isInvalidData: false
    };
    this.updateModel = this.updateModel.bind(this);
    // this.ValidateUser = this.ValidateUser.bind(this);
    // this.LogoutUser = this.LogoutUser.bind(this);
    // this.updateState = this.updateState.bind(this);
  }
  setTextFiled = (event) => {
    this.props.dispatch(
      setTextFiled({ name: event.target.name, value: event.target.value })
    );
  }
  // updateState(event) {
  //   // console.log(event.name, 'sunny123');
  //   const somedate = this.state.login;
  //   somedate.country = event.name;
  //   this.setState({ somedate });
  // }
  updateState = (data) => {
    this.props.dispatch(
      setCountry(
        data
      )
    );
  }
  updateModel(value, name) {
    console.log(value, 'sunny');
    const loginModel = this.state.login;
    loginModel[name] = value;
    this.setState({ login: loginModel });
  }

  Validation() {
    let isDataNotValid = false;
    let errorValMessage = '';
    if (this.props.Registration.currentRegistration.firstName === '') {
      isDataNotValid = true;
      errorValMessage = 'Please enter firstname';
    } else if (this.props.Registration.currentRegistration.email === '') {
      isDataNotValid = true;
      errorValMessage = 'Please enter email';
    } else if (this.props.Registration.currentRegistration.userName === '') {
      isDataNotValid = true;
      errorValMessage = 'Please enter User Name';
    } else if (this.props.Registration.currentRegistration.password === '') {
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
  save = (e) => {
    e.preventDefault();
    this.Validation();
    if (this.state.isInvalidData === false) {
      let registrationObject = Object.assign({}, this.props.Registration.currentRegistration);
      registrationObject.country = registrationObject.country.id;

      console.log(JSON.stringify(registrationObject, null, 2));

      // if (this.props.buttonName === 'Create') {
      registrationObject = omit(registrationObject, ['RegistrationId']);
      this.props.dispatch(postRegistration(registrationObject));
      JSON.stringify(registrationObject, null, 2);
      // }
      // } else {
      //   registrationObject = omit(registrationObject, ['checked']);
      //   this.props.dispatch(updateRegistration(registrationObject));
      // }
    }
  };
  render() {
    return (
      <form onSubmit={this.save}>
        <div className="landing-wrapper">
          <div className="landing-col col-lg-8 col-md-7">
            <div>
              <div className="form-field">
                <label className="form-label">First Name</label>

                <input
                  type="text"
                  className="form-input"
                  name="firstName"
                  value={this.props.Registration.currentRegistration.firstName}
                  onChange={this.setTextFiled}

                />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-input"
                  name="email"
                  value={this.props.Registration.currentRegistration.email}
                  onChange={this.setTextFiled}
                />
              </div>


              <div className="form-field">
                <label className="form-label">Country</label>
                <ReactSuperSelect
                  className="form-input"
                  dataSource={this.state.country}
                  onChange={this.updateState}
                  deselectOnSelectedOptionClick={false}
                  clearable={false}
                  initialValue={this.props.Registration.currentRegistration.country}
                />
              </div>
              <div className="form-field">
                <label className="form-label">User Name</label>
                <input
                  type="text"
                  className="form-input"
                  name="userName"
                  value={this.props.Registration.currentRegistration.userName}
                  onChange={this.setTextFiled}
                />
              </div>
              <div className="form-field">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  name="password"
                  value={this.props.Registration.currentRegistration.password}
                  onChange={this.setTextFiled}
                />
              </div>
              <label className="errorMessage">{(this.props.Registration.isRegistered === false && this.props.Registration.registrationMessage) || (this.state.isInvalidData === true && this.state.errorMessage)}</label>
              {/* <div className="text-center">
                <input className="log-in-submit btn btn-primary margin-right" type="button" onClick={this.ValidateUser} value="Log in" />
              </div> */}
            </div>
          </div>
        </div>
        <div className="form-actions">
          <a
            onClick={this.save}
            className="form-action form-action-create"
          >
            Create
          </a>
          <a
            onClick={this.reset}
            className="form-action form-action-create"
          >
            Cancel
          </a>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { Registration: state.registration };
}

export default connect(mapStateToProps)(Registration);
// export default Home;
