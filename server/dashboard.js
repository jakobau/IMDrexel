module.exports = function(server) {

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
