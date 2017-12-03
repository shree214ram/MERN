/**
 * Created by Sunny Parmar on 03/11/17.
 */
import sql from 'mssql';
import {executeQuery} from '../Db';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _ from 'lodash';


//********Get oversight units All Starts ***************

export function getOversightunit(req, res, next) {
  
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
       res.send({
		  dbData: resu.recordset
		});
    }
  });  
}

//********Add oversight units Starts ***************
export function addOversightunit(req, res, next) {	
  console.log('In addOversightunit');
  const unitName = req.body.name;
  
  console.log(req.body);
  //var query =  "INSERT INTO test.dbo.T_mern_OVERSIGHT ( Oversight_Unit ) VALUES('"+unitName+"');  select SCOPE_IDENTITY() AS last_insert_id ;";  
  var query = "exec mern_Set_OversightUnit  @unitName='"+unitName+"'";
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
      	
		if(resu.rowsAffected)
		{			
			res.send({
			  dbData: {"message":"Oversight Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":unitName}}
			});
		}
    }
  });
  
}

//********Update oversight units Starts ***************
export function updateOversightunit(req, res, next) {	
  
  const oversightUnit = req.body.name;
  const oversightUnitId = req.body.id;
  
  
  //var query = "UPDATE test.dbo.T_mern_OVERSIGHT SET Oversight_Unit='"+oversightUnit+"' WHERE Oversight_Unit_Id= "+oversightUnitId+";";  
  var query = "exec mern_Update_OversightUnit  @unitName='"+oversightUnit+"', @id="+oversightUnitId;
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

//********Remove oversight units Starts ***************
export function removeOversightunit(req, res, next) {	
  const oversightUnitId = req.params.id;
  //var query = "DELETE FROM  test.dbo.T_mern_OVERSIGHT  WHERE Oversight_Unit_Id IN ("+oversightUnitId+");";  
  var query = "exec mern_Delete_OversightUnit  @id="+oversightUnitId;
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


//********Get oversight type All Starts ***************

export function getAllOversightType(req, res, next) {
  
  var query = "exec mern_Get_OversightTypes";
 // var query = "SELECT [Ass_Id] AS id ,[Assignement_Type] AS name FROM [test].[dbo].[T_mern_ASSIGNEMENT]";
  // query to the database
  var request = new sql.Request();
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


//********Add oversight type Starts ***************
export function addOversightType(req, res, next) {	
  console.log('In addOversightType');
  const typeName = req.body.name;
  
  console.log(req.body);
  //var query = "INSERT INTO test.dbo.T_mern_ASSIGNEMENT ( Assignement_Type ) VALUES('"+typeName+"');   select SCOPE_IDENTITY() AS last_insert_id ;";  
  var query = "exec mern_Set_OversightTypes  @typeName='"+typeName+"'";
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
			  dbData: {"message":"Oversighttype Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":typeName}}
			});
		}
    }
  });
  
}




//********Update oversight type Starts ***************
export function updateOversightType(req, res, next) {	
 
  const oversightType = req.body.name;
  const oversightTypeId = req.body.id;
  
  
	//var query = "UPDATE test.dbo.T_mern_ASSIGNEMENT SET Assignement_Type='"+oversightType+"' WHERE Ass_Id= "+oversightTypeId+";";  
	var query = "exec mern_Update_OversightTypes  @typeName='"+oversightType+"', @id="+oversightTypeId;
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
			  dbData: 'Oversighttype Updated Successfully.'
			});
		}
    }
  });
  
}

//********Remove oversight type Starts ***************
export function removeOversightType(req, res, next) {	
	
  const oversightTypeId = req.params.id;
  //var query = "DELETE FROM  test.dbo.T_mern_ASSIGNEMENT  WHERE Ass_Id IN ("+oversightTypeId+");";  
  var query = "exec mern_Delete_OversightTypes  @id="+oversightTypeId;
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
			  dbData: 'Oversighttype Deleted Successfully.'
			});
		}
    }
  });
}


//********Get overseenparties All Starts ***************

