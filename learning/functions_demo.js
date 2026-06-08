// Collection of Functionality

const firstnumbers = 100;
const secondnumbers = 200;
// Inpiuts , output 
function displayHomePage(){
    showHeader();
    showFooter();
    showContent();
    buyPet();
}

// Inputs - Process - Output
function addTwoNumbers(num1, num2){
    const result = num1 + num2;
    // process strings
    // process numbers
    // do something on a collection 
    return result;
}

function customSort(array){
    return array.sort((a, b) => b.charAt(2).localeCompare(a.charAt(2)));
}

const name = "John Doe";
const age = 30;


const user = {fname: "john" ,lname:"Doe", age: 30, email: "john.doe@example.com"};
function getNameofUser(user){
    // Capitalise the first letter of the name
    user.name = user.fname.charAt(0).toUpperCase() + user.fname.slice(1) + " " + user.lname.charAt(0).toUpperCase() + user.lname.slice(1);  
    return user.name;
}

// Function declaration 
// Use - Invoke

console.log(getNameofUser(user));

const marks = [85, 90, 78, 92, 88];
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
marks.sort();
console.log(marks);
marks.sort((a, b) => b - a); // Ascending order
console.log(marks);
console.log(names.sort())
console.log(names.sort((a, b) => b.localeCompare(a)))
console.log(names.sort((a, b) => a.charAt(1).localeCompare(b.charAt(1))))
console.log(addTwoNumbers(10, 20));
console.log(addTwoNumbers("Hello ", "World!"));
console.log(addTwoNumbers(10,20,30));
console.log(customSort(names));
console.log(customSort(marks)); // Strongly Types Langge // Weakly types
// Static typing vs Dynamic typing

const sample = {attr1: "value1", attr2: "value2", attr3: "value3"};
const sample2 = {attr1: "value1", attr2: "value2", attr3: "value3", attr4: 
    "value4"};
// Java c# - string sample = "This is a string";
//  

let sample3 = "This is a string";
sample3 = 100; // Dynamic typing
sample3 = {key: "value"}; // Dynamic typing
function display4(input){
    console.log("This is display 4" + input.attr4);
}


display4(sample2);
display4(sample);

