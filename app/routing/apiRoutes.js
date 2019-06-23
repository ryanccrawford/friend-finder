/**
 
     A GET route with the url `/api/friends`.This will be used to display
      a JSON of all possible friends.
      A POST routes `/api/friends`.
      This will be used to handle incoming survey results.
      This route will also be used to handle the compatibility logic.

 *  
 * */
var friendsData = require("../data/friendsData");
var questions = require("../data/questions");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(allfriends);
    });

    app.post("/api/friends", function (req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
    });

};
