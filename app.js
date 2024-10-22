const fruits = [
  {
    name: "Mango",
    description: "Experience the sweet, juicy taste of the tropics with our premium mangoes! Perfect for smoothies, snacks, or desserts, these golden delights are sun-ripened and bursting with flavor.",
    countryOfOrigin: "Mexico",
    price: 2.99,
    stock: 150,
    productId: "FRU1001",
    picture: "mango.jpg",
    sale: false
  },
  {
    name: "Blueberry",
    description: "Packed with antioxidants and a burst of tangy sweetness, our hand-picked blueberries are perfect for a healthy snack or a delicious addition to your favorite recipes.",
    countryOfOrigin: "USA",
    price: 4.49,
    stock: 200,
    productId: "FRU1002",
    picture: "blueberry.jpg",
    sale: false
  },
  {
    name: "Dragon Fruit",
    description: "Dare to try something exotic? Our dragon fruits not only look stunning but also offer a mildly sweet, refreshing flavor that’s sure to impress in any fruit salad or smoothie!",
    countryOfOrigin: "Vietnam",
    price: 5.99,
    stock: 75,
    productId: "FRU1003",
    picture: "dragonfruit.jpg",
    sale: true
  },
  {
    name: "Kiwi",
    description: "Our kiwis are bursting with a zesty, tropical flavor that’s rich in vitamin C! With their vibrant green flesh and unique tang, they’ll elevate any dish or snack time.",
    countryOfOrigin: "New Zealand",
    price: 1.49,
    stock: 120,
    productId: "FRU1004",
    picture: "kiwi.jpg",
    sale: false
  },
  {
    name: "Pineapple",
    description: "Transport your taste buds to a tropical paradise with our ultra-juicy pineapples! Perfectly ripe and full of natural sweetness, they’re a refreshing choice for any occasion.",
    countryOfOrigin: "Costa Rica",
    price: 3.99,
    stock: 80,
    productId: "FRU1005",
    picture: "pineapple.jpg",
    sale: false
  },
  {
    name: "Apple",
    description: "Crisp, sweet, and full of flavor! Our apples are hand-picked at the peak of freshness, perfect for snacking, baking, or adding a natural crunch to any dish.",
    countryOfOrigin: "USA",
    price: 1.29,
    stock: 300,
    productId: "FRU1006",
    picture: "apple.jpg",
    sale: false
  },
  {
    name: "Banana",
    description: "Our bananas are a natural source of energy, perfect for on-the-go snacking or a healthy addition to your breakfast. Sweet, creamy, and ready to enjoy!",
    countryOfOrigin: "Ecuador",
    price: 0.79,
    stock: 500,
    productId: "FRU1007",
    picture: "banana.jpg",
    sale: false
  },
  {
    name: "Strawberry",
    description: "Juicy, red, and bursting with sweetness! Our strawberries are perfect for desserts, smoothies, or just enjoying fresh for a refreshing treat.",
    countryOfOrigin: "Spain",
    price: 3.99,
    stock: 250,
    productId: "FRU1008",
    picture: "strawberry.jpg",
    sale: true
  },
  {
    name: "Papaya",
    description: "Take a trip to the tropics with our ripe, tender papayas. Their rich, buttery flavor makes them a delicious snack or a standout addition to fruit salads.",
    countryOfOrigin: "Brazil",
    price: 4.59,
    stock: 90,
    productId: "FRU1009",
    picture: "papaya.jpg",
    sale: false
  },
  {
    name: "Grapes",
    description: "Enjoy the refreshing burst of sweetness from our plump, juicy grapes. They’re the perfect snack for any time of day or a great addition to any meal!",
    countryOfOrigin: "Italy",
    price: 2.99,
    stock: 350,
    productId: "FRU1010",
    picture: "grapes.jpg",
    sale: false
  }
];

const productContainer = document.querySelector("#products")

for (let fruit of fruits) {
  //container
  const container = document.createElement("div")
  container.classList.add("card")
  //image
  const image = document.createElement("img")
  image.src = `./images/${fruit.picture}`
  image.style.width = "200px"
  image.classList.add("card-image")
  //title
  const title = document.createElement("h3")
  title.textContent = fruit.name
  title.classList.add("title")
  //description
  const description = document.createElement("p")
  description.textContent = fruit.description
  description.classList.add("description")
  //origin
  const origin = document.createElement("p")
  origin.textContent = fruit.countryOfOrigin
  origin.classList.add("origin")
  //stock
  const stock = document.createElement("p")
  stock.textContent = `Stock: ${fruit.stock}`
  stock.classList.add("stock")
  //product id
  const id = document.createElement("p")
  id.textContent = fruit.productId
  id.classList.add("id")
  //appends
  container.append(image, title, description, origin, stock, id)
  //sale
  if (fruit.sale) {
    container.classList.add("on-sale")
    const saleNotice = document.createElement("h5")
    saleNotice.classList.add("sale-notice")
    saleNotice.textContent = `Product is on sale for only ${fruit.price}`
    container.append(saleNotice)
  } else {
    //price
  const price = document.createElement("p")
  price.classList.add("price")
  price.textContent = `Price: ${fruit.price}`
  container.append(price)
  }
  productContainer.append(container)
}
