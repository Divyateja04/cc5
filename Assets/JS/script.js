var date = new Date;
var time = date.getHours();
console.log(time);
msg =document.getElementById("welcomegreet");
welcome();
function welcome() {
	if (time < 12) {
		message = "A Very Warm Good Morning !"
	}else if (time > 12 && time < 16) {
		message = "A Very Warm Good After Noon !"
	}else if(time > 16){
		message = "A Very Warm Good Evening !"
	}
	msg.textContent = message;
}

//setInterval(timer("Dec 1 ,2018 00:00:00","event1"),1000);
setInterval(timer("Jun 10,2018 00:00:00","event1"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event2"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event3"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event4"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event5"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event6"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event7"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event8"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event9"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event10"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event11"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss
setInterval(timer("Jun 10,2018 00:00:00","event12"),1000);//Change with date as shown above FORMAT- Month Date,Year hh:mm:ss



function timer(given,id){
	var tilltime = new Date(given).getTime();
	var now = new Date().getTime();
	var distance = tilltime - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 	console.log(days + "Days " + hours + "Hours " + minutes + "Minutes ");
 	document.getElementById(id).textContent = "Event Begins in " + days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + "  Seconds " ;
}
