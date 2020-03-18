var pagefrom = document.getElementById("pagefrom");
var pagefrom2 = document.getElementById("pagefrom2");
var teamname = document.getElementById("teamname");

var table = document.getElementById("table");

var urlParams = new URLSearchParams(window.location.search);

if(urlParams.has('teamid')) {
  var teamid = urlParams.get('teamid');
  var page = urlParams.get('page');

  // !get team info using team id from SQL HERE

  if(page == "league") {
    pagefrom.innerHTML = "<a href=\"jointeam.html\" style=\"color:white;\">Leagues</a>";
    pagefrom2.style.display = "block";
    pagefrom2.innerHTML = "Team " + teamid.toString();
  }

  if(page == "dashboard") {
    pagefrom.style.display = "none";
    pagefrom2.innerHTML="<a href=\"#\" style=\"color:white;\">Team " + teamid.toString() + "</a>";
  }

  if(page == "gameinfo") {
    var gameid = urlParams.get('gameid');
    pagefrom.innerHTML = "<a href=\"gameinfo.html?gameid="+gameid.toString()+"\" style=\"color:white;\">Game ID: " + gameid.toString() + "</a>";
    pagefrom2.style.display = "block";
    pagefrom2.innerHTML = "Team " + teamid.toString();
  }

  teamname.innerHTML = teamid + " 5v5 Basketball"; // !add team name and league


  // !foreach user in team, add to table variable under tbody

  table.innerHTML = ""; //reset tbody

  //new user
  var tr = document.createElement("tr");

  var th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.innerHTML = "<a href=\"#\">" + "Vincent Saverese" + "</a>";
  tr.append(th);

  var td = document.createElement("td");
  td.innerHTML = "Member";
  tr.append(td);

  var td2 = document.createElement("td");
  td2.innerHTML = "10/11/2020";
  tr.append(td2);

  table.append(tr);

} else {
  //error
}
//// TODO: list users, update team name
