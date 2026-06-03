// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};
const reptiles_category = {id:4,name:"reptiles"};
const birds_category = {id:5,name:"birds"};

const Angelfish = {id: 100,category	:fish_category,
name: "angel_fish",
photoUrls:	["fish1.jpg", "fish2.jpg    "],
tags:["pet", "aquatic"],
status: "available"}
console.log(Angelfish);

const GoldenRetriever = {id: 100,category	:dog_category,
name: "golden_retriever",
photoUrls:	["dog1.jpg", "dog2.jpg    "],
tags:["pet", "loyal"],
status: "available"}
console.log(GoldenRetriever);

const Rattlesnake = {id: 101,category	:reptiles_category,
name: "rattlesnake",
photoUrls:	["rattlesnake1.jpg", "rattlesnake2.jpg    "],
tags:["pet", "venomous"],
status: "available"}
console.log(Rattlesnake);

const PersianCat = {id: 102,category	:cat_category,
name: "persian_cat",
photoUrls:	["cat1.jpg", "cat2.jpg    "],
tags:["pet", "fluffy"],
status: "available"}
console.log(PersianCat);

const AmazonParrot = {id: 102,category	:birds_category,
name: "parrot",
photoUrls:	["bird1.jpg", "bird2.jpg    "],
tags:["pet", "flying"],
status: "available"}
console.log(AmazonParrot);

const Order = {
	id: 5001,
	petId: 100,
	quantity: 2,
	shipDate: new Date().toISOString(),
	status: "placed",
	complete: false
}
console.log(Order);