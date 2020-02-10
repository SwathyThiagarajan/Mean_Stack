let userDetails = [];

let getuserdetails = (userId, ...addressToStore) =>{
	
	let customAddress = {userId:userId, userAddress:addressToStore}
	userDetails.push(customAddress)
	console.log(userDetails);
	return userDetails;
}

let firstAddress = {
	"streetAddress":"Some Street",
	"city":"TamilNadu",
	"state":"TamilNadu",
	"country":"India"
}
let secondAddress = {
	"streetAddress":"Some Street",
	"city":"Chennai",
	"state":"TamilNadu",
	"country":"India"
}

getuserdetails("Swathy1711", firstAddress, secondAddress);
let sum = (x,y,z) =>
{
	return x+y+z;
}

const numbers = [1,2,3];
console.log(sum(...numbers));