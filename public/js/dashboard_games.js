var gameInfo = document.getElementById('gameInfo');
var game1 = document.getElementById('game1');
var game2 = document.getElementById('game2');
var game3 = document.getElementById('game3');
var game4 = document.getElementById('game4');
var game5 = document.getElementById('game5');

game1.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open('GET', '/dashboard?gamenum=1', true);
  xhr.send();
  gameInfo.innerHTML += "<h2>GAAAAME 1</h2>";
});

game2.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open('GET', '/dashboard?gamenum=2', true);
  xhr.send();
  gameInfo.innerHTML += "<h2>GAAAAME 2</h2>";
});

game3.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open('GET', '/dashboard?gamenum=3', true);
  xhr.send();
  gameInfo.innerHTML += "<h2>GAAAAME 3</h2>";
});

game4.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open('GET', '/dashboard?gamenum=4', true);
  xhr.send();
  gameInfo.innerHTML += "<h2>GAAAAME 4</h2>";
});

game5.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open('GET', '/dashboard?gamenum=5', true);
  xhr.send();
  gameInfo.innerHTML += "<h2>GAAAAME 5</h2>";
});

function responseReceivedHandler() {
  var obj = this.response;

  var div = document.createElement("div");

  var title = document.createElement("h3");
  title.innerHTML = obj.sport + " " + obj.league;
  div.append(title);

  var content1 = document.createElement("h4");
  content1.innerHTML += obj.Time + " " + obj.Day + " " + obj.Date;
  div.append(content1);

  var content2 = document.createElement("h4");
  content2.innerHTML += obj.Location;
  div.append(content2);

  var content3 = document.createElement("h4");
  content3.innerHTML += "VS " + obj.Opponent;
  div.append(content3);

  var content4 = document.createElement("h5");
  content4.innerHTML += obj.OpponentWins + " | " + obj.OpponentDraws + " | " + obj.OpponentLosses;
  div.append(content4);

  gameInfo.innerHTML = "";
  gameInfo.append(div);

}
