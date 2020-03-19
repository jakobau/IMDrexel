var gameInfo = document.getElementById('gameInfo');

//Circle Game UI
var game1 = document.getElementById('game1');
var game2 = document.getElementById('game2');
var game3 = document.getElementById('game3');
var game4 = document.getElementById('game4');
var game5 = document.getElementById('game5');

//mobile support
var shortgame1 = document.getElementById('shortgame2');
var shortgame2 = document.getElementById('shortgame3');
var shortgame3 = document.getElementById('shortgame4');

//default next game in gameInfo html
window.addEventListener("load", function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/check', true);
  xhr.send();
});

//default next game in gameInfo html
window.addEventListener("load", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resetColor();
      game3.style.backgroundColor = "#f2be54";
      gamechange(this, 3);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=3', true);
  xhr.send();
});

//changing gameInfo html
//second to last game played
game1.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resetColor();
      game1.style.backgroundColor = "#f2be54";
      gamechange(this, 1);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=1', true);
  xhr.send();
});

//last game played
game2.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resetColor();
      game2.style.backgroundColor = "#f2be54";
      gamechange(this, 2);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=2', true);
  xhr.send();
});

//next game
game3.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resetColor();
      game3.style.backgroundColor = "#f2be54";
      gamechange(this, 3);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=3', true);
  xhr.send();
});

//after the next game
game4.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resetColor();
      game4.style.backgroundColor = "#f2be54";
      gamechange(this, 4);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=4', true);
  xhr.send();
});

//two games from the next
game5.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resetColor();
      game5.style.backgroundColor = "#f2be54";
      gamechange(this, 5);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=5', true);
  xhr.send();
});

//MOBILE SUPPORT
//last game
shortgame1.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      gamechange(this, 2);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=2', true);
  xhr.send();
});

//next game
shortgame2.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      gamechange(this, 3);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=3', true);
  xhr.send();
});

//game after next game
shortgame3.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      gamechange(this, 4);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=4', true);
  xhr.send();
});

//change on event function
function gamechange(xml, num) {
  //game number and xml response in JSON
  var gameNum = "game" + num.toString();
  var obj = JSON.parse(xml.response);

  //building div for gameInfo
  var div = document.createElement("div");

  var title = document.createElement("h3");
  title.innerHTML = "<a href=\"#\">" + obj.sport + " " + obj.league + "</a>";
  div.append(title);
  div.append(document.createElement("hr"));

  var content1 = document.createElement("h4");
  content1.innerHTML += obj.Date + ", " + obj.Time;
  div.append(content1);

  var content2 = document.createElement("h4");
  content2.innerHTML += "<a href=\"map.html\">" + obj.Location + "</a>";
  div.append(content2);

  var content3 = document.createElement("h4");
  content3.innerHTML += "<a href=\"viewteam.html?teamid=1&page=dashboard\">MY TEAM</a>" + " VS " + "<a href=\"viewteam.html?teamid=1&page=dashboard\">" + obj.Opponent + "</a>";
  div.append(content3);

  var content4 = document.createElement("h5");
  content4.innerHTML += "record: " + obj.OpponentWins + " | " + obj.OpponentDraws + " | " + obj.OpponentLosses;
  div.append(content4);

  var content5 = document.createElement("p");
  content5.innerHTML ="<a href=\"/gameinfo.html?gameid=09485\">more info</a>";
  div.append(content5);

  //reset div and update
  gameInfo.innerHTML = "";
  gameInfo.append(div);

  if(num == 3) {
    game3.innerHTML = "NEXT GAME<h4><strong>"+obj.Date+"</strong></h4><h5><em>"+obj.sport+"</em></h5>";
  }
}

//reset background color
function resetColor() {
  game1.style.backgroundColor = "#cdd4ca";
  game2.style.backgroundColor = "#cdd4ca";
  game3.style.backgroundColor = "#cdd4ca";
  game4.style.backgroundColor = "#cdd4ca";
  game5.style.backgroundColor = "#cdd4ca";
}
