type ApiResponse = {
    code: number;
    type: string;
    message: string;
    
}
type custom1 ={
    attrib1: string;
}
type custom2 ={
    attrib2: number;
}
type customUnion = custom1 | custom2;
type customIntersection = custom1 & custom2;

const mycustomValue1: customUnion = {attrib2: 42, attrib1: "Hello"};
// const customInterValue: customIntersection = {attrib1: "Hello"};

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


 
type User = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
};

const user1: User = {
    id: 1,
    username: "niranjan123",
    firstName: "niranjan",
    lastName: "niranjan",
    email: "niranjan@example.com",
    password: "password123",
    phone: "123-456-7890",
    userStatus: 1
};

console.log("User ID:", user1.id);
console.log("Username:", user1.username);
console.log("First Name:", user1.firstName);
console.log("Last Name:", user1.lastName);
console.log("Email:", user1.email);
console.log("Phone:", user1.phone);
console.log("User Status:", user1.userStatus);



type OrderStatus = "placed" | "approved" | "delivered";

type order = {
    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: OrderStatus;
};


const order1: order = {
    id: 1,
    petId: 101, 
    quantity: 2,
    shipDate: "2024-06-01T10:00:00Z",
    status: "placed"
};

console.log("Order ID:", order1.id);
console.log("Pet ID:", order1.petId);
console.log("Quantity:", order1.quantity);
console.log("Ship Date:", order1.shipDate);
console.log("Order Status:", order1.status);


type tag ={
    id: number;
    name: string;

}

const tag1: tag = {
    id: 1,
    name: "tag1"
}
console.log("Tag ID:", tag1.id);
console.log("Tag Name:", tag1.name);


type category = {
    id: number;
    name: string;
}

const category1: category = {
    id: 1,
    name: "category1"
}
console.log("Category ID:", category1.id);
console.log("Category Name:", category1.name);


type PetStatus = "available" | "pending" | "sold";

type pet = {
    id: number;
    category: category;
    name: string;
    photoUrls: string[];
    tags: string[];
    status: PetStatus;
}


const pet1: pet = {
    id: 1,
    category: category1,    
    name: "Buddy",
    photoUrls: ["photo1.jpg", "photo2.jpg"],
    tags: ["tag1", "tag2"],
    status: "available"
}


function printPetDetails(pet: pet) {
    console.log("Pet ID:", pet.id);
    console.log("Category:", pet.category.name);
    console.log("Pet Name:", pet.name);
    console.log("Pet Status:", pet.status);
    
}

printPetDetails(pet1);


