/*
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
// Sync
function myfunc():string{
    return "100"
}
*/
// Synchronous
function add2Nums(p1:number,p2:number){
    
    return p1+p2;
}
async function(){
    await 
}
const promiseRetunsString = new Promise<string>(resolve=>{
        resolve("You are suresh doing automation")
});
const promisReturnNumber = new Promise<number>(resolve=>{
    resolve(1)
})
const promiseReturnCustom = new Promise<{status:string,code?:number}>(resolve=>{
    resolve({status:"OK",code:1});
});

const result = add2Nums(100,200)
const myPromise100 = promiseRetunsString;
const promiseNumberResult = promisReturnNumber;

function processResult(result){
    console.log("This is the result I have from Promise")
    console.log(result)
}
// Handling Promises in Callback 
console.log(result);
//myPromise100.then(result=>{
//});
//promiseNumberResult.then(processResult)
// Async Await 
(async() =>{
    const result100 = await myPromise100;
    const result1 = await promiseNumberResult
    console.log(result100)
    console.log(result1)
})();