export function getAllOverseenParties(req, res, next) {
  
   var query = "exec mern_Get_OverseenParties";
  var request = new sql.Request();
 // var query = "SELECT [Overseen_Party_Id] AS id ,[MSRP Code] AS name ,[Overseen_Party] AS fullName FROM [test].[dbo].[T_mern_OVERSEEN_PARTY]";
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

//********Add overseenparties Starts ***************
export function addOverseenParties(req, res, next) {	
  console.log('In addOverseenParties');
  const partiesName = req.body.name;
  const partiesFullName = req.body.fullName;
  
  console.log(req.body);
  //var query = "INSERT INTO test.dbo.T_mern_OVERSEEN_PARTY ([MSRP Code], Overseen_Party ) VALUES('"+partiesName+"','"+partiesFullName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
  var query = "exec mern_Set_OverseenParties  @partiesName='"+partiesName+"',@partiesFullName='"+partiesFullName+"'";
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
			   dbData: {"message":"Overseenparties Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":partiesName,"fullName":partiesFullName,}}
			});
		}
    }
  });
  
}


//********Update overseenparties Starts ***************
export function updateOverseenParties(req, res, next) {	
 
  const overseenPartiesId = req.body.id;  
  const partiesName = req.body.name;
  const partiesFullName = req.body.fullName;
  var query = "exec mern_Update_OverseenParties  @partiesName='"+partiesName+"',@partiesFullName='"+partiesFullName+"',@id="+overseenPartiesId;
  //var query = "UPDATE test.dbo.T_mern_OVERSEEN_PARTY SET Overseen_Party='"+partiesFullName+"' , [MSRP Code]='"+partiesName+"' WHERE Overseen_Party_Id= "+overseenPartiesId+";";  
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
			  dbData: 'Overseenparties Updated Successfully.'
			});
		}
    }
  });
  
}

//********Remove overseenparties Starts ***************
export function removeOverseenParties(req, res, next) {	
	
  const overseenPartiesId = req.params.id;
 // var query = "DELETE FROM  test.dbo.T_mern_OVERSEEN_PARTY  WHERE Overseen_Party_Id IN ("+overseenPartiesId+");"; 
   var query = "exec mern_Delete_OverseenParties  @id="+overseenPartiesId;
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
			  dbData: 'Overseenparties Deleted Successfully.'
			});
		}
    }
  });
}



//********Get situation All Starts ***************

export function getAllSituation(req, res, next) {
  
   var query = "exec mern_Get_Situation";
  var request = new sql.Request();
  //var query = "SELECT [Situation_ID] AS id,[Situation_Code] AS situationCode ,[Situation_Name] AS name  FROM [test].[dbo].[T_mern_SITUATION]";
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

//********Add situation Starts ***************
export function addSituation(req, res, next) {	
  console.log('In addSituation');
  const situationName = req.body.name;
  const situationFullName = req.body.fullName;
  
  console.log(req.body);
  //var query = "INSERT INTO test.dbo.T_mern_SITUATION ( Situation_Code,Situation_Name ) VALUES('"+situationName+"','"+situationFullName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
  var query = "exec mern_Set_Situation  @situationName='"+situationName+"',@situationFullName='"+situationFullName+"'"; 
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
			  dbData: {"message":"Situations Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":situationName,"fullName":situationFullName}}
			});
		}
    }
  });
  
}


//********Update situation Starts ***************
export function updateSituation(req, res, next) {	
  
 
  const situationId = req.body.id;  
  const situationName = req.body.name;
  const situationFullName = req.body.fullName;
  var query = "exec mern_Update_Situation  @situationName='"+situationName+"',@situationFullName='"+situationFullName+"',@id="+situationId;
  //var query = "UPDATE test.dbo.T_mern_SITUATION SET Situation_Code='"+situationName+"' , Situation_Name='"+situationFullName+"' WHERE Situation_ID= "+situationId+";";  
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
			  dbData: 'Situation Updated Successfully.'
			});
		}
    }
  });
  
}

//********Remove situation Starts ***************
export function removeSituation(req, res, next) {	
	
  const situationId = req.params.id;
  //var query = "DELETE FROM  test.dbo.T_mern_SITUATION  WHERE Situation_ID IN ("+situationId+");";  
   var query = "exec mern_Delete_Situation  @id="+situationId;
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
			  dbData: 'situation Deleted Successfully.'
			});
		}
    }
  });
}

