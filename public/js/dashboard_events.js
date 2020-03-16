var events = document.getElementById('events');

window.addEventListener("load", function() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open('GET', '/dashboardevents', true);
  xhr.send();
  events.innerHTML += "<h2>GAAAAME 5</h2>";
});

function responseReceivedHandler() {
  return
}
