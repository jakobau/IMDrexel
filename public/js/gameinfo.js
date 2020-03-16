var gameinfo = document.getElementById('gameinfo');
var bread = document.getElementById('bread');

//v1 = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
v1 = parent.document.URL.split("?")[1];
v1 = v1.split("=");

window.addEventListener("load", function() {
  gameinfo.innerHTML = "<h5>Game id " + v1[1].toString() + "</h5>";
  bread.innerHTML = v1[1].toString();
});
