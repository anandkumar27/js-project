// if ("") {
//     console.log("A");
// } else {
//     console.log("B");
// }


// if ("false") {
//     console.log("A");
// } else {
//     console.log("B");
// }



// const day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid");
// }
// // const value = null ?? 100;
// // console.log(value);

// const value = 0 ?? 100;

// console.log(value);

// // crate a for loop 


// for (let i = 1; i <=10; i++) {
//     const element = i ;
//     console.log(i);

// }


// const numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
    
// }


// const fruits = ["Apple", "Mango", "Banana", "Orange"];
// let i = 0
// while (i < fruits.length) {
//     console.log(fruits[i]);
//     i++
// }


// let number = 5;
// do{
//     console.log(number); 
//     number--
// }while (number >= 1) 


// const numbers = [10, 25, 30, 45, 50, 65, 70];

// for (let arr = 0; arr < numbers.length; arr++) {
//    if (numbers[arr] < 40) {
//         console.log(numbers[arr]);
//    }
    
// }

// const numbers = [5, 12, 8, 20, 3];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >  8 ) {
//         console.log(numbers[i]);
//     }
// }


// const numbers = [4, 15, 7, 22, 10, 31, 6];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0 ) {
//         console.log(numbers[i]);
//     }
// }



// const numbers = [5, 12, 18, 7, 21, 30, 11, 40];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10 && numbers[i]%2 === 0) {
//         console.log(numbers[i]);
//     }
// }


// const numbers = [4, 15, 8, 21, 10, 33];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(`even no`);
//     }else{
//         console.log(`Odd number`);
        
//     }
// }

const numbers = [5, 12, 17, 20, 25, 30, 41, 50];

for (let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > 20 && numbers[i] % 2 === 0 ) {
        console.log(`Bigeven `);
    }else{
        console.log(`Other`);
        
    }
}