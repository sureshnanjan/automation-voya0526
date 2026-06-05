/*
// Type Annotations and Type Safety in TypeScript
let mymarks: number[] = [85, 92, 78, 90, 88];
//mymarks = ["One","Two"] // Type Errors
mymarks = [95.01, 80.1234, 82.89, 91, 89];

const myadder = (first:number,second:number):number => {
    
    return first + second;
} 

let tsname: string = "John Doe";
//tsname = 12345; Single line comment
/*

*/

/**
 * This is a customsort according to the 3rd character in any string
 * @param array - Need to be string array
 * @returns An array in the sorted order based on the 3rd character of the string in descending order
 * @example
 * const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
 * console.log(customSortTS(names)); // Output: ["Charlie", "David", "Alice", "Bob", "Eve"]
 * // The names are sorted descding based on the 3rd character: 'r' in "Charlie", 'v' in "David", 'i' in "Alice", 'b' in "Bob", and 'e' in "Eve".
 */
function customSortTS(array: string[]): string[] {
    return array.sort((a, b) => b.charAt(2).localeCompare(a.charAt(2)));
}
const namests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(customSortTS(namests));
//console.log(customSortTS(marks)); 

const myvalue: string = "Hello, World!";
const mybehaviur = function(param1: string,param2:number): void {
    console.log("This is a function without return value");
}
mybehaviur();

const myarrwo = () => console.log("This is an arrow function without return value");

const mmyarrowfunction = (): void => {
    console.log("This is an arrow function without return value");
}

function processResponse(response: ApiResponse): void {
    if (response.code === 200) {
        console.log("Success:", response.message);
    } else {
        console.log("Error:", response.message);
    }  }
*/
    