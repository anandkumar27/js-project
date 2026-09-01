let x = 100;

if (true) {
    let x = 50;
    console.log(x);
}

console.log(x);



// function outer() {

//     const name = "Anand";

//     function inner(){
//         console.log(name);
//     }
//     outer()
// }
// inner()


function one() {
    const name = "Anand";

    function two() {
        console.log(name);
    }

    two();
}

one();