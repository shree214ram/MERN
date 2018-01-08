import { combineReducers } from 'redux';
import { localeReducer as locale } from 'react-localize-redux';
import dashboard from './DashboardReducer';
import reports from './ReportsReducer';
import login from './LoginReducer';
import registration from './RegistrationReducer';

export default combineReducers({
  locale,
  dashboard,
  reports,
  login,
  registration
});
