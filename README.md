<!-- @format -->

## PMA Restaurant Application

### NUI Message Structure

#### On Open

```
{
  "openMenu": true,
  "initialRoute": "menu", // the route showing when you open the app
  "customerName": "New customer", // prefilled customer name for order
  "shopData": {
    "name": "Pie shop",
    "id": "pie-shop",
    "logo": "./src/assets/pie-logo.png",
    "logoAlt": "pies",
    "primaryColor": "orange", // header color
    "secondaryColor": "green" // unused currently
  },
  "menuItems": [
    {
      "name": "Apple pie",
      "shortName": "apple", //name used in order list
      "key": "apple_pie",
      "description": "Yummy apple pie",
      "price": 500,
      "altString": "Apple Pie",
      "img": "./src/assets/apple_pie.png",
      "title": "A slice of apple pie"
    },
    {
      "name": "Banana cream pie",
      "shortName": "Banana",
      "key": "banana_cream_pie",
      "description": "Yummy banana cream pie",
      "price": 500,
      "altString": "Banana cream Pie",
      "img": "./src/assets/banana_cream_pie.png",
      "title": "A slice of banana cream pie"
    },
    {
      "name": "Pumpkin pie",
      "shortName": "pumpkin",
      "key": "pumpkin_pie",
      "description": "Yummy pumpkin pie",
      "price": 500,
      "altString": "pumpkin Pie",
      "img": "./src/assets/pumpkin_pie.png",
      "title": "A slice of pumpkin pie"
    }
  ],
  "orderList": [
    {
      "customer": "First customer",
      "items": { "apple_pie": 1, "banana_cream_pie": 3, "pumpkin_pie": 1 },
      "cost": 2000,
      "type": 0 // 0 - customer, 1 - delivery
    },
    {
      "customer": "Second customer",
      "items": { "apple_pie": 2, "banana_cream_pie": 3, "pumpkin_pie": 1 },
      "cost": 2500,
      "type": 0
    }
  ]
}
```

#### On close

```
{
  openMenu: false
}
```

### Debugging

After running `npm start`, open your web console and run your configured menu data within a `postMessage({data: ...})` call.
Copy the command below and adjust what you need.

Ex:

```
postMessage({data: {
  openMenu: true,
  initialRoute: 'menu',
  customerName: "derek",
  shopData: {
    name: "Tony's Pizza",
    id: "tonys-pizza",
    logo: "./src/assets/theTacoFarmer.png",
    logoAlt: "taco",
    primaryColor: "red",
    secondaryColor: "yellow",
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
}});
```

# Create React App Docs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
