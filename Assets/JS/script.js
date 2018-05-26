var date = new Date;
var time = date.getHours();
msg =document.getElementById("welcomegreet");
welcome();
function welcome() {
	if (time < 12) {
		message = "A Very Warm Good Morning !"
	}else if (time > 12 && time < 4) {
		message = "A Very Warm Good After Noon !"
	}else{
		message = "A Very Warm Good Evening !"
	}
	msg.textContent = message;
	welcome();
}