//********Get operationscovered All Starts ***************

export function getAllOperationsCovered(req, res, next) {
  
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
       res.send({
		  dbData: resu.recordset
		});
    }
  });  
}

//********Add operationscovered Starts ***************
export function addOperationsCovered(req, res, next) {	
  console.log('In addOperationsCovered');
  const operationscoveredName = req.body.name;
  //const operationscoveredFullName = req.body.fullName;
  
  console.log(req.body);
  var query = "INSERT INTO test.dbo.T_mern_SITUATION ( Situation_Name ) VALUES('"+operationscoveredName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
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
			  dbData: {"message":"OperationsCovered Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":operationscoveredName}}
			});
		}
    }
  });
  
}

//********Update operationscovered Starts ***************
export function updateOperationsCovered(req, res, next) {	
  
 
  const operationscoveredId = req.body.id;  
  const operationscoveredName = req.body.name;
  //const operationscoveredFullName = req.body.fullName;
  
  var query = "UPDATE test.dbo.T_mern_SITUATION SET  Situation_Name='"+operationscoveredName+"' WHERE Situation_ID= "+operationscoveredId+";";  
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
			  dbData: 'operationscovered Updated Successfully.'
			});
		}
    }
  });
  
}


//********Remove operationscovered Starts ***************
export function removeOperationsCovered(req, res, next) {	
	
  const operationscoveredId = req.params.id;
  var query = "DELETE FROM  test.dbo.T_mern_SITUATION  WHERE Situation_ID IN ("+operationscoveredId+");";  
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
			  dbData: 'operationscovered Deleted Successfully.'
			});
		}
    }
  });
}

//********Get coverage All Starts ***************

export function getAllCoverage(req, res, next) {
  
  var query = "exec mern_Get_Coverage";
    //var query = "SelectCoverege_Id [] AS id,[Coverege] AS code,[Coverage_Name] AS name FROM dbo.T_mern_COVEREGE";
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

//********Add coverage Starts ***************
export function addCoverage(req, res, next) {	
  console.log('In addCoverage');
  const coverageName = req.body.name;
  const coverageFullName = req.body.fullName;

  console.log(req.body);
  //var query = "INSERT INTO test.dbo.T_mern_COVEREGE ( Coverege,Coverage_Name ) VALUES('"+coverageName+"','"+coverageFullName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
  var query = "exec mern_Set_Coverage  @coverageName='"+coverageName+"',@coverageFullName='"+coverageFullName+"'"; 
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
			  dbData: {"message":"Coverage Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":coverageName,"fullName":coverageFullName}}
			});
		}
    }
  });
  
}




//********Update coverage Starts ***************
export function updateCoverage(req, res, next) {	
  
  const coverageId = req.body.id;  
  const coverageName = req.body.name;
  const coverageFullName = req.body.fullName;
 // var query = "UPDATE test.dbo.T_mern_COVEREGE SET Coverege='"+coverageName+"' , Coverage_Name='"+coverageFullName+"' WHERE Coverege_Id= "+coverageId+";";  
  var query = "exec mern_Update_Coverage  @coverageName='"+coverageName+"',@coverageFullName='"+coverageFullName+"',@id="+coverageId;
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
			  dbData: 'coverage Updated Successfully.'
			});
		}
    }
  });
  
}

//********Remove coverage Starts ***************
export function removeCoverage(req, res, next) {	
	
  const coverageId = req.params.id;
 //var query = "DELETE FROM  test.dbo.T_mern_COVEREGE  WHERE Coverege_Id IN ("+coverageId+");"; 
var query = "exec mern_Delete_Coverage  @id="+coverageId; 
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
			  dbData: 'coverage Deleted Successfully.'
			});
		}
    }
  });
}

//********Get leadoversightofficers All Starts ***************

export function getAllLeadOverSightOfficers(req, res, next) {
  
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
       res.send({
		  dbData: resu.recordset
		});
    }
  });  
}


