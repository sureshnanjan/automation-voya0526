const listofNumbers = [1, 2, 3, 4, 5];
const num_doubled=(numbers: number[])=>{
    console.log(numbers.map(num => num * num))

}
const num_plus2=(numbers: number[])=>{
    console.log(numbers.map(num => num + 2))
}
const num_power2=(numbers: number[])=>{
    console.log(numbers.map(num => num ** 2))
}

num_doubled(listofNumbers);
num_plus2(listofNumbers);
num_power2(listofNumbers);

