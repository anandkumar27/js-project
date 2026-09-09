
const promiseOne = new Promise(function(resolve, reject){
    // Do an asynchronous task 
    // DB call, cryptography, network

    setTimeout(() => {
        console.log('Asynchronous task is complete');
        resolve()
    },1000);
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("asynchromous task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Asynchronous 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Anand", email: "annad@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true  // false
        if (!error) {
        resolve({usernmae: "hitesh", age: 33});
        }else{
           reject("ERROR: something went wrong");
        }
    }, 1000);
})

promiseFour
.then(function(user){
    console.log(user.usernmae);
    return user.usernmae
})
.then((usernmae)=> {
    console.log(usernmae);
})
.catch(function(error){
    console.log(error);
})
.finally(() =>{
    console.log("The promise is resolved or rejected");
    
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
            let error = true;
        if (!error) {
            resolve({usernmae: "javaScript", password:"a@123"})
        }else{
            reject("ERROR: JS ewnt wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//    try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//    } catch (error) {
//     console.log("E: ", error);
//    }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})