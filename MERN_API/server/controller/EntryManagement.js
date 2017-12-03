/**
 * Created by Sunny Parmar on 03/11/17.
 */
import sql from 'mssql';
import {executeQuery} from '../Db';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _ from 'lodash';



/* Rest API getoversightformglobals*/
export function getoversightformglobals(req, res, next) {
  getOverSightUnits(req, res, next);
}

export function getOverSightUnits(req, res, next) {
  console.log('In getOverSightUnits');
  var query = "exec mern_Get_OversightUnit";
  //var query = "SELECT [Oversight_Unit_Id] AS id ,REPLACE([Oversight_Unit], '\r\n', '') AS name  FROM [test].[dbo].[T_mern_OVERSIGHT]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
      getOverSightTypes(req, res, next, resu.recordset);
    }
  });
  
  
  
}

export function getOverSightTypes(req, res, next, oversightUnits) {
  console.log('In getOverSightTypes');
  var query = "exec mern_Get_OversightTypes";
  //var query = "SELECT [Ass_Id] AS id ,[Assignement_Type] AS name FROM [test].[dbo].[T_mern_ASSIGNEMENT]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getOverSeenParties(req, res, next,oversightUnits, resu.recordset);
    }
  });
  
}

export function getOverSeenParties(req, res, next,oversightUnits,oversightTypes) {
  console.log('In getOverSeenParties');
  
  var query = "exec mern_Get_OverseenParties";
  
  //var query = "SELECT [Overseen_Party_Id] AS id ,[MSRP Code] AS name ,[Overseen_Party] AS fullName FROM [test].[dbo].[T_mern_OVERSEEN_PARTY]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getSituations(req, res, next,oversightUnits,oversightTypes, resu.recordset);
    }
  });
  
}

export function getSituations(req, res, next,oversightUnits,oversightTypes,overseenParties) {
  console.log('In getSituations');
  
  var query = "exec mern_Get_Situation";
  
  //var query = "SELECT [Situation_ID] AS id,[Situation_Code] AS situationCode ,[Situation_Name] AS name  FROM [test].[dbo].[T_mern_SITUATION]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getOperationsCovered(req, res, next,oversightUnits,oversightTypes,overseenParties,resu.recordset) ;
    }
  });
  
  
}
export function getOperationsCovered(req, res, next,oversightUnits,oversightTypes,overseenParties,situations) {
  console.log('In getOperationsCovered');
  
  //var query = "exec mern_Get_Situation";
  
  var query = "SELECT [Situation_ID] AS id,[Situation_Name] AS name  FROM [test].[dbo].[T_mern_SITUATION]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getCoverage(req, res, next,oversightUnits,oversightTypes,overseenParties,situations, resu.recordset);
    }
  });
  
}
export function getCoverage(req, res, next,oversightUnits,oversightTypes,overseenParties,situations,operationsCovered) {
  console.log('In getCoverage');
  
  var query = "exec mern_Get_Coverage";
  //var query = "Select [Coverege_Id] AS id,[Coverege] AS code,[Coverage_Name] AS name FROM dbo.T_mern_COVEREGE";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getLeadOverSightOfficers(req, res, next,oversightUnits,oversightTypes,overseenParties,situations,operationsCovered, resu.recordset);
    }
  });
  
  
}
export function getLeadOverSightOfficers(req, res, next,oversightUnits,oversightTypes,overseenParties,situations,operationsCovered,coverage) {
  console.log('In getLeadOverSightOfficers');
  
 //var query = "exec mern_Get_Coverage";
  //var query = "Select [Coverege_Id] AS id,[Coverage_Name] AS name FROM dbo.T_mern_COVEREGE";
  var query = "Select [User_Id] AS id,[Name] AS name FROM dbo.T_mern_USER_MASTER";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
	
	  getimplStatus(req, res, next,oversightUnits,oversightTypes,overseenParties,situations,operationsCovered,coverage, resu.recordset);
	  
    }
  });    
}

export function getimplStatus(req, res, next,oversightUnits,oversightTypes,overseenParties,situations,operationsCovered,coverage,leadOversightOff) {
  console.log('In getimplStatus');
  
 //var query = "exec mern_Get_Coverage";
 
  var query = "Select [ID] AS id,[Status] AS name FROM dbo.T_mern_IMPLEMENTATION_STATUS";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
	  const result = {  oversightUnits:oversightUnits,
						oversightTypes:oversightTypes,
						overseenParties:overseenParties,
						situations:situations,
						operationsCovered:operationsCovered,
						coverage:coverage,
						leadOversightOfficers:leadOversightOff,
						implStatus:	resu.recordset			
					};

	 res.send({
		  dbData: result
		});
    }
  });    
}






