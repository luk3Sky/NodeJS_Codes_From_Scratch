/****** comparing (only values) or (values and types)
var a = 20
var b = "20"
console.log(a == b);		// compare only value
console.log(19 === '19');	// compare both value and type
*/


/******** importing functions from <test.js> file ********
var te = require('./notes_2');
te.printAvatar();
*/


/******** work with predefined core modules ********
var fs = require("fs");      // fileSync
var path = require("path");	 // path
var http = require("http");  // http

fs.writeFileSync("new.txt", "Damn!!!!");
console.log(fs.readFileSync("new.txt").toString());
*/


/*********** creating a real-time service running repeatedly using setInterval() function  ***************
setInterval(
	function () {
		// body...
		console.log("Service is running!");
	}

, 2000);
*/

/********** print working directory **********
console.log(__dirname);
console.log(__filename);
*/


/******* Basic server skeleton *******
var http = require('http');

function onReuestServer(request, response) {
	console.log("Made a request from" + request.url);
	response.writeHead(200, {"Context-type": "text/plain"});
	response.write("Here is  your response!");
	response.end();
}

http.createServer(onReuestServer).listen(8888);
console.log("Service started!");


*/

/********* Sample server with 404 error handling *******
var http = require("http");
var fs = require("fs");

// 404 response
function send404Response(response) {
    response.writeHead(404, {"Content-type": "text/plain"});
    response.write("Error 404 - Page was not found!");
    response.end();
}

function onRequestServer(request, response){
    if ( request.method == "GET" && request.url == "/") {
        response.writeHead(200, {"Context-type": "text/html"});
        console.log("request approved!");
        fs.createReadStream("index.html").pipe(response);
    }else {
        send404Response(response);
    }
}

http.createServer(onRequestServer).listen(8888);
console.log("server is now running!");

****/

/********* Sample server with sequenced operations *******
var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next) {
    console.log("First operation");
    next();
}

function doSecond(request, response, next) {
    console.log("Second operation");
    next();
}
app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("server is now running!");

****/
