var gameinfo = document.getElementById('gameinfo');
var bread = document.getElementById('bread');

var recordHome = document.getElementById('record1');
var pastGamesHome = document.getElementById('pastGames1');
var totalPlayersHome = document.getElementById('totalPlayers1');

var recordAway = document.getElementById('record2');
var pastGamesAway = document.getElementById('pastGames2');
var totalPlayersAway = document.getElementById('totalPlayers2');

var tableHome = document.getElementById("table1");
var tableAway = document.getElementById("table2");

var urlParams = new URLSearchParams(window.location.search);

if(urlParams.has('gameid')) {
  var gameid = urlParams.get('gameid');
  bread.innerHTML = gameid.toString();

  //Home
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

  tableHome.innerHTML = "";
  tableHome.append(tr);

  //Away
  // !foreach user in team, add to table variable under tbody

  //new user
  var tr2 = document.createElement("tr");

  var th2 = document.createElement("th");
  th2.setAttribute("scope", "row");
  th2.innerHTML = "<a href=\"#\">" + "Vincent Saverese" + "</a>";
  tr2.append(th2);

  var td2 = document.createElement("td");
  td2.innerHTML = "Member";
  tr2.append(td2);

  tableAway.innerHTML = "";
  tableAway.append(tr2);

  //// TODO: record, totalPlayers, list users, update team name

}
