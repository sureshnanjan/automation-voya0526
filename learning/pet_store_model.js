// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};

const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}

const Bulldog = {id: 300,category	:dog_category,name: "bull_dog",photoUrls:	["dog1.jpg", "dog2.jpg    "],tags:["pet", "aquatic"],status: "available"}

const dogorder = {
    id:300,
    petId: 2,
    shipdate: "06/03/2026-12:30:30",
    status: "placed",
    complete : true
}

console.log(dogorder);