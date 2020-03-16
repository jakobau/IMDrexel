module.exports = function(server) {

  //dashboard_games Endpoint
  server.get('/dashboardgames', (req, res) => {
    var info = req.url.toString().split(/[?|=|&]/); //splits up request
    gameNum = info[2]; //gets just the game number (5 is three games future, 4 is two games, etc.)
    var obj = {};
    obj["sport"] = "Basketball";
    obj["league"] = "5v5 Mens League";
    obj["Time"] = "17:00";
    obj["Day"] = "Tuesday";
    obj["Date"] = "4 May 2020";
    obj["Location"] = "@Court1";
    obj["Opponent"] = "KILLERS";
    obj["OpponentWins"] = "7";
    obj["OpponentDraws"] = "0";
    obj["OpponentLosses"] = "0";

    res.send(obj);
  });

  //dashboard_events Endpoint
  server.get('/dashboardevents', (req, res) => {
    var obj = {};
    res.send(obj);
  });

  //dashboard_announcements Endpoint
  server.get('/dashboardannouncements', (req, res) => {
    var obj = {};
    res.send(obj);
  });

  //dashboard_playerstats Endpoint
  server.get('/dashboardplayerstats', (req, res) => {
    var obj = {};
    res.send(obj);
  });
};
