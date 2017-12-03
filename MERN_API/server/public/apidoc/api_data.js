define({ "api": [
  {
    "type": "delete",
    "url": "actionparties",
    "title": "Delete Action Partie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeleteActionParties",
    "group": "Action_Parties",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'actionparties Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/actionParties/actionPartiesController.js",
    "groupTitle": "Action_Parties"
  },
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
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "PostActionParties",
    "group": "Action_Parties",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"ActionParties Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":actionpartiesName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/actionParties/actionPartiesController.js",
    "groupTitle": "Action_Parties"
  },
  {
    "type": "put",
    "url": "actionparties",
    "title": "Update Action Partie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "UpdateActionParties",
    "group": "Action_Parties",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'actionparties Updated Successfully.'\n\t\t }",
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
  },
  {
    "type": "delete",
    "url": "overseenparties",
    "title": "Delete overseenparties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "Deleteoverseenparties",
    "group": "Overseen_Parties",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'overseenparties Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/overseenParties/overseenPartiesController.js",
    "groupTitle": "Overseen_Parties"
  },
  {
    "type": "get",
    "url": "overseenparties",
    "title": "Get all overseen parties info",
    "name": "Getoverseenparties",
    "group": "Overseen_Parties",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of criticality.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"name\": \"sample12\"\n},\n{\n  \"id\": 2,\n  \"name\": \"sample1\"\n}]",
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
    "filename": "server/api/overseenParties/overseenPartiesController.js",
    "groupTitle": "Overseen_Parties"
  },
  {
    "type": "post",
    "url": "overseenparties",
    "title": "post new overseen parties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mandatory code.</p>"
          }
        ]
      }
    },
    "name": "Postoverseenparties",
    "group": "Overseen_Parties",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"overseenparties Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":criticalityeName\n         \"code\":partiesCode\n       }\n     }\n\t\t }",
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
    "filename": "server/api/overseenParties/overseenPartiesController.js",
    "groupTitle": "Overseen_Parties"
  },
  {
    "type": "put",
    "url": "overseenparties",
    "title": "Update overseenparties",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mandatory code.</p>"
          }
        ]
      }
    },
    "name": "Updateoverseenparties",
    "group": "Overseen_Parties",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Overseenparties Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/overseenParties/overseenPartiesController.js",
    "groupTitle": "Overseen_Parties"
  },
  {
    "type": "delete",
    "url": "coverage",
    "title": "Delete coverage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "Deletecoverage",
    "group": "coverage",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Coverage Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/coverage/coverageController.js",
    "groupTitle": "coverage"
  },
  {
    "type": "get",
    "url": "coverage",
    "title": "Get all coverage",
    "name": "Getcoverage",
    "group": "coverage",
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
    "filename": "server/api/coverage/coverageController.js",
    "groupTitle": "coverage"
  },
  {
    "type": "put",
    "url": "coverage",
    "title": "Update coverage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mandatory code.</p>"
          }
        ]
      }
    },
    "name": "Updatecoverage",
    "group": "coverage",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Coverage Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/coverage/coverageController.js",
    "groupTitle": "coverage"
  },
  {
    "type": "post",
    "url": "coverage",
    "title": "post new coverage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mandatory code.</p>"
          }
        ]
      }
    },
    "name": "coverage",
    "group": "coverage",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"Coverage Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":coverageName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/coverage/coverageController.js",
    "groupTitle": "coverage"
  },
  {
    "type": "delete",
    "url": "criticality",
    "title": "Delete criticality",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "Deletecriticality",
    "group": "criticality",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'criticality Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/criticality/criticalityController.js",
    "groupTitle": "criticality"
  },
  {
    "type": "post",
    "url": "criticality",
    "title": "post new coverage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "Postcriticality",
    "group": "criticality",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"criticality Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":criticalityeName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/criticality/criticalityController.js",
    "groupTitle": "criticality"
  },
  {
    "type": "put",
    "url": "criticality",
    "title": "Update criticality",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "Updatecriticality",
    "group": "criticality",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'criticality Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/criticality/criticalityController.js",
    "groupTitle": "criticality"
  },
  {
    "type": "get",
    "url": "criticality",
    "title": "Get all criticality",
    "name": "criticality",
    "group": "criticality",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of criticality.</p>"
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
    "filename": "server/api/criticality/criticalityController.js",
    "groupTitle": "criticality"
  },
  {
    "type": "get",
    "url": "getoversightglobals",
    "title": "Get All Getoversightglobals",
    "name": "Getgetoversightglobals",
    "group": "getoversightglobals",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Getoversightglobals List.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  [{  oversightUnits:[],\n  oversightTypes:[],\n  overseenParties:[],\n  situations: [],\n  operationsCovered: [],\n  coverage: [],\n  leadOversightOfficers: [],\n  implStatus: []\n}]",
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
    "filename": "server/api/oversightglobals/osGlobalsController.js",
    "groupTitle": "getoversightglobals"
  },
  {
    "type": "get",
    "url": "getrecommglobals",
    "title": "Getrecommglobals",
    "name": "Getgetrecommglobals",
    "group": "getrecommglobals",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Getrecommglobals List.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  [{  recNumbers:[],\n  actionParties:[],\n  riskcategory1:[],\n  riskcategory2: [],\n  topics: [],\n  criticality: [],\n  implementationStatus: []\n}]",
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
    "filename": "server/api/recomGlobals/recomGlobalsController.js",
    "groupTitle": "getrecommglobals"
  },
  {
    "type": "delete",
    "url": "implementationstatus",
    "title": "Delete Implementation Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeleteImplementationStatus",
    "group": "implementation_status",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Implementation Status Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/implementationStatus/impStatusController.js",
    "groupTitle": "implementation_status"
  },
  {
    "type": "post",
    "url": "implementationstatus",
    "title": "Post Implementation Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "PostImplementationStatus",
    "group": "implementation_status",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"Implementation Status Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":implementationstatusName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/implementationStatus/impStatusController.js",
    "groupTitle": "implementation_status"
  },
  {
    "type": "put",
    "url": "implementationstatus",
    "title": "Update Implementation Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "UpdateImplementationStatus",
    "group": "implementation_status",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Implementation Status Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/implementationStatus/impStatusController.js",
    "groupTitle": "implementation_status"
  },
  {
    "type": "get",
    "url": "implementationstatus",
    "title": "Get All Implementation Status",
    "name": "implementationstatus",
    "group": "implementation_status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Implementation List.</p>"
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
    "filename": "server/api/implementationStatus/impStatusController.js",
    "groupTitle": "implementation_status"
  },
  {
    "type": "delete",
    "url": "leadoversightofficers",
    "title": "Delete Leadoversightofficers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeleteLeadoversightofficers",
    "group": "leadoversightofficers",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Leadoversightofficers Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/leadOversightOfficers/leadOffController.js",
    "groupTitle": "leadoversightofficers"
  },
  {
    "type": "get",
    "url": "leadoversightofficers",
    "title": "Get All Leadoversightofficers",
    "name": "Getleadoversightofficers",
    "group": "leadoversightofficers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Leadoversightofficers List.</p>"
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
    "filename": "server/api/leadOversightOfficers/leadOffController.js",
    "groupTitle": "leadoversightofficers"
  },
  {
    "type": "post",
    "url": "leadoversightofficers",
    "title": "Post Leadoversightofficers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "PostLeadoversightofficers",
    "group": "leadoversightofficers",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"Leadoversightofficers Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":leadoversightofficersName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/leadOversightOfficers/leadOffController.js",
    "groupTitle": "leadoversightofficers"
  },
  {
    "type": "put",
    "url": "leadoversightofficers",
    "title": "Update Leadoversightofficers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "UpdateLeadoversightofficers",
    "group": "leadoversightofficers",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Leadoversightofficers Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/leadOversightOfficers/leadOffController.js",
    "groupTitle": "leadoversightofficers"
  },
  {
    "type": "delete",
    "url": "operationscovered",
    "title": "Delete Operations Covered",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "Deleteoperationscovered",
    "group": "operations_covered",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'operationscovered Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/operationsCovered/opCoveredController.js",
    "groupTitle": "operations_covered"
  },
  {
    "type": "get",
    "url": "operationscovered",
    "title": "Get all operationscovered",
    "name": "Getoperationscovered",
    "group": "operations_covered",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of operationscovered.</p>"
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
          "content": "HTTP/1.1 400 Not Found\n{\n  \"message\": \"Request unsuccessful please contact the admin.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/operationsCovered/opCoveredController.js",
    "groupTitle": "operations_covered"
  },
  {
    "type": "post",
    "url": "operationscovered",
    "title": "post new operations covered",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "Postoperationscovered",
    "group": "operations_covered",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"operations covered Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":operationName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/operationsCovered/opCoveredController.js",
    "groupTitle": "operations_covered"
  },
  {
    "type": "put",
    "url": "operationscovered",
    "title": "Update Operations Covered",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "Updateoperationscovered",
    "group": "operations_covered",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'operationscovered Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/operationsCovered/opCoveredController.js",
    "groupTitle": "operations_covered"
  },
  {
    "type": "delete",
    "url": "oversightReport",
    "title": "Delete OversightReport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeleteOversightReport",
    "group": "oversightReport",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'OversightReport Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/oversightReport/oversightReportController.js",
    "groupTitle": "oversightReport"
  },
  {
    "type": "get",
    "url": "oversightReport",
    "title": "Get All OversightReport",
    "name": "GetoversightReport",
    "group": "oversightReport",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of OversightReport List.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"oversightReportId\": 4101,\n        \"title\": \"Oversight Report Egypt 1\",\n        \"assignmentStartDate\": \"2017-11-01T00:00:00.000Z\",\n        \"assignmentEndDate\": \"2017-11-25T00:00:00.000Z\",\n        \"periodCoveredStart\": \"2017-11-01T00:00:00.000Z\",\n        \"periodCoveredEnd\": \"2017-11-29T00:00:00.000Z\",\n        \"responseDeadline\": \"2017-11-23T00:00:00.000Z\",\n        \"actualRespDate\": \"2017-11-21T00:00:00.000Z\",\n        \"reportStage\": \"DRAFT\",\n        \"reportIssueDate\": \"2017-11-15T00:00:00.000Z\",\n        \"reportNumber\": \"Oversight Report Egypt 1\",\n        \"controlNumber\": \"Oversight Report  Egypt 1\",\n        \"implementationStatus\": {\n            \"id\": 1,\n            \"name\": \"Open      \"\n        },\n        \"oversightUnit\": {\n            \"id\": 4,\n            \"name\": \"Independent Audit and Oversight Committee (IAOC)\"\n        },\n        \"detailOverseenParties\": \"\",\n        \"oversightType\": {\n            \"id\": 3,\n            \"name\": \"Evaluation\"\n        },\n        \"coverage\": {\n            \"id\": 2,\n            \"code\": \"OP\",\n            \"name\": \"Operations\"\n        },\n        \"situation\": [\n            {\n                \"id\": 1,\n                \"code\": \"000\",\n                \"name\": \"Non Situation\"\n            }\n        ],\n        \"overseenParties\": [\n            {\n                \"id\": 2,\n                \"name\": \"IRQ ABC\",\n                \"code\": \"Iraq\"\n            },\n            {\n                \"id\": 12,\n                \"name\": \"EGY ABC\",\n                \"code\": \"Egypt\"\n            }\n        ],\n        \"leadOversightOff\": [\n            {\n                \"id\": 2,\n                \"name\": \"Ashwin\"\n            }\n        ],\n        \"operationsCovered\": [\n            {\n                \"id\": 2,\n                \"name\": \"Egypt\"\n            }\n        ]\n    },\n    {\n        \"oversightReportId\": 4106,\n        \"title\": \"Oversight  Report 123\",\n        \"assignmentStartDate\": \"2017-11-02T00:00:00.000Z\",\n        \"assignmentEndDate\": \"2017-11-30T00:00:00.000Z\",\n        \"periodCoveredStart\": \"2017-11-08T00:00:00.000Z\",\n        \"periodCoveredEnd\": \"2017-11-16T00:00:00.000Z\",\n        \"responseDeadline\": \"2017-11-01T00:00:00.000Z\",\n        \"actualRespDate\": \"2017-11-10T00:00:00.000Z\",\n        \"reportStage\": \"DRAFT\",\n        \"reportIssueDate\": \"2017-11-02T00:00:00.000Z\",\n        \"reportNumber\": \"Oversight  Report 123\",\n        \"controlNumber\": \"Oversight  Report 123\",\n        \"implementationStatus\": {\n            \"id\": 1,\n            \"name\": \"Open      \"\n        },\n        \"oversightUnit\": {\n            \"id\": 2,\n            \"name\": \"Compliance Monitoring Assignment (CMA)\"\n        },\n        \"detailOverseenParties\": \"Oversight  Report 123\",\n        \"oversightType\": {\n            \"id\": 3,\n            \"name\": \"Evaluation\"\n        },\n        \"coverage\": {\n            \"id\": 2,\n            \"code\": \"OP\",\n            \"name\": \"Operations\"\n        },\n        \"situation\": [\n            {\n                \"id\": 2,\n                \"code\": \"202\",\n                \"name\": \"Europe Crisis\"\n            }\n        ],\n        \"overseenParties\": [\n            {\n                \"id\": 2,\n                \"name\": \"IRQ ABC\",\n                \"code\": \"Iraq\"\n            }\n        ],\n        \"leadOversightOff\": [\n            {\n                \"id\": 2,\n                \"name\": \"Ashwin\"\n            }\n        ],\n        \"operationsCovered\": [\n            {\n                \"id\": 3,\n                \"name\": \"Iraq\"\n            }\n        ]\n    }]",
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
    "filename": "server/api/oversightReport/oversightReportController.js",
    "groupTitle": "oversightReport"
  },
  {
    "type": "post",
    "url": "oversightReport",
    "title": "Post OversightReport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Mandatory title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignmentEndDate",
            "description": "<p>Mandatory assignmentEndDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "periodCoveredStart",
            "description": "<p>Mandatory periodCoveredStart.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "periodCoveredEnd",
            "description": "<p>Mandatory periodCoveredEnd.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "responseDeadline",
            "description": "<p>Mandatory responseDeadline.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "actualRespDate",
            "description": "<p>Mandatory actualRespDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportStage",
            "description": "<p>Mandatory reportStage.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportIssueDate",
            "description": "<p>Mandatory reportIssueDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportNumber",
            "description": "<p>Mandatory reportNumber.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "controlNumber",
            "description": "<p>Mandatory controlNumber.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "implementationStatus",
            "description": "<p>Mandatory implementationStatus.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oversightUnit",
            "description": "<p>Mandatory oversightUnit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detailOverseenParties",
            "description": "<p>Mandatory detailOverseenParties.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oversightType",
            "description": "<p>Mandatory oversightType.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "coverage",
            "description": "<p>Mandatory coverage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "situation",
            "description": "<p>Mandatory situation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "overseenParties",
            "description": "<p>Mandatory overseenParties.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "leadOversightOff",
            "description": "<p>Mandatory leadOversightOff.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "operationsCovered",
            "description": "<p>Mandatory operationsCovered.</p>"
          }
        ]
      }
    },
    "name": "PostOversightReport",
    "group": "oversightReport",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"OversightReport Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id\n       }\n     }\n\t\t }",
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
    "filename": "server/api/oversightReport/oversightReportController.js",
    "groupTitle": "oversightReport"
  },
  {
    "type": "put",
    "url": "oversightReport",
    "title": "Update OversightReport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oversightReportId",
            "description": "<p>Mandatory oversightReportId.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Mandatory title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignmentStartDate",
            "description": "<p>Mandatory assignmentStartDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignmentEndDate",
            "description": "<p>Mandatory assignmentEndDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "periodCoveredStart",
            "description": "<p>Mandatory periodCoveredStart.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "periodCoveredEnd",
            "description": "<p>Mandatory periodCoveredEnd.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "responseDeadline",
            "description": "<p>Mandatory responseDeadline.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "actualRespDate",
            "description": "<p>Mandatory actualRespDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportStage",
            "description": "<p>Mandatory reportStage.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportIssueDate",
            "description": "<p>Mandatory reportIssueDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportNumber",
            "description": "<p>Mandatory reportNumber.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "controlNumber",
            "description": "<p>Mandatory controlNumber.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "implementationStatus",
            "description": "<p>Mandatory implementationStatus.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oversightUnit",
            "description": "<p>Mandatory oversightUnit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "detailOverseenParties",
            "description": "<p>Mandatory detailOverseenParties.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oversightType",
            "description": "<p>Mandatory oversightType.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "coverage",
            "description": "<p>Mandatory coverage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "situation",
            "description": "<p>Mandatory situation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "overseenParties",
            "description": "<p>Mandatory overseenParties.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "leadOversightOff",
            "description": "<p>Mandatory leadOversightOff.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "operationsCovered",
            "description": "<p>Mandatory operationsCovered.</p>"
          }
        ]
      }
    },
    "name": "UpdateOversightReport",
    "group": "oversightReport",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'OversightReport Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/oversightReport/oversightReportController.js",
    "groupTitle": "oversightReport"
  },
  {
    "type": "delete",
    "url": "oversighttype",
    "title": "Delete Oversighttype",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeleteOversighttype",
    "group": "oversighttype",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Oversighttype Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/oversightType/oversightTypeController.js",
    "groupTitle": "oversighttype"
  },
  {
    "type": "get",
    "url": "oversighttype",
    "title": "Get All Oversighttype",
    "name": "Getoversighttype",
    "group": "oversighttype",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Oversighttype List.</p>"
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
    "filename": "server/api/oversightType/oversightTypeController.js",
    "groupTitle": "oversighttype"
  },
  {
    "type": "post",
    "url": "oversighttype",
    "title": "Post Oversighttype",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "PostOversighttype",
    "group": "oversighttype",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"Oversighttype Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":oversighttypeName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/oversightType/oversightTypeController.js",
    "groupTitle": "oversighttype"
  },
  {
    "type": "put",
    "url": "oversighttype",
    "title": "Update Oversighttype",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "UpdateOversighttype",
    "group": "oversighttype",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Oversighttype Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/oversightType/oversightTypeController.js",
    "groupTitle": "oversighttype"
  },
  {
    "type": "delete",
    "url": "oversightunit",
    "title": "Delete Oversightunit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeleteOversightunit",
    "group": "oversightunit",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Oversightunit Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/oversightUnit/oversightUnitController.js",
    "groupTitle": "oversightunit"
  },
  {
    "type": "get",
    "url": "oversightunit",
    "title": "Get All Oversightunit",
    "name": "Getoversightunit",
    "group": "oversightunit",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Oversightunit List.</p>"
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
    "filename": "server/api/oversightUnit/oversightUnitController.js",
    "groupTitle": "oversightunit"
  },
  {
    "type": "post",
    "url": "oversightunit",
    "title": "Post Oversightunit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "PostOversightunit",
    "group": "oversightunit",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"Oversightunit Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":oversightunitName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/oversightUnit/oversightUnitController.js",
    "groupTitle": "oversightunit"
  },
  {
    "type": "put",
    "url": "oversightunit",
    "title": "Update Oversightunit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "UpdateOversightunit",
    "group": "oversightunit",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Oversightunit Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/oversightUnit/oversightUnitController.js",
    "groupTitle": "oversightunit"
  },
  {
    "type": "delete",
    "url": "primaryrisk",
    "title": "Delete Primaryrisk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeletePrimaryrisk",
    "group": "primaryrisk",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Primaryrisk Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/primarySubRisk/primarySubRiskController.js",
    "groupTitle": "primaryrisk"
  },
  {
    "type": "post",
    "url": "primaryrisk",
    "title": "Post Primaryrisk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Mandatory category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mandatory code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "PostPrimaryrisk",
    "group": "primaryrisk",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"Primaryrisk Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"category\":riskcategory,\n         \"code\":riskcode,\n         \"name\":riskName\n         \n       }\n     }\n\t\t }",
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
    "filename": "server/api/primarySubRisk/primarySubRiskController.js",
    "groupTitle": "primaryrisk"
  },
  {
    "type": "put",
    "url": "primaryrisk",
    "title": "Update Primaryrisk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Mandatory category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mandatory code.</p>"
          }
        ]
      }
    },
    "name": "UpdatePrimaryrisk",
    "group": "primaryrisk",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Primaryrisk Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/primarySubRisk/primarySubRiskController.js",
    "groupTitle": "primaryrisk"
  },
  {
    "type": "get",
    "url": "primaryrisk",
    "title": "Get All Primary Risk",
    "name": "primaryrisk",
    "group": "primaryrisk",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Primaryrisk List.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n     \"id\":1,\n     \"category\":riskcategory,\n     \"code\":riskcode,\n     \"name\":riskName           \n   },{\n     \"id\":2,\n     \"category\":riskcategory,\n     \"code\":riskcode,\n     \"name\":riskName           \n   }]",
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
    "filename": "server/api/primarySubRisk/primarySubRiskController.js",
    "groupTitle": "primaryrisk"
  },
  {
    "type": "delete",
    "url": "recommendation",
    "title": "Delete Recommendation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeleteRecommendation",
    "group": "recommendation",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Recommendation Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/recommendation/recommendationController.js",
    "groupTitle": "recommendation"
  },
  {
    "type": "get",
    "url": "recommendation",
    "title": "Get All Recommendation",
    "name": "Getrecommendation",
    "group": "recommendation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Recommendation List.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n        \"oversightReportId\": 4088,\n        \"recommendationId\": 43,\n        \"recNumber\": {\n            \"id\": 1,\n            \"name\": \"xyw\"\n        },\n        \"recommendation\": \"asas\",\n        \"reportdescription\": \"sas\",\n        \"actionRequired\": \"\",\n        \"mernResponse\": \"4088\",\n        \"plannedImpDate\": \"2017-11-01T06:30:00.000Z\",\n        \"actualImpDate\": \"2017-11-30T06:30:00.000Z\",\n        \"respStaffName\": \"4088\",\n        \"respStaffTitle\": \"4088\",\n        \"actionParties\": {\n            \"id\": 3,\n            \"name\": \"Value3\"\n        },\n        \"implementationStatus\": {\n            \"id\": 3,\n            \"name\": \"Final     \"\n        },\n        \"criticality\": {\n            \"id\": 1014,\n            \"name\": \"Important\"\n        },\n        \"topic\": {\n            \"id\": 2,\n            \"name\": \"Cost-sharing with UN Agencies\"\n        },\n        \"respStaffUnit\": {\n            \"id\": 2,\n            \"name\": \"Iraq\"\n        },\n        \"extFactIndicator\": \"4088\",\n        \"reportReference\": \"4088\",\n        \"primaryRisk\": {\n            \"id\": 5,\n            \"category\": \"Management & Support\",\n            \"code\": 2.02,\n            \"name\": \"Oversight, accountability, and ethics\"\n        },\n        \"secondaryRisk\": {\n            \"id\": 2,\n            \"category\": \"Management & Sap\",\n            \"code\": 2.02,\n            \"name\": \"Planning and resource allocation 1231\"\n        },\n        \"acceptance\": \"Yes\",\n        \"deemedImplemented\": \"null\"\n    },\n    {\n        \"oversightReportId\": 4102,\n        \"recommendationId\": 50,\n        \"recNumber\": {\n            \"id\": 1,\n            \"name\": \"xyw\"\n        },\n        \"recommendation\": \"test2\",\n        \"reportdescription\": \"test2\",\n        \"actionRequired\": \"\",\n        \"mernResponse\": \"test2test2\",\n        \"plannedImpDate\": \"2017-11-07T06:30:00.000Z\",\n        \"actualImpDate\": \"2017-11-05T06:30:00.000Z\",\n        \"respStaffName\": \"test2\",\n        \"respStaffTitle\": \"test2\",\n        \"actionParties\": {\n            \"id\": 1,\n            \"name\": \"Value1\"\n        },\n        \"implementationStatus\": {\n            \"id\": 1,\n            \"name\": \"Open      \"\n        },\n        \"criticality\": {\n            \"id\": 1013,\n            \"name\": \"Critical\"\n        },\n        \"topic\": {\n            \"id\": 2,\n            \"name\": \"Cost-sharing with UN Agencies\"\n        },\n        \"respStaffUnit\": {\n            \"id\": 1,\n            \"name\": \"Sp\"\n        },\n        \"extFactIndicator\": \"test2\",\n        \"reportReference\": \"test2\",\n        \"primaryRisk\": {\n            \"id\": 1,\n            \"category\": \"Management & S1\",\n            \"code\": 2.04,\n            \"name\": \"Planning and resource allocation 1234\"\n        },\n        \"secondaryRisk\": {\n            \"id\": 1,\n            \"category\": \"Management & S1\",\n            \"code\": 2.04,\n            \"name\": \"Planning and resource allocation 1234\"\n        },\n        \"acceptance\": \"Yes\",\n        \"deemedImplemented\": \"Yes\"\n    }]",
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
    "filename": "server/api/recommendation/recommendationController.js",
    "groupTitle": "recommendation"
  },
  {
    "type": "post",
    "url": "recommendation",
    "title": "Post Recommendation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oversightReportId",
            "description": "<p>Mandatory oversightReportId.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recNumber",
            "description": "<p>Mandatory recNumber.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportdescription",
            "description": "<p>Mandatory reportdescription.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recommendation",
            "description": "<p>Mandatory recommendation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "actionParties",
            "description": "<p>Mandatory actionParties.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "primaryRisk",
            "description": "<p>Mandatory primaryRisk.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "secondaryRisk",
            "description": "<p>Mandatory secondaryRisk.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topic",
            "description": "<p>Mandatory topic.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "criticality",
            "description": "<p>Mandatory criticality.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acceptance",
            "description": "<p>Mandatory acceptance.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deemedImplemented",
            "description": "<p>Mandatory deemedImplemented.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "actionRequired",
            "description": "<p>Mandatory actionRequired.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mernResponse",
            "description": "<p>Mandatory mernResponse.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plannedImpDate",
            "description": "<p>Mandatory plannedImpDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "actualImpDate",
            "description": "<p>Mandatory actualImpDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "implementationStatus",
            "description": "<p>Mandatory implementationStatus.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "respStaffUnit",
            "description": "<p>Mandatory respStaffUnit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "respStaffTitle",
            "description": "<p>Mandatory respStaffTitle.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "respStaffName",
            "description": "<p>Mandatory respStaffName.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extFactIndicator",
            "description": "<p>Mandatory extFactIndicator.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportReference",
            "description": "<p>Mandatory reportReference.</p>"
          }
        ]
      }
    },
    "name": "PostRecommendation",
    "group": "recommendation",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"Recommendation Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":recommendationName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/recommendation/recommendationController.js",
    "groupTitle": "recommendation"
  },
  {
    "type": "put",
    "url": "recommendation",
    "title": "Update Recommendation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recommendationId",
            "description": "<p>Mandatory recommendationId.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oversightReportId",
            "description": "<p>Mandatory oversightReportId.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recNumber",
            "description": "<p>Mandatory recNumber.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportdescription",
            "description": "<p>Mandatory reportdescription.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recommendation",
            "description": "<p>Mandatory recommendation.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "actionParties",
            "description": "<p>Mandatory actionParties.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "primaryRisk",
            "description": "<p>Mandatory primaryRisk.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "secondaryRisk",
            "description": "<p>Mandatory secondaryRisk.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "topic",
            "description": "<p>Mandatory topic.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "criticality",
            "description": "<p>Mandatory criticality.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "acceptance",
            "description": "<p>Mandatory acceptance.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deemedImplemented",
            "description": "<p>Mandatory deemedImplemented.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "actionRequired",
            "description": "<p>Mandatory actionRequired.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mernResponse",
            "description": "<p>Mandatory mernResponse.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plannedImpDate",
            "description": "<p>Mandatory plannedImpDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "actualImpDate",
            "description": "<p>Mandatory actualImpDate.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "implementationStatus",
            "description": "<p>Mandatory implementationStatus.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "respStaffUnit",
            "description": "<p>Mandatory respStaffUnit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "respStaffTitle",
            "description": "<p>Mandatory respStaffTitle.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "respStaffName",
            "description": "<p>Mandatory respStaffName.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extFactIndicator",
            "description": "<p>Mandatory extFactIndicator.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportReference",
            "description": "<p>Mandatory reportReference.</p>"
          }
        ]
      }
    },
    "name": "UpdateRecommendation",
    "group": "recommendation",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Recommendation Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/recommendation/recommendationController.js",
    "groupTitle": "recommendation"
  },
  {
    "type": "delete",
    "url": "situation",
    "title": "Delete Situation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeleteSituation",
    "group": "situation",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Situation Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/situation/situationController.js",
    "groupTitle": "situation"
  },
  {
    "type": "post",
    "url": "situation",
    "title": "Post Situation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "PostSituation",
    "group": "situation",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"Situation Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":situationName,\n         \"code\":situationCode\n       }\n     }\n\t\t }",
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
    "filename": "server/api/situation/situationController.js",
    "groupTitle": "situation"
  },
  {
    "type": "put",
    "url": "situation",
    "title": "Update Situation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "UpdateSituation",
    "group": "situation",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Situation Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/situation/situationController.js",
    "groupTitle": "situation"
  },
  {
    "type": "get",
    "url": "situation",
    "title": "Get All Situation",
    "name": "situation",
    "group": "situation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Situation List.</p>"
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
    "filename": "server/api/situation/situationController.js",
    "groupTitle": "situation"
  },
  {
    "type": "delete",
    "url": "topics",
    "title": "Delete Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "DeleteTopic",
    "group": "topics",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Topic Deleted Successfully.'\n\t\t }",
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
    "filename": "server/api/topics/topicsController.js",
    "groupTitle": "topics"
  },
  {
    "type": "get",
    "url": "topics",
    "title": "Get All Topic",
    "name": "Gettopics",
    "group": "topics",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>List of Topic List.</p>"
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
    "filename": "server/api/topics/topicsController.js",
    "groupTitle": "topics"
  },
  {
    "type": "post",
    "url": "topics",
    "title": "Post Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name.</p>"
          }
        ]
      }
    },
    "name": "PostTopic",
    "group": "topics",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t  dbData: {\n       \"message\":\"Topic Inserted Successfully.\",\n       \"result\":\n       {\n         \"id\":resu.recordset[0].last_insert_id,\n         \"name\":topicsName\n       }\n     }\n\t\t }",
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
    "filename": "server/api/topics/topicsController.js",
    "groupTitle": "topics"
  },
  {
    "type": "put",
    "url": "topics",
    "title": "Update Topic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "name": "UpdateTopic",
    "group": "topics",
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
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t   dbData: 'Topic Updated Successfully.'\n\t\t }",
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
    "filename": "server/api/topics/topicsController.js",
    "groupTitle": "topics"
  }
] });
