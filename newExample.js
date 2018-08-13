// initiate a service consists of multi operations
function placeAnOrder(order_no) {
	console.log("Order placed :" + String(order_no));
	
	cookAndDeliver(function (){
		console.log("Delivered food order no:", order_no);
	});
}

// an example time delaying operation 
// callback function is related to the function that we give in the argument of the main cookAndDeliver() function
// That means callback function will be executed after the completion of the timeout. 
function cookAndDeliver(callback) {
	setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);