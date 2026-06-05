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


function compute(callback){
console.log("Starting computation...");
callback();
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

console.log(listofNames.filter(name => name.startsWith("A") || name.startsWith("B")))
console.log(listofNames.filter(name => name.length > 3))
console.log(listofNames.filter(name => name.endsWith("e")))

console.log("USing named functions ")
console.log(listofNames.filter(filterGT3));
console.log(listofNames.filter(StartswithAorB));

listofNames.map() 
// Get a list of numbers doubled
// Get a list of numbers + 2
// Get a list of numbers power2 ^2
