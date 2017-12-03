/**
 * Created by Robin on 01/11/17.
 */
import { ReportsType } from '../actions/ActionType';

const DEFAULT_STATE = {
  reportsList: [],
  dataSourceList: [],
  selectedReport: null,
  isExcelReportPopulated: false,
  isPivotReportPopulated: false,
  isDownloaded: false
};

const setReports = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { reportsList: action.data });
  return newState;
};

const saveNewReport = (state, action) => {
  const reportsList = Object.assign([], state.reportsList);
  reportsList.splice(reportsList[0], 1, action.newReport);
  let selectedReport = Object.assign({}, state.selectedReport);
  reportsList.push(action.data);
  selectedReport = action.data;
  const newState = {};
  Object.assign(newState, state, { reportsList, selectedReport });
  return newState;
};

const saveReport = (state, action) => {
  const reportsList = Object.assign([], state.reportsList);
  reportsList.splice(reportsList.findIndex(r => r.id === action.data.id), 1, action.data);
  let selectedReport = Object.assign({}, state.selectedReport);
  selectedReport = action.data;
  const newState = {};
  Object.assign(newState, state, { reportsList, selectedReport });
  return newState;
};

/*const deleteReport = (state, action) => {
  const reportsList = Object.assign([], state.reportsList);
  reportsList.splice(reportsList.findIndex(r => r.id === action.data), 1);
  reportsList.splice(reportsList[0], 1, action.newReport);
  // let selectedReport = Object.assign({}, state.selectedReport);
  // selectedReport = reportsList.find(r => r.id === '-1')[0];
  const selectedReport = Object.assign({}, reportsList[0]);
  // console.log('AFTER DELETE SELECTED REPORT', selectedReport);
  const newState = {};
  Object.assign(newState, state, { reportsList, selectedReport });
  return newState;
};*/

const deleteReport = (state, action) => {
  const reportsList = Object.assign([], state.reportsList);
  reportsList.splice(reportsList.findIndex(r => r.id === action.data), 1);
  //reportsList.splice(reportsList[0], 1, action.newReport);
  // let selectedReport = Object.assign({}, state.selectedReport);
  // selectedReport = reportsList.find(r => r.id === '-1')[0];
  const selectedReport = null;
  /*if (reportsList.length > 0) {
    selectedReport = Object.assign({}, reportsList[0]);
  }*/
  // console.log('AFTER DELETE SELECTED REPORT', selectedReport);
  const newState = {};
  Object.assign(newState, state, { reportsList, selectedReport });
  return newState;
};

const setDataSourceList = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { dataSourceList: action.data });
  return newState;
};

const selectReport = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { selectedReport: action.data });
  return newState;
};

const updateReportData = (state, action) => {
  const selectedReport = Object.assign({}, state.selectedReport);
  selectedReport[`${action.data.field}`] = action.data.value;
  const newState = {};
  Object.assign(newState, state, { selectedReport });
  return newState;
};

const updateReportDefinition = (state, action) => {
  const selectedReport = Object.assign({}, state.selectedReport);
  selectedReport.reportDefinition = action.data;
  const newState = {};
  Object.assign(newState, state, { selectedReport });
  return newState;
};

const updateReportDataSource = (state, action) => {
  const selectedReport = Object.assign({}, state.selectedReport);
  selectedReport.reportDefinition.dataSource = action.data;
  const newState = {};
  Object.assign(newState, state, { selectedReport });
  return newState;
};

/*const setFilterResults = (state, action) => {
  const selectedReport = Object.assign({}, state.selectedReport);
  selectedReport.reportDefinition.rows = action.data;
  const newState = {};
  Object.assign(newState, state, { selectedReport });
  return newState;
};*/

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {

    case ReportsType.GET_REPORTS:
      return setReports(state, action);

    case ReportsType.SAVE_NEW_REPORT:
      return saveNewReport(state, action);

    case ReportsType.GET_DATASOURCE_LIST:
      return setDataSourceList(state, action);

    case ReportsType.SELECT_REPORT:
      return selectReport(state, action);

    case ReportsType.UPDATE_REPORT_DATA:
      return updateReportData(state, action);

    case ReportsType.SAVE_REPORT:
      return saveReport(state, action);

    case ReportsType.DELETE_REPORT:
      return deleteReport(state, action);

    case ReportsType.UPDATE_REPORT_DEFINITION:
      return updateReportDefinition(state, action);

    case ReportsType.UPDATE_REPORT_DATASOURCE:
      return updateReportDataSource(state, action);

    /*case ReportsType.GET_FILTER_RESULTS:
      return setFilterResults(state, action);*/
    case ReportsType.EXPORT_EXCEL_REPORT:
      return { ...state, isExcelReportPopulated: true };
    case ReportsType.DOWNLOAD_REPORT:
      return { ...state, isDownloaded: true };
    case ReportsType.EXPORT_PIVOT_REPORT:
      return { ...state, isPivotReportPopulated: true };
    default:
      return state;
  }
}