/* Rest API getrecomendationformglobals*/
export function getrecomendationformglobals(req, res, next) {
  getRecNumbers(req, res, next);
}

export function getRecNumbers(req, res, next) {
  console.log('In getrecNumbers');  
  //var query = "exec mern_Get_OversightUnit";
  var query = "SELECT [Oversight_Unit_Id] AS id , REPLACE([Oversight_Unit],'\r\n', '') AS name  FROM [test].[dbo].[T_mern_OVERSIGHT]";
  
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
      getActionParties(req, res, next, resu.recordset);
    }
  });
  
}

export function getActionParties(req, res, next, recNumbers) {
  console.log('In getActionParties');
  
  //var query = "exec mern_Get_ActionParties";
  var query = "SELECT  [Action_Party_Id] AS id,[Parties] AS name FROM [test].[dbo].[T_mern_Action_Parties]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getRiskCategory1(req, res, next,recNumbers, resu.recordset);
    }
  });
 
}


export function getRiskCategory1(req, res, next,recNumbers,actionParties) {
  console.log('In getRiskCategory1');
  var query = "exec mern_Get_RiskSubcategory";
  
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getRiskCategory2(req, res, next,recNumbers,actionParties, resu.recordset);
    }
  });
  
}

export function getRiskCategory2(req, res, next,recNumbers,actionParties,riskcategory1) {
  console.log('In getRiskCategory2');
  
  //var query = "exec mern_Get_Situation";
  
  var query = "SELECT [Overseen_Party_Id] AS id ,[MSRP Code] AS groupName ,[Overseen_Party] AS categoryCode ,[Overseen_Party] AS name FROM [test].[dbo].[T_mern_OVERSEEN_PARTY]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getTopics(req, res, next,recNumbers,actionParties,riskcategory1, resu.recordset);
    }
  });
  
}



export function getTopics(req, res, next,recNumbers,actionParties,riskcategory1,riskcategory2) {
  console.log('In getTopics');
    
  var query = "exec mern_Get_Topic";
  
 // var query = "SELECT  [Topic_ID] AS id ,[Description] AS name FROM [test].[dbo].[T_mern_TOPIC]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getCriticality(req, res, next,recNumbers,actionParties,riskcategory1,riskcategory2, resu.recordset);
    }
  });
  
}
export function getCriticality(req, res, next,recNumbers,actionParties,riskcategory1,riskcategory2,topics) {
  console.log('In getCriticality');
  
 var query = "exec mern_Get_Criticality";
  //var query = "SELECT  [Criticality_ID] AS id ,[Description] AS name  FROM [test].[dbo].[T_mern_CRITICALITY]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		getImplementationStatus(req, res, next,recNumbers,actionParties,riskcategory1,riskcategory2,topics, resu.recordset);
    }
  });
  
}

export function getImplementationStatus(req, res, next,recNumbers,actionParties,riskcategory1,riskcategory2,topics,criticality) {
  console.log('In getImplementationStatus');
    
  //var query = "exec mern_Get_ImplementationStatus";
  var query = "SELECT [Imp_No] AS id ,[Imp_Status] AS name FROM [test].[dbo].[T_mern_OVERALL_IMP_STATUS]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		const result = {   recNumbers:recNumbers,
						actionParties:actionParties,
						riskcategory1: riskcategory1,
						riskcategory2:[
										{
										  id: 1,
										  group: 'Institutional',
										  categoryCode: '1.0001',
										  name: 'Long-term vision'
										},
										{
										  id: 2,
										  group: 'Institutional',
										  categoryCode: '1.0002',
										  name: 'Strategic positioning'
										},
										{
										  id: 3,
										  group: 'ManagementSupport',
										  categoryCode: '2.0001',
										  name: 'Human resources'
										},
										{
										  id: 4,
										  group: 'ManagementSupport',
										  categoryCode: '2.0002',
										  name: 'Supply and asset management '
										}
									  ],
						topics:topics,
						criticality:criticality,
						implementationStatus:resu.recordset,
						extFactIndicator:[
										  {
											"id": 1,
											"name": "Open"
										  },
										  {
											"id": 2,
											"name": "Closed"
										  },
										  {
											"id": 3,
											"name": "Final report issued"
										  },
										  {
											"id": 4,
											"name": "No action required"
										  }
										]	
					};
		
		res.send({
		  dbData: result
		});
    }
  });
  
}
//*Ends Here


