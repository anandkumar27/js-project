const { use } = require("react");

const arr = [0,1,2,3,4]

// const result = arr.slice(1,3)
// console.log(result);
// console.log(arr);


// const result2 = arr.splice(1,3)
// console.log(result2);
// console.log(arr);


const a = [1, 2];
const b = [3, 4];

const c = a.concat(b);
console.log(c);


const e = [1, 2];
const f = [3, 4];

const result = [...a, ...b];
console.log(result);


//slice 
const arr1 = ["A", "B", "C", "D", "E"];
const result1 = arr1.slice(1, 3);

console.log(result1);
console.log("Original "+arr1);



// splice
const arr2 = ["A", "B", "C", "D", "E"];
const result2 = arr2.splice(1, 3);

console.log(result2);
console.log("Original: " + arr2);


// concatination 
const marvel = ["Thor", "Ironman"];
const dc = ["Batman", "Superman"];

const all_heros = [...marvel, ...dc]
console.log(all_heros);


// speard 
const numbers = [2, 3, 4];
const newNumbers = [1, ...numbers, 5];
console.log(newNumbers);

// Spread with strings

const name = "Anand";
console.log([...name]);


// Spread with objects — later important

// const user = {
//     name: "Anand",
//     age: 22
// };

// const newUser = {
//     ...user,
//     city: "Bhopal"
// };



// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6
