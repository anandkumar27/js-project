/* decleared an array named 'teaFlevord' that contain the strings `"gren tea ", "black tea", "oolong tea"`
Acces the first element in the array and stored it in a variable named "firstTea"
*/

let teaFlevord = ["green tea", "black tea ", "oolong tea"];
const firstTea = teaFlevord[1];

/*
Decleared a array named `cities`, contaning `"londaon "`, `"tokyo"`, `"paries"`, `"New York"` 
Access the thired element in the array and store it in a Variable named "favoriteCity".
*/

let cities = ["London", "tokyo",  'Paries','New York'];
const favoriteCity = cities[2];


/*
3. You have an array named 'teaTypes' containing
'"herbal tea"', '"white tea"', and '"masala chai"'
Change the second element of the array to '"jasmine tea"`
*/

let teaType = ["herbal tea", "white tea", "masala tea"];
teaType[2] = "jasmine tea";
// console.log(teaType);



/*
4. Declare an array named citiesvisited containing '"Mumbai"' and '"Sydney"'
Add '"Berlin"' to the array using the 'push' method.
*/

let citiesvisited = ["mumbai", "sydney"];
//citiesvisited[2] = "Bhopal";
citiesvisited.push("Ayadhya")
//console.log(citiesvisited);

/*
5. You have an array named 'teaOrders' with '"chai"''"iced tea"''"matcha"', and '"earl grey"'
•and
Remove the last element of the array using the 'pop' method and store it in a variable named 'lastorder"
*/

let teaOrders = ["chai", "iced tea "," match", "earl grey"];
teaOrders.pop();
//console.log(teaOrders);



/*
6. You have an array named 'popularTeas' containing'"green tea"', '"oolong tea"', and '"chai"'
Create a soft copy of this array named'softCopyTeas'
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas. pop ();
// console. log (softCopyTeas) ; 
// console. log (popularTeas) ;



/*
7. You have an array named 'topcities containing
'"Berlin"', '"Singapore"' , and '"New York"• Create a hard copy of this array named'hardCopyCities'.
*/
let topcities = ["Berlin", "Singapur","New York"];
let hardCopyCities = [...topcities];
// let hardCopyCities = topcities.slice();
topcities.pop();
// console.log([...hardCopyCities]);



/*
8. You have two arrays: 'europeanCities' containing'"Paris"' and '"Rome"', and 'asianCities' containing'"Tokyo"' and '"Bangkok"'•
Merge these two arrays into a new array named'worldcities'
*/

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldcities =europeanCities.concat(asianCities);
// console.log(worldcities);

/*
9. You have an array named 'teaMenu' containing'"masala chai"'''oolong tea"','"green tea"'
'"earl grey"'
Find the length of the array and store it in a variable named 'menuLength'.
*/

let teaMenu = ["masala tea","oolong tea", "green tea", "earl tea"];
let menuLength = teaMenu.length;
// console.log(menuLength);

/*
10, IYou have an array named 'cityBucketList' containing
'"Kyoto" ''"London", '"Cape Town"', and '"Vancouver" '
Check if '"London"' is in the array and store the result in a variable named 'isLondonInList'
*/

let cityBucketList = ["Kyoto", "London","Cape Town","Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);

