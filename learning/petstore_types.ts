type ApiResponse = {
    code: number;
    type: string;
    message: string;
    
}
type custom1 {
    attrib1: string;
}
type custom2 {
    attrib2: number;
}
type customUnion = custom1 | custom2;
type customIntersection = custom1 & custom2;

const mycustomValue1: customUnion = {attrib2: 42, attrib1: "Hello"};
const customInterValue: customIntersection = {attrib1: "Hello"};

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
