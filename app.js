// Conditionals

/* let lives = 3
lives--
lives--
lives--

if (lives > 1) {
    console.log("Not game over")
} else if (lives === 1) {
    console.log("Only one life left!")
} else {
    console.log("Game over")
} */

// let drinkOrder // <--- "Øl", "Saft"
const visitorAge = 18
const visitorSober = false

// // Logical AND og OR
// if (visitorAge >= 18 && !visitorSober) {
//     drinkOrder = "Øl"
// } else {
//     drinkOrder = "Saft"
// }

//ternary

const drinkOrder = visitorAge >= 18 && visitorSober? "Øl" : "Saft"


console.log(drinkOrder)

// Truthy og falsey
const someArray = 0.0000000000000
if (someArray) {
    console.log("?")
}

const firstName = "Ola"
const lastName = "Nordmann"
//const fullName = firstName + " " + lastName
const fullName = `Velkommen ${firstName} ${lastName}!`
console.log(fullName)

// Template literal
