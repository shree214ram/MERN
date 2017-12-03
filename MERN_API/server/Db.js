/**
 * Created by svs on 1/11/17.
 */
import sql from 'mssql';

/*var dbConfig = {
  user: "saravana",
  server: "test.dyndns.biz",
  password: "saravana100%",
  database: "test",
  port: '1533'
};*/


// var dbConfig = {
//   user: "test",
//   server: "test",
//   password: "test100",
//   database: "test",
//   port: '1533'
// };


/*CREATE TABLE test.dbo.T_mern_DASHBOARD_REPORT (
 Report_Id int identity NOT NULL,
 Created_On datetime,
 Last_Modified datetime,
 Report_Definition varchar(500)
 ) go*/

export var connectDB = function(db){
  sql.connect(db, function (err) {
    if (err) {
      console.log("Error while connecting database :- " + err);
      sql.close();
    }
  });
}

export var  executeQuery = function(res, query){
  var request = new sql.Request();
  // console.log("Query:  " + query);
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
      // console.log('executeQuery', resu);
      res.send(resu.recordset);
    }
  });
}

export var  executeQueryWithCallback = function(callback, query, data, res){
  var request = new sql.Request();
  console.log("Query:  " + query);
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      callback(err, data, res);
    }
    else {
      // console.log(resu);
      callback(resu.recordset, data, res);
    }
  });
}

export var  executeWithCallback = function(callback, query){
  var request = new sql.Request();
  console.log("Query:  " + query);
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      callback(err,null);
    }
    else {
      callback(null, resu);
    }
  });
}

export function reMapFieldName(field){
  switch (field) {
    case "impId": return "Imp_Id"
    case "oversightUnitId": return "Oversight_Unit_Id"
    case "coveregeId": return "Coverege_Id"
    case "impStatusId": return "Imp_Status_Id"
    case "situationId": return "Situation_Id"
    case "controlId": return "Control_Id"
    case "operationId": return "Operation_Id"
    case "assId": return "Ass_Id"
    case "overseenPartyId": return "Overseen_Party_Id"
    case "reportId": return "Report_Id"
    case "startDateOfAssignment": return "Start_Date_Of_Assignment"
    case "endDateOfAssignment": return "End_Date_Of_Assignment"
    case "periodCoveredStart": return "Period_Covered_Start"
    case "periodCoveredEnd": return "Period_Covered_End"
    case "responseDeadline": return "Response_Deadline"
    case "actRespDate": return "Act_Resp_Date"
    case "user": return "[User]"
    case "title": return "Title"
    default: return field
  }
}
