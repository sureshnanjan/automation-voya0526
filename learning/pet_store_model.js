// Petstore API Entities - Programmatic Representation
// Reference: https://petstore.swagger.io/

// ============================================
// API RESPONSE MODELS
// ============================================
console.log("=== API RESPONSE MODELS ===");

const api_success = {code: 200, type: "success", message: "successful operation"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};
const Reptiles_category = {id:4,name:"reptiles"};
const Birds_category = {id:5,name:"birds"};

console.log(fish_category);
console.log(dog_category);
console.log(cat_category);
console.log(Reptiles_category);
console.log(Birds_category);

const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}


const lizard = {id: 101,category	:Reptiles_category,
name: "lizard",
photoUrls:	["lizard1.jpg", "lizard2.jpg    "],
tags:["pet", "reptile"],
status: "available"}

const Turtles = {id: 102,category	:Reptiles_category,
name: "turtles",
photoUrls:	["turtles1.jpg", "turtles2.jpg    "],
tags:["pet", "reptile"],
status: "available"}

const Snakes = {id: 103,category	:Reptiles_category,
name: "snakes",
photoUrls:	["snakes1.jpg", "snakes2.jpg    "],
tags:["pet", "reptile"],
status: "available"}

const Rattlesnake = {id: 104, productId: "RP-SN-01", category: Reptiles_category,
name: "Rattlesnake",
photoUrls: ["rattlesnake1.jpg", "rattlesnake2.jpg"],
tags: ["pet", "reptile"],
status: "available"}

const Iguana = {id: 105, productId: "RP-LI-02", category: Reptiles_category,
name: "Iguana",
photoUrls: ["iguana1.jpg", "iguana2.jpg"],
tags: ["pet", "reptile"],
status: "available"}


console.log(Snakes);
console.log(Rattlesnake);
console.log(Iguana);