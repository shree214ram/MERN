import axios from 'axios';
import { RegistrationType } from './ActionType';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
import config from '../config';

const HEADER_CONFIG = {
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
};

export function userRegistration(userCredentials) {
  return (dispatch) => {
    dispatch({
      type: RegistrationType.REGISTRATION_SUCCESS,
      userRegistrationInfo: userCredentials
    });
    // axios
    //   .post(`${config.BASE_URL}/rest/userlogin?t=${Date.now()}`, userCredentials, HEADER_CONFIG)
    //   .then(response => {
    //     console.log('In Sucess');
    //     dispatch({
    //       type: LoginType.LOGIN_SUCCESS,
    //       userInfo: response.data.dbData
    //     });
    //   })
    //   .catch(err => {
    //     dispatch({ type: LoginType.REGISTRATION_FAILED, registrationMessage: err });
    //   });
  };
}
export function postRegistration(Registration) {
  return (dispatch) => {
    axios
      .post(`${config.BASE_URL}/rest/userRegister`, Registration, HEADER_CONFIG)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: RegistrationType.REGISTRATION_POST_SUCCESS,
          data: response.data.dbData
        });
        // dispatch({
        //   type: OversightReportType.OS_REPORT_POST_SUCCESS,
        //   data: OVERSIGHTREPORTS
        // });
      })
      .catch(err => {
        dispatch({ type: RegistrationType.REGISTRATION_ERROR, message: err.response.data.message });
      });
  };
}

export function setTextFiled(data) {
  return { type: RegistrationType.SET_REGISTER_TEXT_FIELD, data };
}

export function setCountry(data) {
  return { type: RegistrationType.SET_COUNTRY, data };
}
/* export function userLogin1(userData) {
  return function (dispatch) {
    const accessToken = { access_token: AppConfig.MASTER_TOKEN };
    const LOGINCONFIG = Configs.LOGINCONFIG;
    LOGINCONFIG.auth = userData;
    axios
      .post(LoginUrl.AUTHENTICATE, JSON.stringify(accessToken), LOGINCONFIG)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        // setAuthorizationToken(token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch({
          type: LoginType.AUTHENTICATE,
          userInfo: response.data
        });
      })
      .catch(err => {
        dispatch({ type: ErrorType.ERROR_LOG, mesage: err.message });
      });
  };
} */
