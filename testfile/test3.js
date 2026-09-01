// const min = 50;
// const max = 100;

// console.log(
//     Math.floor(Math.random() * (max - min + 1)) + min
// );\


const min = 1;
const max = 100;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

const numberAsString = randomNumber.toString();
console.log(numberAsString);

const fixedNumber = randomNumber.toFixed(2);
console.log(fixedNumber);

