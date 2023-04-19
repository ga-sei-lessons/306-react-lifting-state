// function outer(name) {
//     // inner scope (includes the name that was passed in)
//     function greetName() {
//         console.log("Hi, " + name)
//     }
//     return greetName
// }

// const greetGabe = outer("Gabe")
// console.log(greetGabe)
// greetGabe()
// const greetApril = outer("April")
// greetApril()
// greetGabe()

// module pattern
function personFactory(name) {
    const greet = function () {
        console.log("Hello, " + name)
    }
    const sayGoodbye = function () {
        console.log("See ya later, " + name)
    }
    
    return {
        // properties
        name,
        // methods
        greet,
        sayGoodbye
    }
}

const juan = personFactory("Juan")
console.log(juan)
juan.greet()
juan.sayGoodbye()