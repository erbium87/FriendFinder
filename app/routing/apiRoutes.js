var friendsData = require("../data/friends");


module.exports = function(app) {
//had this set to friends before but changed it to survey to try and get take survey button to work. may actually need to be friends route
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
  
      friendsData.push(req.body);
    
  });

};
 