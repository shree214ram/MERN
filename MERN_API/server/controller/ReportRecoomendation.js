/**
 * Created by Sunny Parmar on 03/11/17.
 */
import sql from 'mssql';
import {executeQuery} from '../Db';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _ from 'lodash';

//********Add  Oversight Report Starts ***************
export function addReportRecoomendation(req, res, next) {	

  const recNumber = req.body.recNumber;
  const reportdescription = req.body.reportdescription;
  const recommendation = req.body.recommendation;
  
  const actionParties = req.body.actionParties;
  const primaryRisk = req.body.primaryRisk;
  const secondaryRisk = req.body.secondaryRisk;
  
  const topic = req.body.topic;
  const criticality = req.body.criticality;
  
  const acceptance = req.body.acceptance;
  const deemedImplemented = req.body.deemedImplemented;
  const actionRequired = req.body.actionRequired;
  const mernResponse = req.body.mernResponse;
  const plannedImpDate = req.body.plannedImpDate;
  const actualImpDate = req.body.actualImpDate;
  const implementationStatus = req.body.implementationStatus;
  const respStaffUnit = req.body.respStaffUnit;
  const respStaffTitle = req.body.respStaffTitle;
  const respStaffName = req.body.respStaffName;
  //const externalFactorIndicator = req.body.externalFactorIndicator;
  const externalFactorIndicator = req.body.extFactIndicator;
  const reportReference = req.body.reportReference;
  
  console.log(req.body);  
  
  const CreatedBy = 1;
  const UpdatedBy = 1;
  
  var query = " DECLARE @last_insert_id int;   INSERT INTO test.dbo.T_mern_RECCOMENDATION "+
    "(  Action_Id, Risk_ID, Criticality_ID, Topic_ID, Status_Flag, External_Factor_Flag, Reccom_Name, Created_By, Updated_By )"+
    " VALUES('"+    
    actionParties+"', '"+
    primaryRisk+"', '"+
    criticality+"', '"+
    topic+"', '"+	
    implementationStatus+"', '"+
    externalFactorIndicator+"', '"+	
    recommendation+"', '"+
    CreatedBy+"', '"+
    UpdatedBy+"'); SET @last_insert_id= SCOPE_IDENTITY() ; ";  
    
    query+= " select SCOPE_IDENTITY() AS last_insert_id ; " ; 
        
	console.log(query);
  //executeQuery (res, query); 
 
  var request = new sql.Request();
  console.log("Query:  " + query);
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
      console.log(resu.rowsAffected);
      
		if(resu.rowsAffected)
		{	
			
			res.send({
			  dbData: {"message":"Recommendation Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id}}
			  
			});
		}
    }
  });
  
}

//********Update  Oversight Report Starts ***************
export function updateReportRecoomendation(req, res, next) {
  const Reccom_Id = req.body.Reccom_Id;
  const recNumber = req.body.recNumber;
  const reportdescription = req.body.reportdescription;
  const recommendation = req.body.recommendation;
  
  const actionParties = req.body.actionParties;
  const primaryRisk = req.body.primaryRisk;
  const secondaryRisk = req.body.secondaryRisk;
  
  const topic = req.body.topic;
  const criticality = req.body.criticality;
  
  const acceptance = req.body.acceptance;
  const deemedImplemented = req.body.deemedImplemented;
  const actionRequired = req.body.actionRequired;
  const mernResponse = req.body.mernResponse;
  const plannedImpDate = req.body.plannedImpDate;
  const actualImpDate = req.body.actualImpDate;
  const implementationStatus = req.body.implementationStatus;
  const respStaffUnit = req.body.respStaffUnit;
  const respStaffTitle = req.body.respStaffTitle;
  const respStaffName = req.body.respStaffName;
  const externalFactorIndicator = req.body.externalFactorIndicator;
  const reportReference = req.body.reportReference;
  
  console.log(req.body);  
  
  const CreatedBy = 1;
  const UpdatedBy = 1;

  var query = "  UPDATE test.dbo.T_mern_RECCOMENDATION SET Action_Id='"+actionParties+"'"+
  ",Risk_ID='"+primaryRisk+"'"+
  ",Criticality_ID='"+criticality+"'"+
  ",Topic_ID='"+topic+"'"+
  ",Status_Flag='"+implementationStatus+"'"+
  ",External_Factor_Flag='"+externalFactorIndicator+"'"+
  ",Reccom_Name='"+recommendation+"'"+
  ",Created_By='"+CreatedBy+"'"+  
  ",Updated_By='"+UpdatedBy+"'"+ 
  " WHERE Reccom_Id= '"+Reccom_Id+"' ; ";  
    
 var request = new sql.Request();
  console.log("Query:=  " + query);
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
      console.log(resu.rowsAffected);
      
		if(resu.rowsAffected)
		{
			
			res.send({
			  dbData: 'Recommendation Updated Successfully.'
			});
		}
    }
  });
}

//********Get Report Oversight Starts ***************
export function getAllReportRecoomendation(req, res, next) {
  var query = "exec [mern_Get_AllReportRecoomendation]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {	
		res.send({
		  dbData: resu.recordset
		});		
    }
  });
}

//**********ENDS************


//********Get Report Oversight BY ID Starts ***************
export function getReportRecoomendationById(req, res, next) {
	
  var query = "exec [mern_Get_ReportRecoomendation_ById] @reccom_Id="+req.params.id;
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
			
		res.send({
		  dbData: resu.recordset
		});
		
    }
  });
}

//**********ENDS************


//********Get Report Oversight BY ID Starts ***************
export function removeReportRecoomendation(req, res, next) {	
  const reccom_Id = req.params.id;
  var query = "DELETE FROM  test.dbo.T_mern_RECCOMENDATION  WHERE Reccom_Id IN ("+reccom_Id+");";  
  //var query = "exec mern_Delete_OversightUnit  @id="+oversightUnitId;
  console.log(query);
  var request = new sql.Request();
  console.log("Query:  " + query);
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
      console.log(resu.rowsAffected);
      
		if(resu.rowsAffected)
		{			
			res.send({
			  dbData: 'Recoomendation Deleted Successfully.'
			});
		}
    }
  });
}


