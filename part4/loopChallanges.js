/*
1. Write a 'while' loop thaticalculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum"
*/

// let sum = 0;
// let i = 1;
// //1+2+3+4+5 =15
// while( i <= 5){
//     // sum = sum + i;
//     sum += i
//     i++
// }
// console.log(sum);

// /*
/*2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
*/
// let countdown = []
// let j = 5
// while(j > 0){
//     countdown.push(j)
//     j--
// }
// console.log(countdown);

// /*
// 3. Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter '"stop"'.
// Store each tea type in an array named 'teacollection'.
// */

// let teaCollection = []
// let tea ;
// do{
//     tea = prompt(`Enter your favourite tea(type "stop" to fimish )`);
//     if (tea !="stop") {
//         teaCollection.push(tea);

        
//     }
// }while(tea != "stop");


/*
4. Write a'do while' loop that adds numbers from 1 to3
and stores the result in a variable named 'total'.
*/
// let total = 0;
// let k = 1; 
// do{
//     total += k;
//     k++
// } while(k<=4);

/*
5. Write a 'for' loop that multiplies each element in the array '[2, 4, 61' by 2 and stores the results in a new array named 'multipliedNumbers'.
*/
let multipliedNumbers = [];
let num = [2,3,4,5,6];

for (let i = 0; i < num.length; i++) {  
    // let TakeNumber = num[i] * 2;
    // multipliedNumbers.push(TakeNumber);
    multipliedNumbers.push(num[i] * 2)}
    console.log(multipliedNumbers);

    /*
6. Write a 'for' loop that lists all the cities in the array   "I"Paris", "New York", "Tokyo", "London"t and
stores each city in a new array named 'citylist.
*/
let cities = ["Paries", "new work", " tokyo", "london"]
let cityList = [];

for (let j = 0; j < cities.length; j++) {
    const MyCity = cities[j];
    cityList.push(MyCity);
}
console.log(cityList)