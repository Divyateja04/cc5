<<<<<<< HEAD
=======
var date = new Date;
var time = date.getHours();

function welcome() {
	if (time < 12) {
		message = "A Very Warm Good Morning"
	}else if (time > 12 && time < 4) {
		message = "A Very Warm Good After Noon"
	}else{
		message = "A Very Warm Good Evening"
	}
	document.getElementById("Welcomegreet").createTextNode(message);	

}
welcome();
>>>>>>> 11962f41994ecdce37d3b98e7ac1443fe92fb1b3
