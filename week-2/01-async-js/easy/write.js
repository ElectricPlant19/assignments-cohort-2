const fs = require("fs");

let data = "This was wriiten using a program"

fs.writeFile("text.txt", data , function(err) {
	if (err) {
		console.log("There is an error !" + err);
	} else {
		console.log("Data written Successfully");
	}
});


		
