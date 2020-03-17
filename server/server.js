const express = require("express");
const server = express();
const mysql = require("mysql");

const dashboard = require("./dashboard")(server);

server.listen(8080, function() { console.log("Server open on 8080...") });

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

server.use(express.static("../public"));
