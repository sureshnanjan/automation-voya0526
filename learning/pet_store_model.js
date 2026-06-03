// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};
const reptiles_category = {id:4,name:"reptiles"};
const birds_category = {id:5,name:"birds"};
console.log(fish_category);
console.log(dog_category);
console.log(cat_category);
console.log(reptiles_category);
console.log(birds_category);

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