//********Add  Oversight Report Starts ***************
export function addOversightReport(req, res, next) {	
  
  const oversightUnitId = req.body.oversightUnit;
  const coveregeId = req.body.coverage;
  const impStatusId = req.body.implementationStatus;
  //const impStatusId = 1;
  const situationId = req.body.situation;
  const controlId = req.body.controlNumber;
  //const controlId = 1;
  //const operationId = req.body.operationId;
  const operationId = 1;
  const assId = req.body.oversightType;
  const overseenPartyId = req.body.overseenParties;
  const reportId = req.body.reportNumber;
  //const reportId = 1;
  const reportIssueDate = req.body.reportIssueDate;
  const startDateOfAssignment = req.body.assignmentStartDate;
  const endDateOfAssignment = req.body.assignmentEndDate;
  const periodCoveredStart = req.body.periodCoveredStart;
  const periodCoveredEnd = req.body.periodCoveredEnd;
  const responseDeadline = req.body.responseDeadline;
  const actRespDate = req.body.actualRespDate;
  const leadOversightOff = req.body.leadOversightOff;
  //const user = req.body.user;
  const user = 1;
  const title = req.body.title;
  console.log(req.body);  
  
  const CreatedBy = 1;
  const UpdatedBy = 1;
  const reportStage = 1;
  
  var query = " DECLARE @last_insert_id_control int;   INSERT INTO test.dbo.T_mern_CONTROL "+
    "( Control_Name , Created_By , Updated_By )"+
    " VALUES('"+controlId+"', '"+CreatedBy+"', '"+UpdatedBy+"'); SET @last_insert_id_control= SCOPE_IDENTITY() ; "; 
    
  query+= " DECLARE @last_insert_id_report int;   INSERT INTO test.dbo.T_mern_REPORT "+
    "( Report_Number, Report_Stage , Created_By , Updated_By )"+
    " VALUES('"+reportId+"', '"+reportStage+"', '"+CreatedBy+"', '"+UpdatedBy+"'); SET @last_insert_id_report= SCOPE_IDENTITY() ; ";  
    
  query+= " DECLARE @last_insert_id int;   INSERT INTO test.dbo.T_mern_IMP_PLAN "+
    "( Oversight_Unit_Id, Coverege_Id, Imp_Status_Id, Situation_Id, Control_Id, Operation_Id, Ass_Id, Overseen_Party_Id, Report_Id, Report_Issue_Date, Start_Date_Of_Assignment, End_Date_Of_Assignment, Period_Covered_Start, Period_Covered_End, Response_Deadline, Act_Resp_Date, [User], Title)"+
    " VALUES("+
    
    oversightUnitId+", '"+
    coveregeId+"', "+
    impStatusId+", '"+
    situationId+"',@last_insert_id_control, "+
    operationId+", '"+
    assId+"', '"+
    overseenPartyId+"',@last_insert_id_report, '"+
    reportIssueDate+"', '"+
    startDateOfAssignment+"', '"+
    endDateOfAssignment+"', '"+
    periodCoveredStart+"', '"+
    periodCoveredEnd+"', '"+
    responseDeadline+"', '"+
    actRespDate+"', '"+
    user+"', '"+
    title+"', '"+
    leadOversightOff+"'); SET @last_insert_id= SCOPE_IDENTITY() ; ";  
    
    query+= " select SCOPE_IDENTITY() AS last_insert_id ; " ; 
        
	var str_array =situationId;
	for(var i = 0; i < str_array.length; i++) {
	   if(i==0){ 
	   query+= " INSERT [test].[dbo].[T_mern_IMP_PLAN_SITUATIONS]  ([Situation_Id],[Imp_Id]) VALUES("+str_array[i]+",@last_insert_id) ";
       }
       else
       {
	   query+= ",  ("+str_array[i]+",@last_insert_id) ";
	   }
	}
    query+=" ; ";
    
    //assId
    //var assIdstr = assId;
	//var assIdstr_array = assIdstr;

	//for(var i = 0; i < assIdstr_array.length; i++) {
	//   if(i==0){ 
	//   query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_ASSIGNEMENT]  ([Ass_Id],[Imp_Id]) VALUES("+assIdstr_array[i]+",@last_insert_id) ";
    //   }
    //   else
    //   {
	//   query+= ",  ("+assIdstr_array[i]+",@last_insert_id) ";
	//   }
	//}
    //query+=" ; ";
    
    query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_ASSIGNEMENT]  ([Ass_Id],[Imp_Id]) VALUES("+assId+",@last_insert_id) ;";
    
    
    //overseenPartyId
    var overseenPartyIdstr = overseenPartyId;
	var overseenPartyIdstr_array = overseenPartyIdstr;

	for(var i = 0; i < overseenPartyIdstr_array.length; i++) {
	   if(i==0){ 
	   query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_OVERSEEN_PARTY]  ([Overseen_Party_Id],[Imp_Id]) VALUES("+overseenPartyIdstr_array[i]+",@last_insert_id) ";
       }
       else
       {
	   query+= ",  ("+overseenPartyIdstr_array[i]+",@last_insert_id) ";
	   }
	}
    query+=" ; ";
    
   
    //coveregeId
    //var coveregeIdstr = coveregeId;
	//var coveregeIdstr_array = coveregeIdstr;

	//for(var i = 0; i < coveregeIdstr_array.length; i++) {
	//   if(i==0){ 
	//   query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_COVEREGE]  ([Coverege_Id],[Imp_Id]) VALUES("+coveregeIdstr_array[i]+",@last_insert_id) ";
    //   }
    //   else
    //   {
	//   query+= ",  ("+coveregeIdstr_array[i]+",@last_insert_id) ";
	//   }
	//}
    //query+=" ; ";
    query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_COVEREGE]  ([Coverege_Id],[Imp_Id]) VALUES("+coveregeId+",@last_insert_id); ";
  
    
    //leadOversightOff
    var leadOversightOffstr = leadOversightOff;
    var leadOversightOffstr_array = leadOversightOffstr;
  
    for(var i = 0; i < leadOversightOffstr_array.length; i++) {
       if(i==0){ 
       query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_LEAD_OVERSIGHT_OFFICER]  ([Lead_Oversight_Officers_Id],[Imp_Id]) VALUES("+leadOversightOffstr_array[i]+",@last_insert_id) ";
         }
         else
         {
       query+= ",  ("+leadOversightOffstr_array[i]+",@last_insert_id) ";
       }
    }
      query+=" ; ";


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
			  dbData: {"message":"Imp Plan Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id}}
			  
			});
		}
    }
  });
  
}

