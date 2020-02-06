var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var name = request.query.name;
	var des = request.query.description;
	var newf = {"name":name, "description":des, "imageURL": "http://lorempixel.com/400/400/people"};
	console.log(newf);
	data.friends.push(newf);
	response.render('index',data);
}