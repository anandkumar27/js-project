
// const user = {
//     username: "Anand",

//     greet(){
//         console.log(this.username);
//         age: 20
//     }
// };

// console.log(user);
// user.greet()


// Implicit 
// const sqare = (n) => n * n
// console.log(sqare(5));


// Explicit 
// const sqare = (n) => {
//     return n * n
// }
// console.log(sqare(4));

// Coding: Write an arrow function multiply(a, b) that returns the multiplication of two numbers using implicit return.

// const multiply = (a, b) => a * b 
// console.log(multiply(4,5));

// const  user1 = {
//     username: "Anand",

//     greet(){
//         console.log(this.username);
//     }
// }

// user1.greet()

// user1.username = "Rahul"

// user1.greet()


//  Create an IIFE that takes your name as an argument
// and prints:
// "Hello Anand, JavaScript started!"



((name) => {
    console.log(`Hello ${name}`);
    
})("Anand");


(function (name){

    console.log(`Hello ${name}`);

})("Anand");
