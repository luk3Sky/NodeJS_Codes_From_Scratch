// let testArray = [122,'aaa', 'asdasd',null,125515.16156153131]

// ******** code exporting functions directly inside module.exports as a better practice ********
// Module will become common among all the instances that imports this file
module.exports = {
	printAvatar: function(argument) {
		// body...
		console.log("AVATAR!")
	}
};

function print() {
	// body...
	console.log("HELLO!")
}

// print();
print("Kamal", 12);