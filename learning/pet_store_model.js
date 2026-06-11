// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/
 
const api_success = {code: 200, type: "success", message: "successful operation"};
 
const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};
const bird_category = {id:4,name:"bird"};
const reptile_category = {id:5,name:"reptile"};
 
 
 
const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}
 
console.log(Angelfish);
 
const  Finch = {id: 101,category	:bird_category,
name: "finch",
photoUrls:	["bird1.jpg", "bird2.jpg    "],
tags:["pet", "flying"],
status: "available"}
 
console.log(Finch);
 
const  Iguana = {id: 102,category	:reptile_category,
name: "iguana",
photoUrls:	["reptile1.jpg", "reptile2.jpg    "],
tags:["pet", "scaly"],
status: "available"}
console.log(Iguana);