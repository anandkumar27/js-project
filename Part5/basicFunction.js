
// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
// }

// const { use } = require("react")


function addTwoNumbers(num1 , num2){

    // let result = num1 + num2;
    // return result

    return num1 + num2
}
 const result = addTwoNumbers(3,7)
//  console.log("Result :", result);



function loginUserMessage(username){
    if (!undefined) {
     console.log("Please Enter a username ");
     
    }
    return `${username} just logged in`;

}
//   console.log(loginUserMessage("Anand"));
//  console.log(loginUserMessage("Anand"));


 function CaculateCartPrice(val1, val2, ...num){
    return num;
 }
//  console.log( CaculateCartPrice(200, 400, 600, 749, 432))


const user = {
    username: "Anand",
    price:7000,
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and  price is ${anyObject.price}`);
}

handleObject(user);