module.exports = function(server) {

  //when user logs in
  server.post('/auth', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var goodCombo = true;
    //check if user and pass are valid here (using SQL)
    if (goodCombo) {
      console.log(email);
      req.session.user = email;
      res.redirect("/dashboard.html");
      console.log(req.session.user);

    }
    else {
      req.session.msg = "Invalid Login";
      res.redirect("./");
      console.log(req.session.msg);
    }
  });
};
