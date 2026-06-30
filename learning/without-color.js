// Load the module
import pkg from "ansi-color"; // CommonJS module
const color = pkg.set; 

// Print the word "Error" to stdout in red
console.log(color("Error", "yellow"));

// Print the word "Error" in red and underlined
console.log(color("Error", "red+blink"));

// Print the word "Success" in bold green, followed by a message
console.log(color("Success", "green+bold"), "This is to demo external Packages");
console.log(color("Only One"));
console.log(color("one","red", "third"));
