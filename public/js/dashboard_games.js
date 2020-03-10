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

}
