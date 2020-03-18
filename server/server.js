const express = require("express");
const server = express();
const mysql = require("mysql");

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended : true}));
server.use(bodyParser.json());

const dashboard = require("./dashboard")(server);
const auth = require("./authenticate")(server);
const jointeam = require("./jointeam")(server);

// Vincent Savarese AWS educate database credentials
let con = mysql.createConnection({
  // user and password fields are the master username and master password for the imdrexel instance
  host     : 'imdrexel.crli4l5uoyui.us-east-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'DrexelCCIAWSacc2311',
});

// establish connection between server and database
con.connect(function(err) {
  if (err) {
    console.log("Failed to connect to database");
    return;
  }
  console.log("Successfully connected to IMDrexel Database");
});

// choose the database to use and query
con.query('USE imdrexldb;');

// begin making queries and requesting information from the server

var result = [];
//
//  anything surrounded by quotes and pluses is to be replaced with user information once implemented
//

var schedule = 'SELECT * FROM schedule_ WHERE schedule_.homeID = '+'1'+' OR schedule_.awayID = '+'1'+';';

con.query(schedule, function(err, rows, field){
  if (err) {
    console.log(err);
    return;
  }

  server.get('/sqlrequest', (req, res) => {
    res.send(rows)
  });
  
});



con.end();

server.use(express.static("../public"));
server.listen(8080, function() { console.log("Server open on 8080...") });
