// Load the module
import pkg from "ansi-color";
const { set } = pkg;

// Print the word "Error" to stdout in red
console.log(set("Error", "yellow"));

// Print the word "Error" in red and underlined
console.log(set("Error", "red+blink"));

// Print the word "Success" in bold green, followed by a message
console.log(set("Success", "green+bold"), "This is to demo external Packages");


// Print the word "Dileep" in bold yellow, followed by a message
console.log(set("Dileep", "yellow+bold"), "This is the code added by Dileep");