// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};
const reptile_category = {id:4,name:"reptile"};
const bird_category = {id:5,name:"bird"};

const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}

const Golden_Retriever = {id: 101,category	:dog_category,
name: "golden_retriever",
photoUrls:	["dog1.jpg", "dog2.jpg    "],
tags:["pet", "mammal"],
status: "available"}        
console.log(Golden_Retriever);

const Persian_Cat = {id: 102,category	:cat_category,
name: "persian_cat",
photoUrls:	["cat1.jpg", "cat2.jpg    "],
tags:["pet", "mammal"],
status: "available"}
console.log(Persian_Cat);

const Rattlesnake = {id: 103,category	:reptile_category,
name: "rattlesnake",
photoUrls:	["snake1.jpg", "snake2.jpg    "],
tags:["pet", "reptile"],
status: "available"}
console.log(Rattlesnake);      

const Amazon_Parrot = {id: 104,category	:bird_category,
name: "amazon_parrot",
photoUrls:	["parrot1.jpg", "parrot2.jpg    "],
tags:["pet", "bird"],
status: "available"}
console.log(Amazon_Parrot);
