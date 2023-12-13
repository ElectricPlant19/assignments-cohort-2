let c = 0;

function counter() {
	console.log(c);
	c = c + 1;
}

while (c != 100) {
	setInterval(counter, 1000);
}


