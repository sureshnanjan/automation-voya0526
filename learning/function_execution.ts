function doSomeThing(){
    console.log("Inside Function")
    console.log("Inside Function - Task 1")
    console.log("Inside Function - Task 2")
}
// asynchronous execution - Non Blocking Operation TAls MICRO TASK 
setTimeout(()=>console.log("I am long running Task"),1000);
setTimeout(doSomeThing) // Task Queue
//set
const myPriorityTask = new Promise((resolve)=>{
    resolve("I have done a high Priority Task")
}).then((result)=>{console.log("I have got the result")
    console.log(result)
}) // Microtask Queue
const myPriorityTask2 = new Promise((resolve,reject)=>{
    const random = 0.5
    if(random < 1){
        resolve({result:"OK", data: {val1:"", val2:100, Val3:true}})
    }
    else {
        reject({error:"Fatal", reason:"Network"})
    }

})
/*
myPriorityTask2.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
*/
async function MyExecution(){
    try{
   const result = await myPriorityTask2;
   console.log(result)
    }catch{
        console.log("Somethings fatal happened")
    }
}

// Synchronous execution - Blocking Operation
console.log("Starting")
console.log("Processing")
doSomeThing();
MyExecution();
console.log("Finishing")



// Provess messahe 

// Synchronous - Blocking calculation
function calculateSum(numbers: number[]): number {
    console.log("Starting calculation...");
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    console.log("Calculation complete");
    return sum;
}

const result = calculateSum([1, 2, 3, 4, 5]);
console.log("Sum:", result); // Waits for function to complete before proceeding

// Asynchronous - Using Promise.all with multiple async operations
async function fetchMultipleData() {
    try {
        const promise1 = new Promise((resolve) => {
            setTimeout(() => resolve("Data from API 1"), 1000);
        });
        
        const promise2 = new Promise((resolve) => {
            setTimeout(() => resolve("Data from API 2"), 1500);
        });
        
        const [result1, result2] = await Promise.all([promise1, promise2]);
        console.log("All data fetched:", result1, result2);
        return [result1, result2];
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Non-blocking - continues execution while waiting
fetchMultipleData();
console.log("Request sent, continuing with other tasks...");