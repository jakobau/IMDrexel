module.exports = function(server) {

  //when user logs in
  server.post('/auth', (req, res) => {
    var email = req.body.inputEmail;
    var password = req.body.inputPassword;
    var goodCombo = true;

    //check if user and pass are valid here (using SQL)
    if (goodCombo) {
      req.session.user = email;
      res.redirect("/index.html");
      console.log(req.session.user);

    }
    else {
      req.session.msg = "Invalid Login";
      res.redirect("./login.html");
      console.log(req.session.msg);
    }
  });
};
