var pagefrom = document.getElementById("pagefrom");
var pagefrom2 = document.getElementById("pagefrom2");

var urlParams = new URLSearchParams(window.location.search);

if(urlParams.has('teamid')) {
  var teamid = urlParams.get('teamid');
  var page = urlParams.get('page');

  //get team using team id from SQL HERE

  if(page == "league") {
    pagefrom.innerHTML = "<a href=\"jointeam.html\" style=\"color:white;\">Leagues</a>";
    pagefrom2.style.display = "block";
    pagefrom2.innerHTML = "Team " + teamid.toString();
  }

  if(page == "dashboard") {
    console.log("dashboard");
    pagefrom.style.display = "none";
    pagefrom2.innerHTML="<a href=\"#\" style=\"color:white;\">Team " + teamid.toString() + "</a>";

  }


}
