// Load the module
//var color = require("ansi-color").set; // commonJS 
import {color} from "ansi-color"; // ESModule
//var colorval = color.set; 

// Print the word "Error" to stdout in red
console.log(color("Error", "yellow"));

// Print the word "Error" in red and underlined
console.log(color("Error", "red+blink"));

// Print the word "Success" in bold green, followed by a message
console.log(color("Success", "green+bold"), "This is to demo external Packages");

console.log(color("niranjan", "green"));
