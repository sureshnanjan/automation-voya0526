// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};

const fish_category = {id:1,name:"fish"};
const dog_category = {id:2,name:"dog"};
const cat_category = {id:3,name:"cat"};

const Angelfish = {
  id: 100,
  category: fish_category,
  name: "angel_fish",
  photoUrls: ["fish1.jpg", "fish2.jpg"],
  tags: ["pet", "aquatic"],
  status: "available"
};

const Cat = {
  id: 101,
  category: cat_category,
  name: "persian_cat",
  photoUrls: ["cat1.jpg", "cat2.jpg"],
  tags: ["pet", "feline"],
  status: "available"
};

const Dog = {
  id: 102,
  category: dog_category,
    name: "bulldog",
    photoUrls: ["dog1.jpg", "dog2.jpg"],
    tags: ["pet", "canine"],
    status: "available"
};

console.log(Dog);
console.log(Cat);
console.log(Angelfish);
