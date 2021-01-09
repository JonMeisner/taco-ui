/** @format */

postMessage({
  data: {
    openMenu: true,
    initialRoute: "menu",
    customerName: "derek",
    shopData: {
      name: "Tony's Pizza",
      id: "tonys-pizza",
      logo: "./src/assets/theTacoFarmer.png",
      logoAlt: "taco",
      primaryColor: "#D3B168",
      secondaryColor: "#F6EEE5",
    },
    menuItems: [
      {
        name: "Pepperoni Pizza",
        shortName: "Pepperoni",
        key: "pepperoni_pizza",
        description: "Pepperoni pizza",
        price: 500,
        altString: "Pepperoni pizza",
        img: "./src/assets/beer.png",
        title: "A slice of pepperoni pizza",
      },
      {
        name: "Pepperoni Pizza",
        shortName: "Cheese",
        key: "cheese_pizza",
        description: "Pepperoni pizza",
        price: 500,
        altString: "Pepperoni pizza",
        img: "./src/assets/beer.png",
        title: "A slice of pepperoni pizza",
      },
      {
        name: "Pepperoni Pizza",
        key: "sausage_pizza",
        shortName: "Sausage",
        description: "Pepperoni pizza",
        price: 500,
        altString: "Pepperoni pizza",
        img: "./src/assets/beer.png",
        title: "A slice of pepperoni pizza",
      },
    ],
    orderList: [
      {
        customer: "Derek Fhreebs",
        items: { pepperoni_pizza: 3, cheese_pizza: 10, sausage_pizza: 30 },
        cost: 500,
        type: 0,
      },
      {
        customer: "Michelle Matzen",
        items: { pepperoni_pizza: 3 },
        cost: 100,
        type: 0,
      },
    ],
  },
});
