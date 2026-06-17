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

interface Category {
    id: number;
    name: string;
}

interface Tag {
    id: number;
    name: string;
}

type Pet = {
    name: string;
    id: number;
    category?: Category;
    photoUrls?: string[];
    tags?: Tag[];
    status?: string;
}

interface Order {
    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: string;
    complete: boolean;
}

interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
}

const examplePet: Pet = {
    id: 1,
    category: { id: 1, name: "Dogs" },
    name: "doggie",
    photoUrls: ["https://example.com/photo1.jpg"],
    tags: [{ id: 1, name: "friendly" }],
    status: "available"
};

const exampleOrder: Order = {
    id: 1,
    petId: 1,
    quantity: 2,
    shipDate: new Date().toISOString(),
    status: "placed",
    complete: false
};

const exampleUser: User = {
    id: 1,
    username: "johnDoe",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "password123",
    phone: "1234567890",
    userStatus: 1
};

console.log(examplePet);
console.log(exampleOrder);
console.log(exampleUser);
