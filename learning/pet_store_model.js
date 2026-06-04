// Petstore API Entities - Programmatic Representation
// Reference: https://petstore.swagger.io/

// ============================================
// API RESPONSE MODELS
// ============================================
console.log("=== API RESPONSE MODELS ===");
// Petstore API Entities - Programmatic Representation
// Reference: https://petstore.swagger.io/

// ============================================
// API RESPONSE MODELS
// ============================================
console.log("=== API RESPONSE MODELS ===");

const api_success = {code: 200, type: "success", message: "successful operation"};
console.log("API Success Response:", api_success);

const api_error = {code: 400, type: "error", message: "Invalid input"};
console.log("API Error Response:", api_error);

const api_not_found = {code: 404, type: "error", message: "Pet not found"};
console.log("API Not Found Response:", api_not_found);

// ============================================
// CATEGORY MODELS
// ============================================
console.log("\n=== CATEGORY MODELS ===");

const fish_category = {id: 1, name: "fish"};
const dog_category = {id: 2, name: "dog"};
const cat_category = {id: 3, name: "cat"};
const bird_category = {id: 4, name: "bird"};
const reptile_category = {id: 5, name: "reptile"};

console.log("Fish Category:", fish_category);
console.log("Dog Category:", dog_category);
console.log("Cat Category:", cat_category);
console.log("Bird Category:", bird_category);
console.log("Reptile Category:", reptile_category);

const all_categories = [fish_category, dog_category, cat_category, bird_category, reptile_category];
console.log("All Categories:", all_categories);

// ============================================
// TAG MODELS
// ============================================
console.log("\n=== TAG MODELS ===");

const pet_tag = {id: 1, name: "pet"};
const aquatic_tag = {id: 2, name: "aquatic"};
const friendly_tag = {id: 3, name: "friendly"};
const rare_tag = {id: 4, name: "rare"};
const endangered_tag = {id: 5, name: "endangered"};

console.log("Pet Tag:", pet_tag);
console.log("Aquatic Tag:", aquatic_tag);
console.log("Friendly Tag:", friendly_tag);
console.log("Rare Tag:", rare_tag);
console.log("Endangered Tag:", endangered_tag);

const all_tags = [pet_tag, aquatic_tag, friendly_tag, rare_tag, endangered_tag];
console.log("All Tags:", all_tags);

// ============================================
// PET MODELS
// ============================================
console.log("\n=== PET MODELS ===");

const Angelfish = {id: 100, category: fish_category, name: "angel_fish", photoUrls: ["fish1.jpg", "fish2.jpg"], tags: [pet_tag, aquatic_tag], status: "available"};
console.log("Angel Fish Pet:", Angelfish);

const Goldfish = {id: 101, category: fish_category, name: "goldfish", photoUrls: ["goldfish1.jpg", "goldfish2.jpg"], tags: [pet_tag, aquatic_tag], status: "available"};
console.log("Goldfish Pet:", Goldfish);

const Bulldog = {id: 102, category: dog_category, name: "bulldog", photoUrls: ["bulldog1.jpg", "bulldog2.jpg"], tags: [pet_tag, friendly_tag], status: "available"};
console.log("Bulldog Pet:", Bulldog);

const GoldenRetriever = {id: 103, category: dog_category, name: "golden_retriever", photoUrls: ["retriever1.jpg", "retriever2.jpg"], tags: [pet_tag, friendly_tag], status: "available"};
console.log("Golden Retriever Pet:", GoldenRetriever);

const Labrador = {id: 104, category: dog_category, name: "labrador", photoUrls: ["lab1.jpg", "lab2.jpg"], tags: [pet_tag, friendly_tag], status: "pending"};
console.log("Labrador Pet:", Labrador);

const PersianCat = {id: 105, category: cat_category, name: "persian_cat", photoUrls: ["persian1.jpg", "persian2.jpg"], tags: [pet_tag, friendly_tag], status: "available"};
console.log("Persian Cat Pet:", PersianCat);

const Siamese = {id: 106, category: cat_category, name: "siamese", photoUrls: ["siamese1.jpg", "siamese2.jpg"], tags: [pet_tag, rare_tag], status: "sold"};
console.log("Siamese Cat Pet:", Siamese);

const Parrot = {id: 107, category: bird_category, name: "parrot", photoUrls: ["parrot1.jpg", "parrot2.jpg"], tags: [pet_tag, friendly_tag], status: "available"};
console.log("Parrot Pet:", Parrot);

const PythonSnake = {id: 108, category: reptile_category, name: "python", photoUrls: ["python1.jpg", "python2.jpg"], tags: [pet_tag, rare_tag, endangered_tag], status: "available"};
console.log("Python Snake Pet:", PythonSnake);

const all_pets = [Angelfish, Goldfish, Bulldog, GoldenRetriever, Labrador, PersianCat, Siamese, Parrot, PythonSnake];
console.log("All Pets:", all_pets);

// ============================================
// ORDER MODELS
// ============================================
console.log("\n=== ORDER MODELS ===");

const order_1 = {id: 1001, petId: 100, quantity: 2, shipDate: "2026-06-05T10:00:00Z", status: "placed", complete: false};
console.log("Order 1 (Placed):", order_1);

const order_2 = {id: 1002, petId: 102, quantity: 1, shipDate: "2026-06-03T15:30:00Z", status: "approved", complete: false};
console.log("Order 2 (Approved):", order_2);

const order_3 = {id: 1003, petId: 105, quantity: 1, shipDate: "2026-06-01T08:00:00Z", status: "delivered", complete: true};
console.log("Order 3 (Delivered):", order_3);

const order_4 = {id: 1004, petId: 107, quantity: 3, shipDate: "2026-06-06T12:00:00Z", status: "placed", complete: false};
console.log("Order 4 (Placed):", order_4);

const order_5 = {id: 1005, petId: 108, quantity: 1, shipDate: "2026-06-04T09:45:00Z", status: "approved", complete: false};
console.log("Order 5 (Approved):", order_5);

const all_orders = [order_1, order_2, order_3, order_4, order_5];
console.log("All Orders:", all_orders);

// ============================================
// USER MODELS
// ============================================
console.log("\n=== USER MODELS ===");

const user_1 = {id: 1, username: "john_doe", firstName: "John", lastName: "Doe", email: "john@example.com", password: "password123", phone: "1234567890", userStatus: 1};
console.log("User 1:", user_1);

const user_2 = {id: 2, username: "jane_smith", firstName: "Jane", lastName: "Smith", email: "jane@example.com", password: "securepass456", phone: "9876543210", userStatus: 1};
console.log("User 2:", user_2);

const user_3 = {id: 3, username: "admin_user", firstName: "Admin", lastName: "Account", email: "admin@petstore.com", password: "adminpass789", phone: "5555555555", userStatus: 1};
console.log("User 3 (Admin):", user_3);

const user_4 = {id: 4, username: "guest_user", firstName: "Guest", lastName: "Account", email: "guest@example.com", password: "guestpass123", phone: "4444444444", userStatus: 0};
console.log("User 4 (Guest):", user_4);

const user_5 = {id: 5, username: "customer_user", firstName: "Customer", lastName: "Name", email: "customer@example.com", password: "custpass456", phone: "3333333333", userStatus: 1};
console.log("User 5 (Customer):", user_5);

const all_users = [user_1, user_2, user_3, user_4, user_5];
console.log("All Users:", all_users);