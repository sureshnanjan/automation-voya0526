// Type Annotations and Type Safety in TypeScript
let mymarks: number[] = [85, 92, 78, 90, 88];
//mymarks = ["One","Two"] // Type Errors
mymarks = [95.01, 80.1234, 82.89, 91, 89];

let tsname: string = "John Doe";
//tsname = 12345;

function customSortTS(array: string[]): string[] {
    return array.sort((a, b) => b.charAt(2).localeCompare(a.charAt(2)));
}
const namests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(customSortTS(namests));
// console.log(customSortTS(mymarks)); 