//********Add leadoversightofficers Starts ***************
export function addLeadOverSightOfficers(req, res, next) {	
  console.log('In addLeadOverSightOfficers');
  const leadoversightofficersName = req.body.name;
  //const leadoversightofficersFullName = req.body.fullName;
  
  console.log(req.body);
  //var query = "INSERT INTO test.dbo.T_mern_COVEREGE ( Coverage_Name ) VALUES('"+leadoversightofficersName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
  var query = "INSERT INTO test.dbo.T_mern_USER_MASTER ( Name ) VALUES('"+leadoversightofficersName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
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
			  dbData: {"message":"LeadOverSightOfficers Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":leadoversightofficersName}}
			});
		}
    }
  });
  
}

//********Update leadoversightofficers Starts ***************
export function updateLeadOverSightOfficers(req, res, next) {	
  
 
  const leadoversightofficersId = req.body.id;  
  const leadoversightofficersName = req.body.name;
  //const leadoversightofficersFullName = req.body.fullName;
  //var query = "UPDATE test.dbo.T_mern_COVEREGE SET  Coverage_Name='"+leadoversightofficersName+"' WHERE Coverege_Id= "+leadoversightofficersId+";";  
  var query = "UPDATE test.dbo.T_mern_USER_MASTER SET  Name='"+leadoversightofficersName+"' WHERE User_Id= "+leadoversightofficersId+";";  
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
			  dbData: 'leadoversightofficers Updated Successfully.'
			});
		}
    }
  });
  
}


//********Remove leadoversightofficers Starts ***************
export function removeLeadOverSightOfficers(req, res, next) {	
	
  const leadoversightofficersId = req.params.id;
  //var query = "DELETE FROM  test.dbo.T_mern_COVEREGE  WHERE Coverege_Id IN ("+leadoversightofficersId+");";  
  var query = "DELETE FROM  test.dbo.T_mern_USER_MASTER  WHERE User_Id IN ("+leadoversightofficersId+");";  
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
			  dbData: 'leadoversightofficers Deleted Successfully.'
			});
		}
    }
  });
}

//********Get recnumbers All Starts ***************

export function getAllRecNumbers(req, res, next) {
   
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
       res.send({
		  dbData: resu.recordset
		});
    }
  });  
}

//********Add recnumbers Starts ***************
export function addRecNumbers(req, res, next) {	
  console.log('In addRecNumbers');
  const recnumbersName = req.body.name;
  //const recnumbersFullName = req.body.fullName;
  
  console.log(req.body);
  var query = "INSERT INTO test.dbo.T_mern_OVERSIGHT ( Oversight_Unit ) VALUES('"+recnumbersName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
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
			  dbData: {"message":"RecNumbers Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":recnumbersName}}
			});
		}
    }
  });
  
}

//********Update recnumbers Starts ***************
export function updateRecNumbers(req, res, next) {	
  
 
  const recnumbersId = req.body.id;  
  const recnumbersName = req.body.name;
  //const recnumbersFullName = req.body.fullName;
  
  var query = "UPDATE test.dbo.T_mern_OVERSIGHT SET  Oversight_Unit='"+recnumbersName+"' WHERE Oversight_Unit_Id= "+recnumbersId+";";  
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
			  dbData: 'recnumbers Updated Successfully.'
			});
		}
    }
  });
  
}


//********Remove recnumbers Starts ***************
export function removeRecNumbers(req, res, next) {	
	
  const recnumbersId = req.params.id;
  var query = "DELETE FROM  test.dbo.T_mern_OVERSIGHT  WHERE Oversight_Unit_Id IN ("+recnumbersId+");";  
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
			  dbData: 'recnumbers Deleted Successfully.'
			});
		}
    }
  });
}

//********Get actionparties All Starts ***************

export function getAllActionParties(req, res, next) {
   
  var query = "exec mern_Get_ActionParties";
  //var query = "SELECT  [Action_Party_Id] AS id,[Parties] AS name FROM [test].[dbo].[T_mern_Action_Parties]";
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


//********Add actionparties Starts ***************
export function addActionParties(req, res, next) {	
  console.log('In addActionParties');
  const actionpartiesName = req.body.name;
    console.log(req.body);
    //var query = "INSERT INTO test.dbo.T_mern_Action_Parties ( Parties ) VALUES('"+actionpartiesName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
	var query = "exec mern_Set_ActionParties  @actionpartiesName='"+actionpartiesName+"'";
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
			  dbData: {"message":"ActionParties Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":actionpartiesName}}
			});
		}
    }
  });
  
}

