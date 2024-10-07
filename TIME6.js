// LOOPS (løkker)
// En måte å repetere kode

const names = [ "Tom", "Eric", "Jessica", "Scott", "Anna", "Carl", "Elisabeth", "Benny", "Oliver", "Andy", "Jenny", "Ashley", "Erin", "Patrick", "Vikas" ];

/* console.log("Hei Tom")
console.log("Hei Eric")
console.log("Hei Jessica") */

/* console.log(`Hei ${names[0]}`)
console.log(`Hei ${names[1]}`)
console.log(`Hei ${names[2]}`) */

// For loop
// console.log(names.length)
// for (let i = 0; i < names.length; i++) {
//     /* if (names[i] === "Andy") {
//         continue
//     } */
//     console.log(`Hei ${names[i]}`)
// }

// for (let name of names) {
//     console.log(`Hello ${name}`)
// }

// BREAK og CONTINUE

const randomNumber = Math.ceil(Math.random() * 10)
/* const randomNumber = Math.ceil(0.648632576528 * 10)
const randomNumber = Math.ceil(6.48632576528)
const randomNumber = 7 */

/* console.log(randomNumber)



let guess = 0

while (randomNumber !== guess) {
    guess++
    console.log(`Guessing ${guess}..`)
    if (randomNumber === guess) {
        console.log(`I guessed the random number! It was ${guess}!`)
    }
} */

// Generere et array med tall. Tallene skal være mellom 1 og X. Arrayet skal være Y langt.

/* X = 20
y = 10
[16, 2, 1, 8, 9, 8, 3, 1, 10, 5] */

const makeNumberArray = (numberRange, arrayLength) => {
    const array = []
    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.ceil(Math.random() * numberRange)
        array.push(randomNumber)
    }
    return array
}
const myNumberArray = makeNumberArray(50, 10)

// Lag en funksjon som returner det høyeste tallet i et array

const maxFinder = (arr) => {
    let biggest = 0
    for (let value of arr) {
        if (value > biggest) {
            biggest = value
        }
    }
    return `The biggest number in the array is ${biggest}`
}

console.log(myNumberArray)
console.log(maxFinder(myNumberArray))

