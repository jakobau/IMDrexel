const express = require("express");
const server = express();
const mysql = require("mysql");

server.listen(8080, function() { console.log("Server open on 8080...") })

//const connection = mysql.createConnection({
//  host     : process.env.RDS_HOSTNAME,
//  user     : process.env.RDS_USERNAME,
//  password : process.env.RDS_PASSWORD,
//  port     : process.env.RDS_PORT
//});
//
//connection.connect(function(err) {
//  if (err) {
//    console.error('Database connection failed: ' + err.stack);
//    return;
//  }
//
//  console.log('Connected to database.');
//});
//
//connection.end();

server.get("/dashboard", (req, res) => {
  var obj = {};
  obj["sport"] = "Basketball";
  obj["league"] = "5v5 Mens League";
  obj["Time"] = "17:00";
  obj["Day"] = "Tuesday";
  obj["Date"] = "4 May 2020";
  obj["Location"] = "@Court1";
  obj["Opponent"] = "KILLERS";
  obj["OpponentWins"] = "7";
  obj["OpponentDraws"] = "0";
  obj["OpponentLosses"] = "0";
  
  res.send(obj);
})
