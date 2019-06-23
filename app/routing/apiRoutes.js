/**
 
     A GET route with the url `/api/friends`.This will be used to display
      a JSON of all possible friends.
      A POST routes `/api/friends`.
      This will be used to handle incoming survey results.
      This route will also be used to handle the compatibility logic.

 *  
 * */
var friendsData = require("../data/friends");
var questions = require("../data/questions");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log(friendsData)
        res.json(friendsData);
    });
    app.get("/api/questions", function (req, res) {
        console.log(questions)
        res.json(questions);
    });
    app.post("/api/friends", function (req, res) {
       var answers = req.body
        if (answers.length < 12) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
    });

};
