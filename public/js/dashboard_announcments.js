var announcments = document.getElementById('announcments');

window.addEventListener("load", function() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open('GET', '/dashboard?gamenum=5', true);
  xhr.send();
  announcments.innerHTML += "<h2>GAAAAME 5</h2>";
});

function responseReceivedHandler() {
  return
}
