// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};
const reptiles_category = {id:4,name:"reptiles"};
const birds_category = {id:5,name:"birds"};
console.log(fish_category, dog_category, cat_category, reptiles_category, birds_category);

const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}

console.log(Angelfish);

const Rattlesnake = {id: 100,category	:reptiles_category,
name: "rattlesnake",
photoUrls:	["reptile1.jpg", "reptile2.jpg    "],
tags:["pet", "reptile"],
status: "available"}

console.log(Rattlesnake);

const Finch = {id: 100,category	:birds_category,
name: "finch",
photoUrls:	["bird1.jpg", "bird2.jpg    "],
tags:["pet", "bird"],
status: "available"}

console.log(Finch);

const tag = {
    id: 18,
    name: "pet"
};
console.log(tag);   


const  order={
  id:18,
   petId: 10,
   quantity: 3,
   shipDate: "",
   status: "placed",
   complete: false 
}
console.log(order);

const user_18={id: 18,
     firstName: "user", 
     lastName: "18",
    email:"user18@example.com",
    password: "password123",
    phone: "123-456-7890",
    userStatus: 400,
}
console.log(user_18);