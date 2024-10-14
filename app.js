// DOM Manipulation

// Document Object Model

const grandParent = document.getElementById("grandparent")

// grandParent.remove()

grandParent.style.backgroundColor = "yellow"

const parents = document.getElementsByClassName("parent")
console.log(parents)

for (let parent of parents) {
  parent.style.backgroundColor = "red"
}

// parent[0].style.backgroundColor = "red"
// parent[1].style.backgroundColor = "red"

// DRY

const newElement = document.createElement("p")
newElement.textContent = "Innhold"
const randomSize = Math.floor(Math.random() * 21) + 20
newElement.style.fontSize = `${randomSize}px`
document.body.append(newElement)

const makeBlack = (elem) => {
  elem.style.backgroundColor = "black"
}

// const children = document.getElementsByClassName("child")


// Query selector vs. getElementByID



// makeBlack(children)

const fruits = [
  { name: "Kiwi", icon: "🥝" },
  { name: "Apple", icon: "🍎" },
  { name: "Pear", icon: "🍐" },
  { name: "Melon", icon: "🍉" },
  { name: "Mango", icon: "🥭" },
  { name: "Orange", icon: "🍊" },
];

const fruitList = document.createElement("ol")
document.body.append(fruitList)

for (let i = 0; i < fruits.length; i++) {
  const fruit = document.createElement("udfiasgh")
  fruit.textContent = `${fruits[i].name} ${fruits[i].icon}`
  fruitList.prepend(fruit)
}

fruitList.classList.add("child")

// const children = document.querySelectorAll(".child")

// console.log(children)

// for (let child of children) {
//   makeBlack(child)
// }








