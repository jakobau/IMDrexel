const express = require("express");
const server = express();
const mysql = require("mysql");

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended : true}));
server.use(bodyParser.json());

const session = require("client-sessions");
server.use(session({
  cookieName: "session", 
  secret: "asdf1234asdf1234",
  duration: 30 * 60 * 1000, //duration is 30 mins
  activeDuration: 5 * 60 * 1000 //if duration ends but still active, extend by 5 mins
}));

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
con.query('SELECT * FROM schedule_;', function(err, rows, field){
  if (err) {
    console.log(err);
    return;
  }
  console.log(rows[1]);
});

con.end();

server.use(express.static("../public"));

server.listen(8080, function() { console.log("Server open on 8080...") });

//Checks if user is logged in each time they navigate to a new page
server.get("/", (req, res) => {
  if (req.session.user == undefined) {
    res.redirect("/index.html");
  }
});
