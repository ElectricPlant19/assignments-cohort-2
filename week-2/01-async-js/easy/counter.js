let a = 0; 

function counter (){
	console.log(a);
	a++;
} 

function count(){ 
	counter();
	setInterval(counter, 1000);
}
