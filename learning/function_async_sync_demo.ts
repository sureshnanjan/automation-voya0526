function addNumbers(inp1, inp2){
    console.log("Adding 2 numbers :" + inp1 +" and " + inp2 )
    return inp1 + inp2
}
// Task Queue
setTimeout(()=>{
    console.log("Doing Things asyncronously")
    console.log(addNumbers(100,200));
},1000)
setTimeout(()=>{
    console.log("Doing  Other Things asyncronously ")
    console.log(addNumbers(5000,2000));
},1000)
setTimeout(()=>{
    console.log("Doig things in Database")
    console.log(addNumbers(5000,2000));
},1000)
const mytimeout = setTimeout(()=>{
    console.log("Sending SMS Confirmation to customer")
    console.log("SENT SMS");
},1000)

//setInterval(()=>{
  //  console.log("Doing a repeated activity every second");
//},1000);
// Micro task Queue
const myPromise = new Promise<{status:string}>((resolve) => {
    console.log("Doing a high priority task");
    resolve({status:"success"});
});
//clearInterval(mytimeout);
const myPromise2 = new Promise<{status:string}>((resolve) => {
    console.log("Doing a high priority task TWO");
    resolve({status:"success for TWO"});
});
//Callback style
// Async Await 
//const myPromise
(async() =>{
    const result = await myPromise;
    console.log("Processed async task ")
    console.log(result);

})();
// Callback style
myPromise2.then(result=>{
    console.log("Handled the result from Promise")
    console.log(result);
});
console.log("Starting")
console.log("Processing")
console.log(addNumbers(10,20))
console.log("Finish")
