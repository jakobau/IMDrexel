var currentLeague = document.getElementById('currentLeague');
var currentDiv = document.getElementById('currentDiv');

var pastLeague1 = document.getElementById('pastLeague1');
var pastDiv1 = document.getElementById('pastDiv1');

var pastLeague2 = document.getElementById('pastLeague2');
var pastDiv2 = document.getElementById('pastDiv2');

var alert = document.getElementById('alert');
var button1 = document.getElementById('button1');

button1.addEventListener('click', function() {
  var div = document.createElement("div");
  div.setAttribute("class", "alert alert-success alert-dismissible");
  div.setAttribute("style","width:85%;");

  var button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("class", "close");
  button.setAttribute("data-dismiss", "alert");
  button.innerHTML="&times;";

  div.append(button);

  var span = document.createElement("span");
  span.innerHTML="<strong>Success!</strong> You have joined a team.";

  div.append(span);

  alert.append(div);
  console.log("trying");
});
/*
<div class="alert alert-success alert-dismissible" style="width:85%;">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Success!</strong> Indicates a successful or positive action.
</div>
*/