//********Update  Oversight Report Starts ***************
export function updateOversightReport(req, res, next) {
	console.log(req.body);
  const impId = req.body.impId;
  const oversightUnitId = req.body.oversightUnit;
  const coveregeId = req.body.coverage;
  const impStatusId = req.body.implementationStatus;
  //const impStatusId = 1;
  const situationId = req.body.situation;
  //const controlId = req.body.controlId;
  const controlId = 1;
  //const operationId = req.body.operationId;
  const operationId = 1;
  const assId = req.body.oversightType;
  const overseenPartyId = req.body.overseenParties;
  //const reportId = req.bodyId;
  const reportId = 1;
  const reportIssueDate = req.body.reportIssueDate;
  const startDateOfAssignment = req.body.assignmentStartDate;
  const endDateOfAssignment = req.body.assignmentEndDate;
  const periodCoveredStart = req.body.periodCoveredStart;
  const periodCoveredEnd = req.body.periodCoveredEnd;
  const responseDeadline = req.body.responseDeadline;
  const actRespDate = req.body.actualRespDate;

  const leadOversightOff = req.body.leadOversightOff;
  //const user = req.body.user;
  const user = 1;
  const title = req.body.title;
  console.log(req.body);
  var query = "  UPDATE test.dbo.T_mern_IMP_PLAN SET Oversight_Unit_Id='"+oversightUnitId+"'"+
  ",Coverege_Id='"+coveregeId+"'"+
  ",Imp_Status_Id='"+impStatusId+"'"+
  ",Situation_Id='"+situationId+"'"+
  ",Control_Id='"+controlId+"'"+
  ",Operation_Id='"+operationId+"'"+
  ",Ass_Id='"+assId+"'"+
  ",Overseen_Party_Id='"+overseenPartyId+"'"+
  
  ",Report_Id='"+reportId+"'"+
  ",Report_Issue_Date='"+reportIssueDate+"'"+
  ",Start_Date_Of_Assignment='"+startDateOfAssignment+"'"+
  ",End_Date_Of_Assignment='"+endDateOfAssignment+"'"+
  ",Period_Covered_Start='"+periodCoveredStart+"'"+
  ",Period_Covered_End='"+periodCoveredEnd+"'"+
  ",Response_Deadline='"+responseDeadline+"'"+
  ",Act_Resp_Date='"+actRespDate+"'"+
  
  ",[User]='"+user+"'"+
  ",Title='"+title+"' WHERE Imp_Id= '"+impId+"' ; ";  
    
    query+= "DELETE FROM [test].[dbo].[T_mern_IMP_PLAN_SITUATIONS] WHERE  Imp_Id='"+impId+"' ";
    query+= "DELETE FROM [test].[dbo].[T_mern_IMP_PLAN_ASSIGNEMENT] WHERE  Imp_Id='"+impId+"' ";
    query+= "DELETE FROM [test].[dbo].[T_mern_IMP_PLAN_OVERSEEN_PARTY] WHERE  Imp_Id='"+impId+"' ";
    query+= "DELETE FROM [test].[dbo].[T_mern_IMP_PLAN_LEAD_OVERSIGHT_OFFICER] WHERE  Imp_Id='"+impId+"' ";
        
	var str_array =situationId;
	for(var i = 0; i < str_array.length; i++) {
	   if(i==0){ 
	   query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_SITUATIONS]  ([Situation_Id],[Imp_Id]) VALUES("+str_array[i]+","+impId+") ";
       }
       else
       {
	   query+= ",  ("+str_array[i]+","+impId+") ";
	   }
	}
    query+=" ; ";
    
    //assId
    /*var assIdstr = assId;
	var assIdstr_array = assIdstr;

	for(var i = 0; i < assIdstr_array.length; i++) {
	   if(i==0){ 
	   query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_ASSIGNEMENT]  ([Ass_Id],[Imp_Id]) VALUES("+assIdstr_array[i]+","+impId+") ";
       }
       else
       {
	   query+= ",  ("+assIdstr_array[i]+",@last_insert_id) ";
	   }
	}
    query+=" ; ";*/
    
    query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_ASSIGNEMENT]  ([Ass_Id],[Imp_Id]) VALUES("+assId+","+impId+") ";
    //overseenPartyId
    var overseenPartyIdstr = overseenPartyId;
	var overseenPartyIdstr_array = overseenPartyIdstr;

	for(var i = 0; i < overseenPartyIdstr_array.length; i++) {
	   if(i==0){ 
	   query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_OVERSEEN_PARTY]  ([Overseen_Party_Id],[Imp_Id]) VALUES("+overseenPartyIdstr_array[i]+","+impId+") ";
       }
       else
       {
	   query+= ",  ("+overseenPartyIdstr_array[i]+","+impId+") ";
	   }
	}
    query+=" ; ";
    
   
    //coveregeId
    /*var coveregeIdstr = coveregeId;
	var coveregeIdstr_array = coveregeIdstr;

	for(var i = 0; i < coveregeIdstr_array.length; i++) {
	   if(i==0){ 
	   query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_COVEREGE]  ([Coverege_Id],[Imp_Id]) VALUES("+coveregeIdstr_array[i]+","+impId+") ";
       }
       else
       {
	   query+= ",  ("+coveregeIdstr_array[i]+",@last_insert_id) ";
	   }
	}
    query+=" ; ";*/
    
    query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_COVEREGE]  ([Coverege_Id],[Imp_Id]) VALUES("+coveregeId+","+impId+") ";
    

    //leadOversightOff
    var leadOversightOffstr = leadOversightOff;
    var leadOversightOffstr_array = leadOversightOffstr;
  
    for(var i = 0; i < leadOversightOffstr_array.length; i++) {
       if(i==0){ 
       query+= "INSERT [test].[dbo].[T_mern_IMP_PLAN_LEAD_OVERSIGHT_OFFICER]  ([Lead_Oversight_Officers_Id],[Imp_Id]) VALUES("+leadOversightOffstr_array[i]+","+impId+") ";
         }
         else
         {
       query+= ",  ("+leadOversightOffstr_array[i]+","+impId+") ";
       }
    }
      query+=" ; ";

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
			  dbData: 'Imp Plan Updated Successfully.'
			});
		}
    }
  });
}

