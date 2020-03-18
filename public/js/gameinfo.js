var gameinfo = document.getElementById('gameinfo');
var bread = document.getElementById('bread');
var record = document.getElementById('record');
var pastGames = document.getElementById('pastGames');
var totalPlayers = document.getElementById('totalPlayers');

var table = document.getElementById("table");

var urlParams = new URLSearchParams(window.location.search);

if(urlParams.has('gameid')) {
  var gameid = urlParams.get('gameid');
  bread.innerHTML = gameid.toString();

  table.innerHTML = ""; //reset tbody


  // !foreach user in team, add to table variable under tbody

  //new user
  var tr = document.createElement("tr");

  var th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.innerHTML = "<a href=\"#\">" + "Vincent Saverese" + "</a>";
  tr.append(th);

  var td = document.createElement("td");
  td.innerHTML = "Member";
  tr.append(td);

  table.append(tr);

  //// TODO: record, totalPlayers, list users, update team name

}
