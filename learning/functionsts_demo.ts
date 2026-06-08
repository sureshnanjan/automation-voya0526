// Type Annotations and Type Safety in TypeScript
let mymarks: number[] = [85, 92, 78, 90, 88];
//mymarks = ["One","Two"] // Type Errors
mymarks = [95.01, 80.1234, 82.89, 91, 89];

const myadder = (first:number,second:number):number => {
    
    return first + second;
} 

let tsname: string = "John Doe";
//tsname = 12345; Single line comment

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
console.log(mymarks); 

// Map-based transformations (no classes)
function doubleNumbers(arr: number[]): number[] {
    return arr.map(n => n * 2);
}

function addTwo(arr: number[]): number[] {
    return arr.map(n => n + 2);
}

function squareNumbers(arr: number[]): number[] {
    return arr.map(n => n ** 2);
}

// Example usage
const sampleNumbers: number[] = [4, 5, 6];
console.log('Doubled:', doubleNumbers(sampleNumbers));
console.log('PlusTwo:', addTwo(sampleNumbers));
console.log('Squared:', squareNumbers(sampleNumbers));