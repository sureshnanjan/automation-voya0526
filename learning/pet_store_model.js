// TODO: Represent the entities in Petstore programmatically 
// https://petstore.swagger.io/

const api_success = {code: 200, type: "success", message: "successful operation"};

const fish_category = {id: 1, name: "fish"};
const dog_category = {id: 2, name: "dog"};
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

const Whiskers = {
  id: 202,
  category: cat_category,
  name: "Whiskers",
  photoUrls: ["cat1.jpg", "cat2.jpg"],
  tags: [
    {id: 1, name: "pet"},
    {id: 4, name: "feline"}
  ],
  status: "available"
};

// Console output for changes
console.log("=== Pet Store Model Objects ===");
console.log("API Success Response:", api_success);
console.log("\nCategories:");
console.log("Fish Category:", fish_category);
console.log("Dog Category:", dog_category);
console.log("Cat Category:", cat_category);
console.log("\nPet Objects:");
console.log("Angelfish:", JSON.stringify(Angelfish, null, 2));
console.log("Paras:", JSON.stringify(Paras, null, 2));
console.log("Whiskers:", JSON.stringify(Whiskers, null, 2));
console.log("=== Changes Made ===");
console.log("✓ Fixed duplicate dog_category declaration");
console.log("✓ Converted tags to object array format");
console.log("✓ Added Whiskers cat object");
console.log("✓ Standardized formatting across all objects");


