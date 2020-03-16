var gameInfo = document.getElementById('gameInfo');
var game1 = document.getElementById('game1');
var game2 = document.getElementById('game2');
var game3 = document.getElementById('game3');
var game4 = document.getElementById('game4');
var game5 = document.getElementById('game5');

game1.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      change(this, 1);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=1', true);
  xhr.send();
});

game2.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      change(this, 2);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=2', true);
  xhr.send();
});

game3.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      change(this, 3);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=3', true);
  xhr.send();
});

game4.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      change(this, 4);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=4', true);
  xhr.send();
});

game5.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      change(this, 5);
    }
  };
  xhr.open('GET', '/dashboardgames?gamenum=5', true);
  xhr.send();
});

function change(xml, num) {
  //game number and xml response in JSON
  var gameNum = num;
  var obj = JSON.parse(xml.response);

  //building div for gameInfo
  var div = document.createElement("div");

  var title = document.createElement("h3");
  title.innerHTML = "<a href=\"#\">" + obj.sport + " " + obj.league + "</a>";
  div.append(title);

  var content1 = document.createElement("h4");
  content1.innerHTML += obj.Time + " " + obj.Day + " " + obj.Date;
  div.append(content1);

  var content2 = document.createElement("h4");
  content2.innerHTML += "<a href=\"#\">" + obj.Location + "</a>";
  div.append(content2);

  var content3 = document.createElement("h4");
  content3.innerHTML += "VS " + "<a href=\"#\">" + obj.Opponent + "</a>";
  div.append(content3);

  var content4 = document.createElement("h5");
  content4.innerHTML += "record: " + obj.OpponentWins + " | " + obj.OpponentDraws + " | " + obj.OpponentLosses;
  div.append(content4);

  var content5 = document.createElement("p");
  content5.innerHTML ="<a href=\"/gameinfo.html?myVar=09485\">more info</a>";
  div.append(content5);

  //reset div and update
  gameInfo.innerHTML = "";
  gameInfo.append(div);
}
