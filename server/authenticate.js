module.exports = function(server) {

  //when user logs in
  server.post('/auth', function(request, response) {
    var username = request.body.inputEmail;
    var password = request.body.inputPassword;

    //check if user and pass are valid here (using SQL)

    response.redirect('/index.html');
  });
};
