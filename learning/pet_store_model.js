// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};
const failure = {code: 200, type: "success", message: "successful operation",notvalid: "This is not a valid attribute"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};
const reptile_category = {id:4,name:"Reptiles"};
const bird_category = {id:5,name:"Birds"};


const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}

const GoldenRetriever = {id: 101,category	:dog_category,
name: "golden_retriever",
photoUrls:	["dog1.jpg", "dog2.jpg    "],
tags:["pet", "Great Family Dog"],
status: "available"}

const PersianCat = {id: 102,category	:cat_category,
name: "persian_cat",
photoUrls:	["cat1.jpg", "cat2.jpg    "],
tags:["pet", "Friendly house cat"],
status: "available"}

const Iguna = {id: 103,category	:reptile_category,
name: "iguana",
photoUrls:	["reptile1.jpg", "reptile2.jpg    "],
tags:["pet", "Green friendly "],
status: "available"}                        

const AmazonParrot = {id: 104,category	:bird_category,
name: "Amazon Parrot",
photoUrls:	["bird1.jpg", "bird2.jpg    "],
tags:["pet", "Great companion for up to 75 years"],
status: "available"}            

console.log(AmazonParrot);
console.log(Iguna);
console.log(PersianCat);
console.log(GoldenRetriever);
console.log(Angelfish); 
