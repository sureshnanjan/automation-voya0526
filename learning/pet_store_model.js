// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};
const failure = {code: 200, type: "success", message: "successful operation",notvalid: "This is not a valid attribute"};
console.log(api_success);

const api_failure={code: 400,type: "Failure",Message: " Internal server error"} 
console.log(api_failure);

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};
const Bird_category ={id:4,name: "Bird"};
const Reptiles_category={id:5, name: "Reptiles"}
const OrderStatus={id:100,status: "Available"}

fish_category.name;
fish_category.notexisting; // undefined

const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}
console.log(Angelfish);
const dog = {id: 100,category:dog_category,
name: "Bulldog",
photoUrls:	["Dog1.jpg", "dog2.jpg "],
tags:["pet", "Home"],
status: "available"}
console.log(dog);

const cat = {id: 101,category:cat_category,
name: "Persian",
photoUrls:	["cat1.jpg", "cat2.jpg "],
tags:["pet", "House"],
status: "available"}
console.log(cat);

const order ={
id:100,PetID:1001, quantity:500, shipDate :"Days",
status: "Available"
,OrderStatus : "Success"
}
console.log(order);
