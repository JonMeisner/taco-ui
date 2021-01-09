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
