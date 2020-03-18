
module.exports = function(server) {

  //when user logs in
  server.post('/jointeam', function(request, response) {
    var teamid = request.body.teamid;
    console.log(teamid);

    //check if user and pass are valid here (using SQL)

    //response.redirect('/index.html');
  });
};