//********Update actionparties Starts ***************
export function updateActionParties(req, res, next) {	
  
 
  const actionpartiesId = req.body.id;  
  const actionpartiesName = req.body.name;
  //const actionpartiesFullName = req.body.fullName;
  var query = "exec mern_Update_ActionParties  @actionpartiesName='"+actionpartiesName+"', @id="+actionpartiesId;
  //var query = "UPDATE test.dbo.T_mern_Action_Parties SET  Parties='"+actionpartiesName+"' WHERE Action_Party_Id= "+actionpartiesId+";";  
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
			  dbData: 'actionparties Updated Successfully.'
			});
		}
    }
  });
  
}


//********Remove actionparties Starts ***************
export function removeActionParties(req, res, next) {	
	
  const actionpartiesId = req.params.id;
  var query = "exec mern_Delete_ActionParties  @id="+actionpartiesId;
  //var query = "DELETE FROM  test.dbo.T_mern_Action_Parties  WHERE Action_Party_Id IN ("+actionpartiesId+");";  
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
			  dbData: 'actionparties Deleted Successfully.'
			});
		}
    }
  });
}

//********Get riskcategory1 All Starts ***************

export function getAllRiskCategory1(req, res, next) {
  
  var query = "exec mern_Get_RiskSubcategory";
  
  //var query = "SELECT [Overseen_Party_Id] AS id ,[MSRP Code] AS groupName ,[Overseen_Party] AS categoryCode ,[Overseen_Party] AS name FROM [test].[dbo].[T_mern_OVERSEEN_PARTY]";
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

//********Add riskcategory1 Starts ***************
export function addRiskCategory1(req, res, next) {	
  console.log('In addRiskCategory1');
    const riskcategory1Name = req.body.name;
    const riskcategory1FullName = req.body.fullName;
	const riskcategory1LastName = req.body.lastName;	
  console.log(req.body);
      var query = "INSERT INTO test.dbo.T_mern_OVERSEEN_PARTY ( [MSRP Code],[Overseen_Party],[Overseen_Party] ) VALUES('"+riskcategory1Name+"','"+riskcategory1FullName+"','"+riskcategory1LastName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
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
			  dbData: {"message":"RiskCategory1 Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":riskcategory1Name,"fullName":riskcategory1FullName}}
			});
		}
    }
  });
  
}



//********Update riskcategory1 Starts ***************
export function updateRiskCategory1(req, res, next) {	
  
  const riskcategory1Id = req.body.id;  
  const riskcategory1Name = req.body.name;
  const riskcategory1FullName = req.body.fullName;
  var query = "UPDATE test.dbo.T_mern_OVERSEEN_PARTY SET Coverege='"+riskcategory1Name+"' , RiskCategory1_Name='"+riskcategory1FullName+"' WHERE Coverege_Id= "+riskcategory1Id+";";  
 // var query = "UPDATE test.dbo.T_mern_OVERSEEN_PARTY SET  Situation_Name='"+riskcategory1Name+"' WHERE Situation_ID= "+riskcategory1Id+";";  
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
			  dbData: 'riskcategory1 Updated Successfully.'
			});
		}
    }
  });
  
}
//********Remove riskcategory1 Starts ***************
export function removeRiskCategory1(req, res, next) {	
	
  const riskcategory1Id = req.params.id;
  var query = "DELETE FROM  test.dbo.T_mern_OVERSEEN_PARTY  WHERE Overseen_Party_Id IN ("+riskcategory1Id+");";  
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
			  dbData: 'riskcategory1 Deleted Successfully.'
			});
		}
    }
  });
}


//********Get riskcategory2 All Starts ***************

