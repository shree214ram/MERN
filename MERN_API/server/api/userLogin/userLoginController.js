// import sql from 'mssql';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _ from 'lodash';

/**
 * @api {post} userlogin User Login
 * @apiParam {String} userName Mandatory userName.
 * @apiParam {String} password Mandatory password.
 * @apiName userLoginAuth
 * @apiGroup Login Auth
 *
 *
 * @apiSuccess {json} success reponse.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *	      dbData: 
          {
            "User_Id": 1,
            "Name": "Admin",
            "Email": "test@gmail.com",
            "Title": Hello World,
            
          }
 *		  }
 *
 * @apiError Common Request unsuccessful please contact the admin..
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Request unsuccessful please contact the admin."
 *     }
 */
exports.post = function (req, res, next) {

  var errorMsg = "";
  if (!("userName" in req.body) && !("password" in req.body)) {

    errorMsg = "Username & Password Required.";
  }

  else if (!("userName" in req.body)) {

    errorMsg = "Username Required.";
  }

  else if (!("password" in req.body)) {

    errorMsg = "Password Required.";
  }

  else {
    const userName = req.body.userName;
    const password = req.body.password;
    if (userName == '' && password == '') {
      errorMsg = "Please Enter Username & Password.";
    }
    else if (userName == '') {
      errorMsg = "Please Enter Username .";
    }
    else if (password == '') {
      errorMsg = "Please Enter Password.";
    }
  }

  if (errorMsg == '') {
    const userName = req.body.userName;
    const password = req.body.password;
    const userData = {
      "User_Id": 1,
      "Name": "Admin",
      "Email": "test@gmail.com",
      "Password": "abc123",
      "Title": "Hello World",
      "Country": {
          "id": 1,
          "name": "India",
          "operationId": 1
      },
      "userGroup": [
          {
              "id": 1,
              "name": "Group1"
          }
      ],
      "userRole": [
          {
              "id": 1,
              "name": "Super Admin"
          },
          {
              "id": 2,
              "name": "Admin"
          },
          {
              "id": 3,
              "name": "Accountant"
          },
          {
              "id": 4,
              "name": "User"
          }
      ],
      "userMenu": [
          {
              "id": 1,
              "name": "Dashboard",
              "slug": "Dashboard",
              "svg": "DashboardSvg",
              "subMenu": []
          }
      ]
  }
    if (userName == userData.Email && password == userData.Password) {
      const UserSet = userData;
      res.send({
        dbData: UserSet
      });
    } else {
      res.send({
        dbData: {
          "message": "Invalid UserName And Password."
        }
      });
    }
  }
}

