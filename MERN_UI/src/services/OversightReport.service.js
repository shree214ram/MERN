/**
 * Created by svs on 9/10/17.
 */
import { server } from './config';
import { setControlsList, setOverseenPartiesList, setCoverageList, setOversightTypesList } from '../actions/OversightReportActions';

const request = require('superagent');

export const addNewEntry = (data, shouldUpdateState) => {
  const url = `${server}/rest/oversightReport/`;
  request.post(url)
    .send(data)
    .set('access_token', 'masterKey')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        console.log(JSON.stringify(res.body));
        if (shouldUpdateState) {
          console.log(server);
          console.log('updating state');
          //dispatch(setNewEmployee(res.body));
        }
      }
    });
};

export const getControls = (dispatch, shouldUpdateState) => {
  const url = `${server}/rest/controls/`;
  request.get(url)
    .set('access_token', 'masterKey')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        console.log(JSON.stringify(res.body));
        if (shouldUpdateState) {
          console.log(server);
          console.log('updating state');
          dispatch(setControlsList(res.body));
        }
      }
    });
};

export const getOverseenParties = (dispatch, shouldUpdateState) => {
  const url = `${server}/rest/overseeingPartiesList/`;
  request.get(url)
    .set('access_token', 'masterKey')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        console.log(JSON.stringify(res.body));
        if (shouldUpdateState) {
          console.log(server);
          console.log('updating state');
          dispatch(setOverseenPartiesList(res.body));
        }
      }
    });
};

export const getCoverageList = (dispatch, shouldUpdateState) => {
  const url = `${server}/rest/coverage/`;
  request.get(url)
    .set('access_token', 'masterKey')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        console.log(JSON.stringify(res.body));
        if (shouldUpdateState) {
          console.log(server);
          console.log('updating state for coverage list');
          dispatch(setCoverageList(res.body));
        }
      }
    });
};

export const getOversightTypesList = (dispatch, shouldUpdateState) => {
  const url = `${server}/rest/oversightTypes/`;
  request.get(url)
    .set('access_token', 'masterKey')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        console.log(JSON.stringify(res.body));
        if (shouldUpdateState) {
          console.log(server);
          console.log('updating state for oversight types list');
          dispatch(setOversightTypesList(res.body));
        }
      }
    });
};

export const searchOversightReports = (dispatch, callBack) => {
  const url = `${server}/rest/oversightReport/search`;
  request.get(url)
    .set('access_token', 'masterKey')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        console.log(JSON.stringify(res.body));
        callBack(res.body);
      }
    });
};
