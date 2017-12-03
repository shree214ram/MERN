define({ "api": [
  {
    "type": "post",
    "url": "userlogin",
    "title": "User Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Mandatory userName.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          }
        ]
      }
    },
    "name": "userLoginAuth",
    "group": "Login_Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "success",
            "description": "<p>reponse.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t      dbData: \n          {\n            \"User_Id\": 1,\n            \"Name\": \"Admin\",\n            \"Email\": \"test@gmail.com\",\n            \"Title\": Hello World,\n            \n          }\n\t\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Common",
            "description": "<p>Request unsuccessful please contact the admin..</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Request unsuccessful please contact the admin.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/userLogin/userLoginController.js",
    "groupTitle": "Login_Auth"
  }
] });
