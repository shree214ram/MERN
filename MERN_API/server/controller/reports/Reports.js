/**
 * Created by svs on 5/11/17.
 */
import sql from 'mssql';
import { executeQuery, reMapFieldName } from '../../Db';
import * as xlsx from '../../helpers/xlsxPopulate';

export function executeReport(req, res, next) {
  const report = req.body.report;
  console.log('REPORT', report);
  //console.log(criteria, 'CRITERIA');
  const dataSource = report.dataSource;
  const where = report.where;
  let searchStr = "";
  let isFirstCriteria = true;
  if(where && where.length > 0){
    where.forEach(col => {
      const clauseStr = getClause(col);
      if (isFirstCriteria){
        searchStr += " WHERE "+clauseStr;
        isFirstCriteria = false;
      } else {
        searchStr += " AND "+clauseStr;
      }
    });
  }
  var query = "select "+report.columns.join()+" from dbo."+dataSource+searchStr;
  console.log('QUERY', query);
  executeQuery (res, query);
}

export function saveReport(req, res, next) {
  const report = req.body.report;
  console.log('REPORT', report);
  let reportDef1 = report.reportDefinition.substr(0,7000);
  let reportDef2 = "";
  if (report.reportDefinition.length > 7000) {
    reportDef2 = report.reportDefinition.substr(7000,7000);
  }
  var query = "UPDATE test.dbo.T_mern_DASHBOARD_REPORT "+
    "SET Report_Definition='"+reportDef1+"'"+", Report_Definition_ext_1='"+reportDef2+"'"+", Report_Name='"+report.reportName+"'"+", Created_On='"+report.createdOn+"'"+", Last_Modified='"+report.lastModified+"'"+
    " WHERE Report_Id='"+report.id+"';  select Report_Id as id, Report_Name as name, Report_Definition as reportDefinition1, Report_Definition_ext_1 as reportDefinition2, CONCAT(Report_Definition, Report_Definition_ext_1) as reportDefinition, Created_On as createdOn, Last_Modified as lastModified from T_mern_DASHBOARD_REPORT WHERE Report_Id='"+report.id+"';";
  console.log(query);
  executeQuery (res, query);
}

export function exportExcelReport(req, res, next) {
  res.json({
    isReportGenerated: true
  });
}

export function exportPivotReport(req, res, next) {
  var query = "SELECT * FROM test.dbo.V_mern_REPORT_OversightReport";
  var request = new sql.Request();
  console.log("Query:  " + query);
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
      req.body.excelData = resu.recordset;
      xlsx.populateXlsxReport(req, res, next);
    }
  });
}

export function downloadReportById(req, res, next) {
  res.json({
    isDownloaded: true
  });
}

export function saveReportAsNew(req, res, next) {
  const report = req.body.report;
  console.log('REPORT', report);
  let reportDef1 = report.reportDefinition.substr(0,7000);
  let reportDef2 = "";
  if (report.reportDefinition.length > 7000) {
    reportDef2 = report.reportDefinition.substr(7000,7000);
  }
  console.log('reportDef1', reportDef1);
  console.log('reportDef2', reportDef2);
  var query = "INSERT INTO test.dbo.T_mern_DASHBOARD_REPORT "+
    "(Report_Name,Report_Definition, Report_Definition_ext_1, Created_On, Last_Modified)"+
    " VALUES('"+report.reportName+"','"+reportDef1+"','"+reportDef2+"','"+report.createdOn+"','"+report.lastModified+"'); select Report_Id as id, Report_Name as name, Report_Definition as reportDefinition1, Report_Definition_ext_1 as reportDefinition2, CONCAT(Report_Definition, Report_Definition_ext_1) as reportDefinition, Created_On as createdOn, Last_Modified as lastModified from T_mern_DASHBOARD_REPORT WHERE Report_Id=SCOPE_IDENTITY();";
  //console.log(query);
  executeQuery (res, query);
}

export function deleteReport(req, res, next) {
  const reportId = req.query.id;
  console.log('id', reportId);
  console.log('req.params', req.params);
  console.log('req.query', req.query);
  var query = "DELETE FROM test.dbo.T_mern_DASHBOARD_REPORT "+
    " WHERE Report_Id='"+reportId+"'";
  console.log(query);
  executeQuery (res, query);
}

export function getReports(req, res, next) {
  //getDataSource("T_mern_IMP_PLAN","Implementation Plans",res);
  const query = "select Report_Id as id, Report_Name as name, Report_Definition as reportDefinition1, Report_Definition_ext_1 as reportDefinition2, CONCAT(Report_Definition, Report_Definition_ext_1) as reportDefinition, Created_On as createdOn, Last_Modified as lastModified from T_mern_DASHBOARD_REPORT ORDER BY Report_Name";
  executeQuery(res, query);
  /*res.json([
    {
      id:"Report1",
      name:"Report 1"
    }
  ]);*/
}

function getClause(col) {
  let clauseStr = "";
  if(col.op === '<'  || col.op === '>' || col.op === '='  || col.op === '<=' || col.op === '>=') {
    clauseStr =  reMapFieldName(col.name) + " " + col.op + " '" + col.values[0]+"'";
    return clauseStr;
  }

  if(col.op === 'past') {
    clauseStr =  reMapFieldName(col.name) + " >= (GetDate() - " + col.values[0]+") AND "+reMapFieldName(col.name) + " <= GetDate()";
    return clauseStr;
  }

  if(col.op === 'future') {
    clauseStr =  reMapFieldName(col.name) + " <= (GetDate() + " + col.values[0]+") AND "+reMapFieldName(col.name) + " >= GetDate()";
    return clauseStr;
  }

  if(col.op === 'in') {
    clauseStr =  reMapFieldName(col.name) + " "+ col.op + " ('"+ col.values.join("','")+"')";
    return clauseStr;
  }
}