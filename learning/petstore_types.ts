/**
 * Defines the structure for API responses, including success and failure cases.
 * code represents the HTTP status code
 * Reason is the message
 * type represents the type of the response.
 */
export type ApiResponse = {
    code: number;
    type: string;
    message: string;
    
}

export type custom1 ={
    attrib1: string;
}
type custom2 = {
    attrib2: number;
}
type customUnion = custom1 | custom2;
type customIntersection = custom1 & custom2;

const mycustomValue1: customUnion = {attrib2: 42, attrib1: "Hello"};
//const customInterValue: customIntersection = {attrib1: "Hello"};

type myType = string | number | boolean| {myattrib: string};
 
 // Type Composition

 const myvalue: myType = "Hello, World!";
 const mynumber: myType = 42;
 const myboolean: myType = true;
 const mywrong: myType = {myattrib: "value"};
 const mywrong2: myType = {myattrib: "another value"};

const myname: string = "John Doe";

 const tsresponse_success: ApiResponse = {code: 200, type: "success", message: "successful operation"};
 const tsresponse_failure: ApiResponse = {code: 400, type: "failure", message: "operation failed"};
 console.log(tsresponse_success)

 type Pet =  {
    name:string
    id:number
 }

function comparePetsasperName(param1:Pet, param2:Pet):number{
    // This should compare param1 and 2
    if (param1.name === param2.name)
        return 0;
    else{
        if (param1.name > param2.name)
            return 1;
        else
            return -1;
    }

}
const val = 10;
//Number

const mypets:Pet[] = [{name:"dog",id:1},{name:"cat",id:2},{name:"reptile",id:3}]
console.log(mypets)
console.log("After Sorting by Name")
console.log(mypets.sort(comparePetsasperName))
console.log("After Sorting by ID")
console.log(mypets.sort( (param1,param2) => {return param1.id - param2.id}));
console.log("After Sorting by ID Descending")
console.log(mypets.sort( (param1,param2) => {return param2.id - param1.id}));

//const compareFn: string | number = "100"
const mystring:string = ""
const mynum:number = 100

let numorstr: string|number = 100
numorstr = ""
numorstr = {}

function numberCompare(p1:number,p2:number):number{
    return 0;
}

let compareFn: ((suresh1:number,suresh2:number)=>number) | undefined = undefined
compareFn = (param1:number,param2:number) => {return param2 - param1} 
compareFn = numberCompare
//compareFn = comparePetsasperName

const nums = [1,2,3]
const result = nums.copyWithin(2,1,2)
console.log(result)

//TODO:
// Create a collection of API Response 
<<<<<<< HEAD
const myresponses:ApiResponse[] = []
=======
const myresponses:ApiResponse[] = [
    {code: 200, type: "success", message: "Operation completed successfully"},
    {code: 100, type: "info", message: "Request received"},
    {code: 400, type: "error", message: "Bad request"},
    {code: 100, type: "warning", message: "Deprecated endpoint"},
    {code: 200, type: "success", message: "Data retrieved successfully"}
]

>>>>>>> c29f344 (pet store changes updated)
// Filter out all the Responses with code 100
const filteredByCode = myresponses.filter(response => response.code !== 100)

// Filter out all the responses with message  "success" case insensitive
const filteredBySuccess = myresponses.filter(response => !response.message.toLowerCase().includes("success"))

// Sort the response collection as per type
const sortedByType = myresponses.sort((a, b) => a.type.localeCompare(b.type))

// For every response add the string "PROCESSED" to the message attribute
const processedResponses = myresponses.map(response => ({
    ...response,
    message: response.message + " - PROCESSED"
}))

const sample:ApiResponse = {code:100,type:"Server",message:"Successfly Created: PROCESSED"}

function addCookies(param:{}[]){
    //doSomething
}

addCookies([{},{}])


