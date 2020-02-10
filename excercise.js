/* var itemsPurchased = window.prompt("Please tell us the number of items purchased");

if(itemsPurchased > 3){
	alert("You have got a promo code");

}
else{
	alert("! You are not eligible for a promo code");
} */

/*var isTopper = false;

var marksObtained = window.prompt("Please Enter the mark obtained");

if(marksObtained == undefined || marksObtained == null || marksObtained == " ")
{
  alert("Invalid input");
}
else if(marksObtained < 0 || marksObtained >100){
	alert("Enter the marks between 0 and 100");
}
else
{
	var totalMarks = 100;
	marksObtained = Number(marksObtained);
	var marksInPercent = (marksObtained / totalMarks) * 100;


	/* if(marksInPercent > 90)
	{
		isTopper = true;
	}
	else
	{
		isTopper = false;
	}
	alert(isTopper);*/ 
	/*isTopper = (marksInPercent > 90) ? true : false;
}*/


//functions in JS


var generateEmail = function(name, message){
	var email = "Hi " + name+"\n" +"This is the Message for you " + message;
	return email;
}

var emailrespond = generateEmail("Swathy", "Welcome to edwisor.com");
alert(emailrespond);




