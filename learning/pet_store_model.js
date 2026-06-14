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
