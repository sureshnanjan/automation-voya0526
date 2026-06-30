// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};
const failure = {code: 200, type: "success", message: "successful operation",notvalid: "This is not a valid attribute"};

const fish_category = {id: 1, name: "fish"};
const cat_category = {id: 3, name: "cat"};

const Angelfish = {
  id: 100,
  category: fish_category,
  name: "angel_fish",
  photoUrls: ["fish1.jpg", "fish2.jpg"],
  tags: [
    {id: 1, name: "pet"},
    {id: 2, name: "aquatic"}
  ],
  status: "available"
};

const dog_category = {id: 201, name: "dog"};
const Paras = {
  id: 201,
  category: dog_category,
  name: "Paras",
  photoUrls: ["dog1.jpg", "dog2.jpg"],
  tags: [
    {id: 1, name: "pet"},
    {id: 3, name: "domestic"}
  ],
  status: "available"
};

const bird_category = {id: 301, name: "bird"};
const parrot={
    id: 301,
    category: bird_category,
    name: "Parrot",
    photoUrls: ["bird1.jpg", "bird2.jpg"],
    tags: [
        {id: 1, name: "pet"},
        {id: 5, name: "exotic"}
    ],
    status: "available"
};
console.log("Paras:", Paras);
console.log("Parrot:", parrot);