//********Get Report Oversight Starts ***************
export function getAllOversightReport(req, res, next) {
  var query = "exec [mern_Get_AllOversightUnitReport]";
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		const ImpPlans =resu.recordset;
		const mainResult = [];
		
		const situations = [];
		const uniqueImpPlan = _.uniqBy(ImpPlans, 'Imp_Id');
			
      _map(uniqueImpPlan, (a) => {
		const ImpPlan ={};
		
		ImpPlan.oversightReportId =a.Imp_Id;
		ImpPlan.title =a.Title;
		ImpPlan.assignmentStartDate =a.assignmentStartDate;
		ImpPlan.assignmentEndDate =a.assignmentEndDate;
		ImpPlan.periodCoveredStart =a.periodCoveredStart;
		ImpPlan.periodCoveredEnd =a.periodCoveredEnd;
		ImpPlan.responseDeadline =a.responseDeadline;
		ImpPlan.actualRespDate =a.actualRespDate;
		ImpPlan.reportStage =a.reportStage;
		ImpPlan.reportIssueDate =a.reportIssueDate;
		ImpPlan.reportNumber =a.Report_Number;
		ImpPlan.controlNumber =a.controlNumber;
		//ImpPlan.implementationStatus =a.implementationState;
		ImpPlan.implementationStatus ={id:a.implementationStateId,name:a.implementationState};
		ImpPlan.oversightUnit={id:a.Oversight_Unit_Id,name:a.Oversight_Unit};
		//ImpPlan.leadOversightOff={id:1,name:'Sample Name1',id:2,name:'Sample Name2'};
		ImpPlan.operationsCovered={id:1,name:'SampleText'};
		ImpPlan.detailOverseenParties='test';
		
		
		const Result = _filter(ImpPlans, (o) => o.Imp_Id === a.Imp_Id);
        const uniqeSituations = _.uniqBy(Result, 'Situation_ID');
        ImpPlan.situation = _map(uniqeSituations, (o) => ({ id: o.Situation_ID, name: o.Situation_Code, fullName: o.Situation_Name  }));
        const uniqeAssignements = _.uniqBy(Result, 'Ass_Id');
        ImpPlan.oversightType = _map(uniqeAssignements, (o) => ({ id: o.Ass_Id, name: o.Assignement_Type }));
        const uniqeOverseenPartys = _.uniqBy(Result, 'Overseen_Party_Id');
        ImpPlan.overseenParties = _map(uniqeOverseenPartys, (o) => ({ id: o.Overseen_Party_Id, name: o.MSRPCode, fullName: o.Overseen_Party  }));
        const uniqeCovereges = _.uniqBy(Result, 'Coverege_Id');
        ImpPlan.coverage = _map(uniqeCovereges, (o) => ({ id: o.Coverege_Id, code: o.Coverege, name: o.Coverage_Name  }));

        //@sp
        const uniqeLeadOversightOff = _.uniqBy(Result, 'LeadOfficerId');
        ImpPlan.leadOversightOff= _map(uniqeLeadOversightOff, (o) => ({ id: o.LeadOfficerId, name: o.LeadOfficerName  }));
		mainResult.push(ImpPlan);
        
      });				
		
		res.send({
		  dbData: mainResult
		});		
    }
  });
}

