// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};
const failure = {code: 200, type: "success", message: "successful operation",notvalid: "This is not a valid attribute"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};

const birds_category = {id:4,name:"birds"};

const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}

const AmazonParrot = {id: 101, category: birds_category, 
    name: "amazon_parrot", photoUrls: ["bird1.jpg", "bird2.jpg"],
     tags: ["pet", "exotic"], status: "available"};
console.log(AmazonParrot);
