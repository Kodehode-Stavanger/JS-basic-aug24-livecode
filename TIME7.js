// Objects

//const array = ["En", "To", "Tre"]

const userData = {
    firstName: "Olav",
    lastName: "Hansen",
    age: 31,
    male: true,
    hobbies: ["Golf", "Hiking", "Cinema"],
    address: {
        streetName: "Solskinnsgaten",
        streetNumber: 38,
        postCode: 4050
    },
    position: "Manager",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    addMiddleName: function (middlename) {
        this.middleName = middlename
    }
}

//console.log(userData.hobbies[2])
userData.addMiddleName("Trond")
// console.log(userData.middleName)

// Object array

const products = [
    {
        productName: "Whatever",
        productId: 746352,
        stock: 32,

    },
    {
        productName: "Wfdser",
        productId: 745642,
        stock: 32,
    },
    {
        productName: "Whdas",
        productId: 7498652,
        stock: 322,
    },
]

const people = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["coding", "games", "memes"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma"],
    },
  {
      name: "Otto",
      male: true,
      age: 36,
      hobbies: ["movies", "cinema", "music"],
    },
  {
      name: "Annabelle",
      male: false,
      age: 30,
      hobbies: ["makeup", "fashion", "shopping"],
    },
  {
      name: "Cathy",
      male: false,
      age: 18,
      hobbies: ["design", "drawing", "css"],
    }
  ];

 /*  let total = 0
  for (let i = 0; i < people.length; i++) {
    total += people[i].age 
  }
  console.log(total) */

  // "NAVN er en X år gammel mann/kvinne som blant annet liker X"

/* for (let person of people) {
    console.log(`${person.name} is a ${person.age} year old ${person.male ? "man" : "woman"} who likes ${person.hobbies[Math.floor(Math.random() * person.hobbies.length)]} among other things.`)
}

let total = 0

for (let person of people) {
    total += person.age
} */

// console.log(total)

const allHobbies = []

/* for (let person of people) {
    allHobbies.push(person.hobbies)
} */

/* for (let person of people) {
    for (let hobby of person.hobbies) {
        allHobbies.push(hobby)
    }
} */

// Spread syntax / spread operator

for (let person of people) {
    allHobbies.push(...person.hobbies)
}

// console.log(allHobbies)

for (let i = 0; i < people.length; i++) {
    people[i].title = people[i].male ? "Mr" : "Ms"
}
 console.log(people)

  


