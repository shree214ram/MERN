define({ "api": [
  {
    "type": "get",
    "url": "actionparties",
    "title": "Get All Action Parties information",
    "name": "GetActionParties",
    "group": "Action_Parties",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Action Parties.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"name\": \"Doe\"\n},\n{\n  \"id\": 2,\n  \"name\": \"sample1\"\n}]",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Request unsuccessful please contact the admin.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/actionParties/actionPartiesController.js",
    "groupTitle": "Action_Parties"
  },
  {
    "type": "post",
    "url": "actionparties",
    "title": "post new Action Partie",
    "name": "GetActionParties",
    "group": "Action_Parties",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Action Parties.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"name\": \"Doe\"\n},\n{\n  \"id\": 2,\n  \"name\": \"sample1\"\n}]",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Request unsuccessful please contact the admin.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/actionParties/actionPartiesController.js",
    "groupTitle": "Action_Parties"
  },
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t      dbData: \n          {\n            \"User_Id\": 1,\n            \"Name\": \"Raj\",\n            \"Email\": \"git.test@gmail.com\",\n            \"Title\": null,\n            \"userGroup\": [\n              {\n                  \"id\": 1,\n                  \"name\": \"Group1\"\n              },\n              {\n                  \"id\": 2,\n                  \"name\": \"Group2\"\n              }\n            ],\n            \"userRole\": [\n              {\n                  \"id\": 1,\n                  \"name\": \"Oversights Owners\"\n              },\n              {\n                  \"id\": 2,\n                  \"name\": \"Headquarters Officials\"\n              }\n            ],\n            \"userMenu\": [\n              {\n                  \"id\": 1,\n                  \"name\": \"Menu1\"\n              },\n              {\n                  \"id\": 2,\n                  \"name\": \"Menu2\"\n              }\n            ]\n          }\n\t\t  }",
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