//**********ENDS************


//********Get Report Oversight BY ID Starts ***************
export function getOversightReportById(req, res, next) {
	
  var query = "exec [mern_Get_OversightUnitReport_ByID] @impID="+req.params.id;
  var request = new sql.Request();
  // query to the database
  request.query(query, function (err, resu) {
    if (err) {
      console.log("Error while querying database :- " + err);
      res.send(err);
    }
    else {
		const ImpPlans =resu.recordset;
		const mainResult = [];
		
		const situations = [];
		const uniqueImpPlan = _.uniqBy(ImpPlans, 'Imp_Id');
			
      _map(uniqueImpPlan, (a) => {
		const ImpPlan ={};
		
		ImpPlan.oversightReportId =a.Imp_Id;
		ImpPlan.title =a.Title;
		ImpPlan.assignmentStartDate =a.assignmentStartDate;
		ImpPlan.assignmentEndDate =a.assignmentEndDate;
		ImpPlan.periodCoveredStart =a.periosCoveredStart;
		ImpPlan.periodCoveredEnd =a.periosCoveredEnd;
		ImpPlan.responseDeadline =a.responseDeadline;
		ImpPlan.actualRespDate =a.actualRespDate;
		ImpPlan.reportStage =a.reportStage;
		ImpPlan.reportIssueDate =a.reportIssueDate;
		ImpPlan.reportNumber =a.Report_Number;
		ImpPlan.controlNumber =a.controlNumber;
		//ImpPlan.implementationStatus =a.implementationState;
		ImpPlan.implementationStatus ={id:a.implementationStateId,name:a.implementationState};
		ImpPlan.oversightUnit={id:a.Oversight_Unit_Id,name:a.Oversight_Unit};
		//ImpPlan.leadOversightOff={id:1,name:'Sample Name1',id:2,name:'Sample Name2'};
		ImpPlan.operationsCovered={id:1,name:'SampleText'};
		ImpPlan.detailOverseenParties='test';
		
		
		const Result = _filter(ImpPlans, (o) => o.Imp_Id === a.Imp_Id);
        const uniqeSituations = _.uniqBy(Result, 'Situation_ID');
        ImpPlan.situation = _map(uniqeSituations, (o) => ({ id: o.Situation_ID, name: o.Situation_Code, fullName: o.Situation_Name  }));
        const uniqeAssignements = _.uniqBy(Result, 'Ass_Id');
        ImpPlan.oversightType = _map(uniqeAssignements, (o) => ({ id: o.Ass_Id, name: o.Assignement_Type }));
        const uniqeOverseenPartys = _.uniqBy(Result, 'Overseen_Party_Id');
        ImpPlan.overseenParties = _map(uniqeOverseenPartys, (o) => ({ id: o.Overseen_Party_Id, name: o.MSRPCode, fullName: o.Overseen_Party  }));
        const uniqeCovereges = _.uniqBy(Result, 'Coverege_Id');
        ImpPlan.coverage = _map(uniqeCovereges, (o) => ({ id: o.Coverege_Id, code: o.Coverege, name: o.Coverage_Name  }));
        //@sp
        const uniqeLeadOversightOff = _.uniqBy(Result, 'LeadOfficerId');
        ImpPlan.leadOversightOff= _map(uniqeLeadOversightOff, (o) => ({ id: o.LeadOfficerId, name: o.LeadOfficerName  }));

        
		mainResult.push(ImpPlan);
        
      });
				
		
		res.send({
		  dbData: mainResult
		});
		
    }
  });
}

