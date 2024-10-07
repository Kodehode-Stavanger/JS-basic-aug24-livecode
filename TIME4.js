// Functions

functionTest()

function functionTest() {
    console.log("Hello from the function")
}

// functionTest()

// Arrow function

const arrowFunction = () => {
    console.log("Hello from the arrow function")
    const myScopeVar = "Hei"
}
// arrowFunction()

// Return statement

// Scope

/* function scopeTest() {
    const myScopeVar = "Hei"
    if (myScopeVar === "Hello") return myScopeVar
    console.log("Hey")
}

const scopeResult = scopeTest()
console.log(scopeResult) */

function one () {
    console.log("Hei")
}

function two () {
    return "Hei"
}

one()
console.log(two())

// Parameters

const greeter = (name, time) => {
    return `Good ${time} ${name}`
}

const userData = {
    userName: "Joe",
    userEmail: "blabla@bnla.com"
}

const myGreeting = greeter(userData.userName, "night")
// console.log(myGreeting)


// Implied return.
const adder = (num1, num2) => num1 + num2
console.log(adder(2, 2))

function calculator(num1, num2, operator) {

    //If block

    /* if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2
    } else if (operator === "/") {
        return num1 / num2
    } else {
        return "Invalid operator."
    } */

    // Switch/case

   switch(operator) {
        case "+":
            return num1+num2
        case "-":
            return num1-num2
        case "*":
            return num1*num2
        case "/":
            return num1/num2
        default:
            return "Invalid operator"
   }

}
// console.log(calculator(78463527564, 75634673, "-"))

let HP = 100

const updateHP = (amount, direction) => {
    if (direction === "down") {
        HP -= amount 
    } else if (direction === "up") {
        HP += amount
    }
}
updateHP(50, "up")
updateHP(50, "up")
updateHP(100, "down")
updateHP(50, "up")
console.log(HP)


const fruits = ["Banana", "Apple", "Pear", "Kiwi"];
const checkVariable = "Mango"
const checker = (item, array) => `The array ${array.includes(item) ? "does" : "doesn't"} include ${item}`

console.log(checker(checkVariable, fruits))