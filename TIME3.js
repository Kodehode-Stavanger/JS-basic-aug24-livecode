const firstName = "Hans"

console.log(firstName)

// modulo

// 10 / 3 = 3 (1)
// 10 % 2 = 0

console.log(10 % 3)

let userAge = 26
userAge = userAge - 1
userAge -= 1
userAge--
console.log(userAge)
const userFriends = []
if (userFriends.length === 0) {
    console.log("You don't have any friends yet :( Try adding some!")
    
} else if (userFriends.length > 500) {
    console.log("Friend limit reached! Please subscribe for more.")
} else {
    console.log("Here is your friendslist.")
}

const minimumNumber = 4
const number = 16
let result

// Først sjekk om number er større enn minimumnumber. 
// Hvis det er større, sjekk om number er partall eller oddetall
// Hvis det er mindre, gi en feilmelding.

/* if (number >= minimumNumber) {
    if (number % 2 === 1) {
        result = "Number is odd"
    } else {
        result = "Number is even"
    }
} else {
    result = "Number is too small 🙄"
} */

/* if (number >= minimumNumber) {
    result = number % 2 === 1 ? "Number is odd" : "Number is even"
} else {
    result = "Number is too small 🙄"
} */

result = number >= minimumNumber ? (number % 2 === 0 ? "Even" : "Odd") : "Number too small"

const resultText = `The number you provided, ${number}, is ${number >= minimumNumber ? "bigger than or equal to" : "smaller than"} the minimum number, and is an ${number % 2 === 1 ? "odd" : "even"} number`

console.log(resultText)
