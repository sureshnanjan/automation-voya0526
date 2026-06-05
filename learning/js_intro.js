// something caled title // 
// subtitle
// list_of_examples
// number_of_examples
// is_there_errors
// error_list
// var , let, const
// var - function scope, can be re-declared and updated
// let - block scope, cannot be re-declared but can be updated
// const - block scope, cannot be re-declared and cannot be updated
// string , number , boolean, null, undefined, symbol
const title = "Welcome to the-internet";
let subtitle = "Available Examples";
const number_of_examples = 44; // integer or float
const is_there_errors = false;
const available_examples = [
  "A/B Testing",
  "Add/Remove Elements"]
console.log(title);
console.log(typeof title);
console.log(subtitle);
console.log(typeof subtitle);
console.log("Number of examples: ", number_of_examples);
console.log("Type of number_of_examples: ", typeof number_of_examples);
console.log("Is there errors? ", is_there_errors);
console.log("Type of is_there_errors: ", typeof is_there_errors);
console.log("Available examples: ", available_examples);
console.log("Type of available_examples: ", typeof available_examples);


// Info needed to hold details of participnats
// name, age, email, is_registered, courses_enrolled
const john = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  is_registered: true,
  courses_enrolled: ["JavaScript Fundamentals", "Advanced CSS"]
};

const suresh = {
    name: "Suresh", 
    age: 25,
    email: "email.com",
    is_registered: true,
    courses_enrolled: ["JavaScript Fundamentals", "Advanced CSS"]   
};

const top_banner = {color:"green", fontSize: "24px", text: "Fork me on GitHub", position: "top-right"};
const bottom_banner = {color:"blue", fontSize: "20px", text: "Contact us for more info", position: "bottom-left"};

const banner_color = "green"
const banner_font_size = "24px"
const banner_text = "Fork me on GitHub"
const banner_position = "top-right"
banner.color;
banner['color']

const partipant_list = [];
const participant = {}
console.log(john);
console.log("Participant Type:", typeof john);

console.log(banner.color);
console.log(banner['color']);

// let var const
for (const index = 0; index < array.length; index++) {
    const element = array[index];
    
}
const max_items = 100;
let shopping_cart_items_count = 0;  //let  // var do not use
const valueisfixed = 10; 
shopping_cart_items_count = 5;
console.log("Max items allowed in cart: ", max_items);
console.log("Current items in cart: ", shopping_cart_items_count);
console.log("Value is fixed: ", valueisfixed);