export function getAllRiskCategory2(req, res, next) {
  
  //var query = "exec mern_Get_OverseenParties";
  
  var query = "SELECT [Overseen_Party_Id] AS id ,[MSRP Code] AS groupName ,[Overseen_Party] AS categoryCode ,[Overseen_Party] AS name FROM [test].[dbo].[T_mern_OVERSEEN_PARTY]";
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

//********Add riskcategory2 Starts ***************
export function addRiskCategory2(req, res, next) {	
  console.log('In addRiskCategory2');
    const riskcategory2Name = req.body.name;
    const riskcategory2FullName = req.body.fullName;
	const riskcategory2LastName = req.body.lastName;	
  console.log(req.body);
      var query = "INSERT INTO test.dbo.T_mern_OVERSEEN_PARTY ( [MSRP Code],[Overseen_Party],[Overseen_Party] ) VALUES('"+riskcategory2Name+"','"+riskcategory2FullName+"','"+riskcategory2LastName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
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
			  dbData: {"message":"RiskCategory2 Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":riskcategory2Name,"fullName":riskcategory2FullName}}
			});
		}
    }
  });
  
}



//********Update riskcategory2 Starts ***************
export function updateRiskCategory2(req, res, next) {	
  
  const riskcategory2Id = req.body.id;  
  const riskcategory2Name = req.body.name;
  const riskcategory2FullName = req.body.fullName;
  var query = "UPDATE test.dbo.T_mern_OVERSEEN_PARTY SET Coverege='"+riskcategory2Name+"' , RiskCategory2_Name='"+riskcategory2FullName+"' WHERE Coverege_Id= "+riskcategory2Id+";";  
 // var query = "UPDATE test.dbo.T_mern_OVERSEEN_PARTY SET  Situation_Name='"+riskcategory2Name+"' WHERE Situation_ID= "+riskcategory2Id+";";  
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
			  dbData: 'riskcategory2 Updated Successfully.'
			});
		}
    }
  });
  
}

//********Remove riskcategory2 Starts ***************
export function removeRiskCategory2(req, res, next) {	
	
  const riskcategory2Id = req.params.id;
  var query = "DELETE FROM  test.dbo.T_mern_OVERSEEN_PARTY  WHERE Coverege_Id IN ("+riskcategory2Id+");";  
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
			  dbData: 'riskcategory2 Deleted Successfully.'
			});
		}
    }
  });
}

//********Get topics All Starts ***************

export function getAllTopics(req, res, next) {
   
  var query = "exec mern_Get_Topic";
  
  //var query = "SELECT  [Topic_ID] AS id ,[Description] AS name FROM [test].[dbo].[T_mern_TOPIC]";
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

//********Add topics Starts ***************
export function addTopics(req, res, next) {	
  console.log('In addTopics');
  const topicsName = req.body.name;
  console.log(req.body);
  //var query = "INSERT INTO test.dbo.T_mern_TOPIC ( Description ) VALUES('"+topicsName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
 // var query = "exec mern_Set_Topic  @topicsName="+topicsName; 
var query = "exec mern_Set_Topic  @topicsName='"+topicsName+"'";  
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
			  dbData: {"message":"Topics Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":topicsName}}
			});
		}
    }
  });
  
}

//********Update topics Starts ***************
export function updateTopics(req, res, next) {	
  
 
  const topicsId = req.body.id;  
  const topicsName = req.body.name;
  //const topicsFullName = req.body.fullName;
  var query = "exec mern_Update_Topic  @topicsName='"+topicsName+"', @id="+topicsId; 
  //var query = "UPDATE test.dbo.T_mern_TOPIC SET  Description='"+topicsName+"' WHERE Topic_ID= "+topicsId+";";  
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
			  dbData: 'topics Updated Successfully.'
			});
		}
    }
  });
  
}


//********Remove topics Starts ***************
export function removeTopics(req, res, next) {	
	
  const topicsId = req.params.id;
  //var query = "DELETE FROM  test.dbo.T_mern_TOPIC  WHERE Topic_ID IN ("+topicsId+");"; 
var query = "exec mern_Delete_Topic  @id="+topicsId;  
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
			  dbData: 'topics Deleted Successfully.'
			});
		}
    }
  });
}

//********Get criticality All Starts ***************

