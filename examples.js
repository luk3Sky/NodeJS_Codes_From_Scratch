//comparing (only values) or (values and types)
var a = 20
var b = "20"

console.log(a == b);		//true
console.log(19 === '19');	//false

// ******** importing functions from test.js ********
var te = require('./test')

// ******** code exporting functions directly inside module.exports as a better practice ********
// Module will become common
module.exports = {
	printAvatar: function(argument) {
		// body...
		console.log("AVATAR!")
	}
};

