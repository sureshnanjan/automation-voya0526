import type { ApiResponse } from "./petstore_types.js";
const printHello = function(value) {
    console.log("Hello Anonymous " + value);
}

function NamedHello(value){
    console.log("Hello Named " + value);
}

function doSomeThing() {
    console.log("Doing something...");
}

// Callback
const listofNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
listofNames.forEach(name => console.log(name + " has length " + name.length));
//listofNames.forEach(printHello);
//listofNames.forEach(NamedHello);


function compute(callback:(p1:number,p2:number)=>number){
console.log("Starting computation...");
return callback(p1,p2);
console.log("Computation completed.");
}

//compute(doSomeThing);
//compute(() => console.log("This is an anonymous callback function"));
//compute(function() {
//    console.log("This is another anonymous callback function");
//}); 

function StartswithAorB(name:string){
    return name.startsWith("A") || name.startsWith("B")
}
function filterGT3(name:string){
    return name.length > 3
}
/*
console.log(listofNames.filter(name => name.startsWith("A") || name.startsWith("B")))
console.log(listofNames.filter(name => name.length > 3))
console.log(listofNames.filter(name => name.endsWith("e")))

listofNames.sort()

console.log("USing named functions ")
console.log(listofNames.filter(filterGT3));
console.log(listofNames.filter(StartswithAorB));

listofNames.map() 
// Get a list of numbers doubled
// Get a list of numbers + 2
// Get a list of numbers power2 ^2
*/
const nums = [1,2,3,4,5,6,7,8,9,10]
console.log("Before Copy Within")
console.log(nums)
const result = nums.copyWithin(0,6)

console.log("After Copy Within")
console.log(result)
console.log(nums)
const mapped = nums.map(response => ({
    //...response,
    message: `${response} PROCESSED`,
}));

// {
   // ...response,
  //  message: `${response.message} PROCESSED`,
//})
console.log("After Mapping ")
console.log(nums)
console.log(mapped)

const myObject = {attr1:1, attr2:"Two", attr3:true}
console.log(myObject)
//console.log(...myObject)
const myresponses: ApiResponse[] = [
    { code: 100, type: "Server", message: "Successful operation PROCESSED" },
    { code: 200, type: "success", message: "Operation succeeded PRO" },
    { code: 404, type: "failure", message: "Operation failed" },
    { code: 100, type: "info", message: "Success message" },
    { code: 201, type: "success", message: "Resource created successfully" },
]

//myresponses.filter
//TODO:
// Create a collection of API Response 
// const myresponses:ApiResponse[] = []
// Filter out all the Responses with code 100
myresponses.filter()
// Filter out all the responses with message  "success" case insensitive
myresponses.filter()
// Sort the response collection as per type
myresponses.sort()
// For every response add the string "PROCESSED" to the message attribute
myresponses.at
myresponses.map(element => {
    // take the element id
    // Male aa API CALL TO GET MOTRE DETAILS
    // UPDATE THE DATA BSER RELATED TO THIS ELEMENT
    // SEND SMS 

})
//myresponses.forEach
