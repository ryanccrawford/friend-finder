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
var questCnt = questions.length;
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
        console.log(answers)
        if (answers) {
            var lowestScoringFriend
            var lastScore
            var answersScore = convertObj2Array(answers)
            for (let ii = 0; ii < friendsData.length; ii++) {
                console.log(friendsData[ii])

                var points = totalDifference(friendsData[ii].scores, answersScore)
                console.log("Points: "+points)
                if (lastScore) {
                    if (lastScore > points) {
                        lowestScoringFriend = friendsData[ii]
                    }
                } else { 
                    lowestScoringFriend = friendsData[ii]
                }
                console.log(lowestScoringFriend)
                lastScore = points
               
            }
            res.json(lowestScoringFriend);
        } else {
            res.json(false);
        }
    });

};
function totalDifference(arrayA, arrayB) {
    console.log(arrayA)
    console.log(arrayB)
    var iterations = arrayA.length
    var totals = 0
    for (let i = 0; i < iterations; i++){
        console.log(arrayB[i])
     totals += Math.abs(parseInt(arrayA[i]) - parseInt(arrayB[i]))
    }
    return totals
}
function convertObj2Array(answers) {
    var values = Object.values(answers)
    console.log(values)
    var returnArray = []
    for (let jj = 2; jj < values.length; jj++){
        
            returnArray.push(parseInt(values[jj]))
    }
    return returnArray

}