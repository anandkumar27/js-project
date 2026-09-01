// Primitive 

/*
7 type of primitive data type 
1. Number 
2. String 
3. Null
4. boolean
5. undefined
6. symbol 
7. Bigint

*/
// Number
const rollNumber = 43;
// const myNumber = 8863.03
// console.log(typeof rollNumber);

// String
const Name = "Anand";
console.log(typeof Name);

// Null 
const outsideTemp = null;

// boolean
const isLoggedIn = false;



// undefined
let username;
// console.log(typeof username);



// bigInt
let bigNumber = 123456789012345678901234567890n;

// console.log(bigNumber);
// console.log(typeof bigNumber);



// symbol 
let id1 = Symbol("id");
let id2 = Symbol("id")

console.log(id1 === id2); 
// Ever Symbol() create a uniqe symbol


// referance type (Non Primitive data types )

const heros = ["saktiman", " naagara", "doga"]

let myObj = {
    name: "Anand",
    age: 22,

}

   const myFunction = function(){
        console.log("hello Ramesh");

   }

    console.log(typeof myFunction);



//    ====================================================================================


// Stact memory (Primitive), Heap (Non Primitive)

let myName = "AkashKumar";

let anotherName = myName;
anotherName ="ChaiOrCode"


console.log(myName);
console.log(anotherName);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo =  userOne;

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);






    







