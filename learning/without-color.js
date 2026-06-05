// Load the module
var color = require("ansi-color").set;

// Print the word "Error" to stdout in red
console.log(color("Error", "yellow"));

// Print the word "Error" in red and underlined
console.log(color("Error", "red+blink"));

// Print the word "Success" in bold green, followed by a message
console.log(color("Success", "green+bold"), "This is to demo external Packages");
<<<<<<< HEAD
console.log(color("Only One"))
console.log(color("one","red", "third"))
=======

//Print my choice of color
console.log(color("Sayantan", "blue"), "is my name");
>>>>>>> 27c6d7f (Added Sayantan's changes)
