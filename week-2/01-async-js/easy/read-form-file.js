const fs = require("fs");

fs.readFile("text.txt", "utf-8", function(err, data) {
	console.log(data);
});

let a = 0;
for (let i = 0; i < 10000000000; i++) {
	 a = a + i;
}

console.log(a);

