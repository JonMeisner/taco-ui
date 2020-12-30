const pizzaMenu = [
  {
    name: "Corona",
    key: 'corona',
    description: "An ice cold beer with your tacos.",
    price: 100,
    priceString: "$100",
    altString: "corona",
    img: "img/beer.png",
    title: "A Cold Corona",
  },
  {
    name: "Green Taco",
    key: 'green-taco',
    description:
      "The Taco Farmer SPECIAL! Don't tell your parole officer about this one!",
    price: 200,
    priceString: "$200",
    altString: "green",
    img: "./src/assets/green_taco.png",
    title: "A Green Taco",
  },
  {
    name: "Spicy Taco",
    key: 'spicy-taco',
    description: "A Spicy Taco that is said to make you really move it move it",
    price: 600,
    priceString: "$600",
    altString: "spicy",
    img: "img/spicy_taco.png",
    title: "A Spicy Taco",
  },
  {
    name: "Carne Asada Taco",
    key: 'carne-asada',
    description:
      "A Truly Beefy Taco that is said to be served containing bits of kevlar",
    price: 1000,
    priceString: "$1000",
    altString: "carne_asada_taco",
    img: "img/carne_asada_taco.png",
    title: "A Thick and Hearty Taco",
  },
];

const pizzaShop = {
  name: "Tony's Pizza",
  logo: "img/theTacoFarmer.png",
  logoAlt: 'taco',
  primaryColor: 'red',
  secondaryColor: 'yellow'
}

export {pizzaMenu, pizzaShop}