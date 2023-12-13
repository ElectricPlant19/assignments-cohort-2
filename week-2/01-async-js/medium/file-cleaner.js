// my    name       is     aditya
// my name is aditya


const fs = require("fs");

let fileContent;
let newContent;

fs.readFile("input.txt", "utf-8", function(err, data) {
	if(err) {
		console.log("Error!");
		return;
	}

	fileContent = data;
	console.log(fileContent);

	newContent = removeSpaces(fileContent);
	console.log(newContent);

	fs.writeFile("input.txt", newContent, function(err) {
		if(err){
			console.log("Error!");
			return;
		} else {
			console.log("Success");
		}

	});
});

console.log(fileContent);

function removeSpaces(inputString) {

let cleanedString = '';
let isSpace = false;

for (let i = 0; i < inputString.length; i++) {
  const currentChar = inputString[i];

  if (currentChar === ' ') {
    if (!isSpace) {
      cleanedString += currentChar;
    }
    isSpace = true;
  } else {
    cleanedString += currentChar;
    isSpace = false;
  }
}

return cleanedString;
}
