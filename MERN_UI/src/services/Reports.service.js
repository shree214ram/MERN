/**
 * Created by svs on 5/11/17.
 */
/**
 * Created by svs on 9/10/17.
 */
import { server } from './config';

const request = require('superagent');

export const getFilterResults = (data, callBack) => {
  const url = `${server}/rest/reports/execute`;
  request.post(url)
    .send(data)
    .set('access_token', 'masterKey')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        //console.log(JSON.stringify(res.body));
        callBack(res.body);
      }
    });
};

export const getDataSource = (data, callBack) => {
  const url = `${server}/rest/reports/dataSource`;
  request.post(url)
    .send(data)
    .set('access_token', 'masterKey')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        //console.log(JSON.stringify(res.body));
        callBack(res.body);
      }
    });
};

export const getDataSourceList = (callBack) => {
  const url = `${server}/rest/reports/dataSourceList`;
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

export const getReports = (callBack) => {
  const url = `${server}/rest/reports/`;
  request.get(url)
    .set('access_token', 'masterKey')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        //console.log(JSON.stringify(res.body));
        callBack(res.body);
      }
    });
};

export const saveReportAsNew = (report, callBack) => {
  const url = `${server}/rest/reports/`;
  request.put(url)
    .send(report)
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

export const saveReport = (report, callBack) => {
  const url = `${server}/rest/reports/`;
  request.post(url)
    .send(report)
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

export const deleteReport = (report, callBack) => {
  const url = `${server}/rest/reports/`;
  request.delete(url)
    .send(report)
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
