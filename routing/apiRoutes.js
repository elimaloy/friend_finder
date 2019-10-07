var friendsList = require("../data/friends");

module.exports = function(app){
	app.get("api/friends", function(req, res){
		res.json(friendsList);
	})


app.post("/api/friends", function(req, res) {
	var newFriend = req.body;
	var newScore = 0;
	var total = 0;
	var match = {
		name: "",
		difference: 10000
	}

	
	for (var i = 0; i < friendsList.length; i++) {
		total = 0;

		for (var j = 0; j < friendsList[i].preferences.length; j++) {
			total += Math.abs(friendsList[i].preferences[j] - newFriend.preferences[j]);

			if (total <= match.difference) {
				match.name = friendsList[i].name,
				match.difference = total
			}
    	}
    }
    friendsList.push(newFriend);
    res.json(match);
    console.log(match);
});
}