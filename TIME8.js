// Loops
/* const fruits = ["Apple", "Banana", "Mango", "Grapes", "Pear"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (let fruit of fruits) {
    console.log(fruit)
} */

// 0.02654324 -> 0.22654324 -> 9

const randomNumber = Math.ceil(Math.random() * 10)

let guess = 0

/* while (guess !== 6) {
    guess++
    console.log(`Guessing ${guess}..`)
    if (guess === 6) {
        console.log(`The secret number is ${guess}!`)
    }
} */


// Objects
// Key/value pairs

const fruits = [
    {
      name: "Apple",
      color: "Red",
      calories: 52,
      pricePerKg: 3.5,
      countryOfOrigin: "USA"
    },
    {
      name: "Banana",
      color: "Yellow",
      calories: 89,
      pricePerKg: 1.2,
      countryOfOrigin: "Ecuador"
    },
    {
      name: "Orange",
      color: "Orange",
      calories: 47,
      pricePerKg: 2.8,
      countryOfOrigin: "Spain"
    },
    {
      name: "Strawberry",
      color: "Red",
      calories: 32,
      pricePerKg: 6.0,
      countryOfOrigin: "Mexico"
    },
    {
      name: "Mango",
      color: "Orange",
      calories: 60,
      pricePerKg: 4.0,
      countryOfOrigin: "India"
    },
    {
      name: "Grapes",
      color: "Green",
      calories: 69,
      pricePerKg: 2.5,
      countryOfOrigin: "Italy"
    },
    {
      name: "Pineapple",
      color: "Brown",
      calories: 50,
      pricePerKg: 3.0,
      countryOfOrigin: "Costa Rica"
    }
  ];

/*   let minimum = Infinity
  let cheapestFruit;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].pricePerKg < minimum) {
        minimum = fruits[i].pricePerKg
        cheapestFruit = `The cheapest fruit is ${fruits[i].name} with a price of ${minimum} kr. per kg`
    }
}
console.log(minimum) */

for (let fruit of fruits) {
    fruit.good = true
}
console.log(fruits)
for (let fruit of fruits) {
    delete fruit.good
}

console.log(fruits)