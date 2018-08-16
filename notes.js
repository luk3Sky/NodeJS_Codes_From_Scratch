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