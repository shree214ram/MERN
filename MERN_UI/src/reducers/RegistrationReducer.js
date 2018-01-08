import { RegistrationType } from '../actions/ActionType';

const DEFAULT_STATE = {
  userRegistrationInfo: {},
  isRegistered: false,
  registrationMessage: '',
  currentRegistration: {
    firstName: '',
    email: '',
    password: '',
    userName: '',
    country: ''

  },
  registerPostSucess: ''
};

console.log(DEFAULT_STATE);


const setRegistration = (state, action) => {
  const newState = [];
  Object.assign(newState, state);

  if (action.userRegistrationInfo.message) {
    newState.userRegistrationInfo = {};
    newState.isRegistered = false;
    newState.registrationMessage = action.userRegistrationInfo.message;
  } else {
    newState.userRegistrationInfo = action.userRegistrationInfo;
    newState.isRegistered = true;
    newState.registrationMessage = '';
  }
  return newState;
};

const setTextField = (state, action) => {
  const Registration = {};
  Object.assign(Registration, state.currentRegistration);
  Registration[action.data.name] = action.data.value;
  const newState = {};
  Object.assign(newState, state, { currentRegistration: Registration });
  return newState;
};

const setDefault = (state) => {
  const newState = {};
  Object.assign(newState, state, DEFAULT_STATE);
  return newState;
};

const setCountry = (state, action) => {
  const Registration = {};
  Object.assign(Registration, state.currentRegistration);
  Registration.country = action.data;
  const newState = {};
  Object.assign(newState, state, { currentRegistration: Registration });
  return newState;
};

const setRegistrationFailed = (state, action) => {
  const newState = [];
  Object.assign(newState, state);
  newState.isRegistered = action.isRegistered;
  newState.registrationMessage = action.registrationMessage;
  return newState;
};

const registerPostSuccess = (state, action) => {
  const currentRegistration = {};
  Object.assign(currentRegistration, state.currentRegistration);
  currentRegistration.registerId = action.data.id;
  const newState = {};
  Object.assign(newState, state, { registerPostSucess: action.data.message, currentRegistration });
  // hashHistory.push(`OverSightReportHome/oversightreport/${action.data.result.id}`);
  return newState;
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case RegistrationType.REGISTRATION_SUCCESS:
      return setRegistration(state, action);

    case RegistrationType.REGISTRATION_FAILED:
      return setRegistrationFailed(state, action);

    case RegistrationType.REGISTRATION_ERROR:
      return setDefault(state);

    case RegistrationType.SET_REGISTER_TEXT_FIELD:
      return setTextField(state, action);

    case RegistrationType.SET_COUNTRY:
      return setCountry(state, action);

    case RegistrationType.REGISTRATION_POST_SUCCESS:
      return registerPostSuccess(state, action);

    default:
      return state;
  }
}
