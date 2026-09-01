// const user = {
//     name: "Anand",
//     age: 20
// };

// for (const x of user) {
//     console.log(x);
// }

const map = new Map();

map.set("IN", "India");
map.set("IN", "Bharat");


// const coding = ["js", "java", "python"];

// coding.forEach((item, index) => {
//     console.log(index, item);
// });



// const languages = ["Java", "JavaScript", "Python", "C++"];

// for (const ele of languages) {
//     console.log(ele);
    
// }



// const users = [
//     { name: "Anand", age: 20 },
//     { name: "Rahul", age: 17 },
//     { name: "Aman", age: 22 }
// ];

// users.forEach(( users) => {
//     if (users.age > 18) {
//     console.log(users);
//     }
// });


// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 12000 }
// ];

// products.forEach((product) => {
//     if (product.price > 1000 && product.price < 20000) {
//         console.log(product);
//     }
// })


// const valuee = [1, 2, 3].map((number) => number * 10);
// console.log(valuee);


const shoppingCart = [
    { itemName: "js-course", price: 2999 },
    { itemName: "js-course", price: 2999 },
    { itemName: "py-course", price: 4999 },
    { itemName: "java-course", price: 50009 },
    { itemName: "DS", price: 12999 }
];

// const totalPrice = shoppingCart.reduce(
//     (acc, item) => acc + item.price,
//     0
// );

// console.log(totalPrice);


const prices = [500, 1200, 3000, 700, 5000];

// const value = prices.filter((price) => {
//     return price > 1000
// })
// console.log(value);


// const nums = [1, 2, 3, 4, 5]; 

// const squares = nums.map((square) => square * square)
// console.log(squares);



const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

const productName = products.filter((product) => {
    return product.price > 1000
    
})
console.log(productName);

// const str = "javaString is best  "
// console.log(str.indexOf("String"));


let math = 123.656
console.log(Math.round(math));
console.log(Math.ceil(math));
