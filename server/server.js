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

server.get('/dashboardgames', (req, res) => {

  var info = req.url.toString().split(/[?|=|&]/); //splits up request
  gameNum = info[2]; //gets just the game number (5 is three games future, 4 is two games, etc.)
  var obj = {};

  var schedule = 'SELECT * FROM schedule_ WHERE schedule_.homeID = '+'1'+' OR schedule_.awayID = '+'1'+';';
  con.query(schedule, function(err, rows, field){
    if (err) {
      console.log(err);
      return;
    }

    obj["Location"] = rows[gameNum].location;
    obj["Date"] = rows[gameNum].date_.toString().substring(0, 10);
    obj["Time"] = rows[gameNum].date_.toString().substring(16, 24);

    teamID = rows[gameNum].awayID;
    var state = 'SELECT * FROM teams WHERE teamID = '+teamID+';';
    con.query(state, function(err, rows, field){

      obj["Opponent"] = rows[0].teamName;

      var teamStats = 'SELECT * FROM teamStats WHERE teamID = '+teamID+';'
      con.query(teamStats, function(err, rows, field){
        if (err) {
          console.log(err);
          return;
        }

        obj["OpponentWins"] = rows[0].wins;
        obj["OpponentDraws"] = rows[0].losses;
        obj["OpponentLosses"] = rows[0].draws;

        var leagues = 'SELECT * FROM leagues, teams WHERE teams.leagueID = leagues.leagueID AND teams.teamID = 1;'
        con.query(leagues, function(err, rows, field){
          if (err) {
            console.log(err);
            return;
          }

          obj["sport"] = rows[0].league.substring(0, 6);
          obj["league"] = rows[0].league.substring(7, 10) + " " + rows[0].gender;

          res.send(obj);
        });

      });

    });

  });

});

server.use(express.static("../public"));
server.listen(8080, function() { console.log("Server open on 8080...") });