export function getAllCriticality(req, res, next) {
   
  //var query = "exec mern_Get_Criticality";
  var query = "SELECT  [Criticality_ID] AS id ,[Description] AS name  FROM [test].[dbo].[T_mern_CRITICALITY]";
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

//********Add criticality Starts ***************
export function addCriticality(req, res, next) {	
  console.log('In addCriticality');
  const criticalityName = req.body.name;
  
  console.log(req.body);
  var query = "exec mern_set_Criticality  @criticalityName='"+criticalityName+"'";
  //var query = "INSERT INTO test.dbo.T_mern_CRITICALITY ( Description ) VALUES('"+criticalityName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
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
			  dbData: {"message":"Criticality Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":criticalityName}}
			});
		}
    }
  });
  
}

//********Update criticality Starts ***************
export function updateCriticality(req, res, next) {	
  
 
  const criticalityId = req.body.id;  
  const criticalityName = req.body.name;
  //const criticalityFullName = req.body.fullName;
  var query = "exec mern_Update_Criticality  @criticalityName='"+criticalityName+"', @id="+criticalityId;
  //var query = "UPDATE test.dbo.T_mern_CRITICALITY SET  Description='"+criticalityName+"' WHERE Criticality_ID= "+criticalityId+";";  
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
			  dbData: 'criticality Updated Successfully.'
			});
		}
    }
  });
  
}


//********Remove criticality Starts ***************
export function removeCriticality(req, res, next) {	
	
  const criticalityId = req.params.id;
 // var query = "DELETE FROM  test.dbo.T_mern_CRITICALITY  WHERE Criticality_ID IN ("+criticalityId+");"; 
 var query = "exec mern_Delete_Criticality  @id="+criticalityId;  
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
			  dbData: 'criticality Deleted Successfully.'
			});
		}
    }
  });
}
//********Get implementationstatus All Starts ***************

export function getAllImplementationStatus(req, res, next) {
   
  var query = "exec mern_Get_ImplementationStatus";
  //var query = "SELECT [Imp_No] AS id ,[Imp_Status] AS name FROM [test].[dbo].[T_mern_OVERALL_IMP_STATUS]";
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

//********Add implementationstatus Starts ***************
export function addImplementationStatus(req, res, next) {	
  console.log('In addImplementationStatus');
  const implementationstatusName = req.body.name;
  //const implementationstatusFullName = req.body.fullName;
  
  console.log(req.body);
  var query = "exec mern_set_ImplementationStatus  @implementationstatusName='"+implementationstatusName+"'";
  //var query = "INSERT INTO test.dbo.T_mern_OVERALL_IMP_STATUS ( Imp_Status ) VALUES('"+implementationstatusName+"'); select SCOPE_IDENTITY() AS last_insert_id ;";  
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
			  dbData: {"message":"ImplementationStatus Inserted Successfully.","result":{"id":resu.recordset[0].last_insert_id,"name":implementationstatusName}}
			});
		}
    }
  });
  
}

//********Update implementationstatus Starts ***************
export function updateImplementationStatus(req, res, next) {	
  
 
  const implementationstatusId = req.body.id;  
  const implementationstatusName = req.body.name;
  //const implementationstatusFullName = req.body.fullName;
   var query = "exec mern_Update_ImplementationStatus  @implementationstatusName='"+implementationstatusName+"', @id="+implementationstatusId; 
  //var query = "UPDATE test.dbo.T_mern_OVERALL_IMP_STATUS SET  Imp_Status='"+implementationstatusName+"' WHERE Imp_No= "+implementationstatusId+";";  
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
			  dbData: 'implementationstatus Updated Successfully.'
			});
		}
    }
  });
  
}


//********Remove implementationstatus Starts ***************
export function removeImplementationStatus(req, res, next) {	
	
  const implementationstatusId = req.params.id;
  var query = "exec mern_Delete_ImplementationStatus  @id="+implementationstatusId;
  //var query = "DELETE FROM  test.dbo.T_mern_OVERALL_IMP_STATUS  WHERE Imp_No IN ("+implementationstatusId+");";  
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
			  dbData: 'implementationstatus Deleted Successfully.'
			});
		}
    }
  });
}
