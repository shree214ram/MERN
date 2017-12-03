import { LoginType } from '../actions/ActionType';

const loadFromLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const DEFAULT_STATE = {
  userInfo: loadFromLocalStorage('userInfo', {}),
  isAuthendicated: loadFromLocalStorage('isAuthendicated', false),
  loginMessage: loadFromLocalStorage('loginMessage', '')
};

console.log(DEFAULT_STATE);


const setLogin = (state, action) => {
  const newState = [];
  Object.assign(newState, state);

  if (action.userInfo.message) {
    newState.userInfo = {};
    newState.isAuthendicated = false;
    newState.loginMessage = action.userInfo.message;
  } else {
    localStorage.setItem('userInfo', JSON.stringify(action.userInfo));
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('loginMessage', '');
    newState.userInfo = action.userInfo;
    newState.isAuthendicated = true;
    newState.loginMessage = '';
  }
  return newState;
};

const setLogOut = (state) => {
  const newState = [];
  Object.assign(newState, state);

  newState.userInfo = {};
  const test = false;
  newState.isAuthendicated = JSON.stringify(test);
  newState.loginMessage = '';
  localStorage.setItem('userInfo', {});
  localStorage.removeItem('isAuthenticated');
  localStorage.setItem('loginMessage', '');
  return newState;
};

const setDefault = (state) => {
  const newState = {};
  Object.assign(newState, state, DEFAULT_STATE);
  return newState;
};

const setLoginFailed = (state, action) => {
  const newState = [];
  Object.assign(newState, state);
  newState.isAuthendicated = action.isAuthendicated;
  newState.loginMessage = action.loginMessage;
  return newState;
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LoginType.LOGIN_SUCCESS:
      return setLogin(state, action);
    case LoginType.LOGIN_FAILED:
      return setLoginFailed(state, action);
    case LoginType.LOGIN_ERROR:
      return setDefault(state);
    case LoginType.LOGOUT_SUCCESS:
      return setLogOut(state);
    default:
      return state;
  }
}
