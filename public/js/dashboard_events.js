var events = document.getElementById('events');

window.addEventListener("load", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      eventchange(this);
    }
  };
  xhr.open('GET', '/dashboardevents', true);
  xhr.send();
});

function eventchange(xml) {
  //xml response in JSON
  var obj = JSON.parse(xml.response);

  //building div for gameInfo
  var div = document.createElement("div");

  var title = document.createElement("h5");
  title.innerHTML = "<a href=\"#\">Drexel Basketball Mens @ 7PM Sun 2/20</a>";
  div.append(title);

  div.append(document.createElement("hr"));

  var content1 = document.createElement("h5");
  content1.innerHTML = "<a href=\"#\">Drexel Basketball Womens @ 2PM Sat 3/13</a>";
  div.append(content1);

  div.append(document.createElement("hr"));

  var content2 = document.createElement("h5");
  content2.innerHTML = "<a href=\"#\">Drexel Basketball Womens @ 2PM Sat 3/13</a>";
  div.append(content2);

  div.append(document.createElement("hr"));

  var content3 = document.createElement("h5");
  content3.innerHTML = "<a href=\"#\">Squash Tourney @3/13 - 3/30</a>";
  div.append(content3);

  div.append(document.createElement("hr"));

  var content4 = document.createElement("h5");
  content4.innerHTML = "<a href=\"#\">Drexel Volleyball Womens @ 8PM 3/15</a>";
  div.append(content4);

  div.append(document.createElement("hr"));

  var content5 = document.createElement("p");
  content5.innerHTML ="<a href=\"#\">more info</a>";
  div.append(content5);

  //reset div and update
  events.innerHTML = "";
  events.append(div);
}