//**********ENDS************

export function addReportRecoomendation(req, res, next) {
  const unitName = req.body.Name;
  
  console.log(req.body);
  var query = "INSERT INTO test.dbo.T_mern_OVERSIGHT ( Oversight_Unit ) VALUES("+oversightUnitId+");";  
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
			  dbData: 'Oversight Inserted Successfully.'
			});
		}
    }
  });
}

export function reportRecoomendationById(req, res, next) {
	console.log(req.body);
  //res.json("hello"+req.params.id+dbConfig.user);
  var query = "SELECT DISTINCT Reccom_Id , Reccomendation_Name  FROM [test].[dbo].[T_mern_RECCOMENDATION_DETAILS] WHERE [Reccom_Id] = 1";
  console.log(query);
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


//********Update ReportRecoomendation Starts ***************
export function updateReportRecoomendation(req, res, next) {	
  
  const oversightUnit = req.body.oversightUnit;
  const oversightUnitId = req.body.oversightUnitId;
  
  console.log(req.body);
  var query = "UPDATE test.dbo.T_mern_OVERSIGHT SET Oversight_Unit='"+oversightUnit+"' WHERE Oversight_Unit_Id "+oversightUnitId+";";  
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
			  dbData: 'Oversight Updated Successfully.'
			});
		}
    }
  });
  
}

//********Remove ReportRecoomendation units Starts ***************
export function removeReportRecoomendation(req, res, next) {	
	console.log(req.body);
  const oversightUnitId = req.body.oversightUnitId;
  var query = "DELETE FROM  test.dbo.T_mern_OVERSIGHT  WHERE Oversight_Unit_Id IN ("+oversightUnitId+");";  
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
			  dbData: 'Oversight Deleted Successfully.'
			});
		}
    }
  });
}


