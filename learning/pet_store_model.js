// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};
const failure = {code: 200, type: "success", message: "successful operation",notvalid: "This is not a valid attribute"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};

fish_category.name;
fish_category.notexisting; // undefined

const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}
console.log(Angelfish);

const order1 = {id: 100, petId: 1, quantity: 2, shipDate: "2024-06-30T12:00:00.000Z", status: "placed", complete: true};
console.log(order1);
const order2 = {id: 101, petId: 2, quantity: 1, shipDate: "2024-07-01T15:30:00.000Z", status: "approved", complete: false};
console.log(order2);
const order3 = {id: 102, petId: 3, quantity: 3, shipDate: "2024-07-02T10:00:00.000Z", status: "delivered", complete: true};
console.log(order3);

const user1 = {id: 101, username: "dileep_hl", firstName: "Dileep", lastName: "HL", email: "dileep.hl@example.com"};
console.log(user1);

const bird_category = {id:4,name:"bird"};
const parrot = {id: 103, category: bird_category, name: "parrot", photoUrls: ["parrot1.jpg"], tags: ["pet", "avian"], status: "available"};
const crow = {id: 104, category: bird_category, name: "crow", photoUrls: ["crow1.jpg"], tags: ["wild", "avian"], status: "unavailable"};
console.log(parrot);
console.log([crow]);


const tags = [{id: 1, name: "pet"}, {id: 2, name: "aquatic"}, {id: 3, name: "avian"},{id: 4, name: "wild"}, {id: 5, name: "mammal"}];
console.log(tags);