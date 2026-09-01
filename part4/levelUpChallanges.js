/*
1. Write a 'for' loop that loops through the array ' ["green tea", "black tea", "chai"," "oolong tea"J' andstops the loop when it finds '"chai"'.
Store all teas before '"chai"' in a new array named
'selectedTeas"
*/

// let teas = ["greentea","blacck tea ","chai","oolong tea"];
// let favourite = [];

// for (let l = 0; l < teas.length; l++){
//   if (teas[l] === "chai") {
//     favourite.push(teas[l]);
//     break;
//   } 
// }
// console.log(favourite);


/*
2. Write a 'for' loop that loops through the array ' ["London", "New York", "Paris", "Berlin"]' and skips'"Paris"'Store the other cities in a new array named
'visitedCities'.
*/
let cities = ["London", "New york","Paris","Berlin"]
let visitedCities = [];

for (let k = 0; k < cities.length; k++) {
  if(cities[k] === "Paris"){
    continue;
  }
  visitedCities.push(cities[k])
}
console.log(visitedCities);


/*
3. Use a 'for-of' loop to iterate through the array "[`1,2,3,4,5`] and stop when the number '4' is found.
Store the numbers before "4" in an array named
'smallNumbers'.
*/
// let numbers = [1,2,3,4,5,6,7,];
// let smallNumbers = [];
// for (const num of numbers) {
//   if(num === 5){
//     break;
//   }
//   smallNumbers.push(num);
// }
// console.log(smallNumbers);


/*
4. Use a "for-of' loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"]' and skip '"herbal tea"'
Store the other teas in an array named 'preferredTeas'.
*/
// let teas = ["chai", "green teea","herbal tea","black tea",]
// let preferredTeas = [];

// for (const WorstTea of teas) {
//   if (WorstTea == "herbal tea") {
//     continue;
//   }
//   preferredTeas.push(WorstTea)
// }
// console.log(preferredTeas);


