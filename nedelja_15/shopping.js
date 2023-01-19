'use strict';

/////////////////////////////////////////////////////////////////////

/*
In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all code written in the file follows strict mode. Also try to implement error handling as well.

Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.

Create constructor functions with properties representing the following “things”:
	Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), expiration date
	ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)
 
Add getInfo method to Product. It should return a formatted string containing product code (the first and last letter of the name together with the product id), name and price.
"Banana" -> BA32784, Banana, 129.31
 
Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date.  

Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals. 

Add getMostExpensive method that finds the most expensive product and prints out its info.

Add calculateTotalPrice method to ShoppingBag that calculates the total price of products in the shopping bag list. 

Create a constructor function with properties representing the following:

	PaymentCard - account balance (number with 2 decimal places), active or inactive status, valid until date	

Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not. Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. If there is not enough money, print out the amount that is missing to complete the purchase.
*/

/////////////////////////////////////////////////////////////////////

//Declarations of all constructor functions

/////////////////////////////////////////////////////////////////////

function Product(name, price, expirationDate) {
  (this.id = Math.trunc(Math.random() * (99999 - 10000 + 1)) + 10000),
    (this.name = name),
    (this.price = String(price.toFixed(2))),
    (this.expirationDate = expirationDate),
    (this.getInfo = function () {
      const code =
        this.name.slice().at(0).toUpperCase() +
        this.name.slice().at(-1).toUpperCase() +
        this.id;
      return `${code}, ${this.name}, ${this.price}`;
    });
}

/////////////////////////////////////////////////////////////////////

function ShoppingBag() {
  this.products = [];
  (this.addProduct = function (product) {
    const expDate = new Date(product.expirationDate);
    if (expDate.getTime() - Date.now() > 86400000) {
      this.products.push(product);
    }
  }),
    (this.calcAvgPrice = function () {
      this.avg = this.products
        .map(val => val.price)
        .reduce((acc, price, i, arr) => (acc += Number(price) / arr.length), 0);
      return this.avg.toFixed(3);
    }),
    (this.getMostExpensive = function () {
      const { id, name, price, expirationDate } = this.products
        .slice()
        .sort((a, b) => b.price - a.price)
        .at(0);
      console.log(
        `The most expensive product is => id: ${id}, name: ${name}, price: ${price}, expirationDate: ${expirationDate}`
      );
    }),
    (this.calculateTotalPrice = function () {
      this.priceTotal = this.products
        .map(product => product.price)
        .reduce((acc, price) => (acc = acc + Number(price)), 0);
    });
}

/////////////////////////////////////////////////////////////////////

function PaymentCard(balance, status, validUntil) {
  (this.balance = balance.toFixed(2)),
    (this.status = status),
    (this.validUntil = validUntil);
}

/////////////////////////////////////////////////////////////////////

const checkoutAndBuy = function (shoppingBag, paymentCard) {
  if (Number(paymentCard.balance) >= Number(shoppingBag.priceTotal)) {
    console.log('Purchase Successful!');
  } else {
    console.log(
      `Purchase Unsuccessful. You are missing ${
        Number(shoppingBag.priceTotal) - Number(paymentCard.balance)
      } to complete the purchase.`
    );
  }
};

/////////////////////////////////////////////////////////////////////

//Creating objects from constructor functions

const product1 = new Product('milk', 200, '11/15/2023');

const product2 = new Product('eggs', 270, '1/24/2023');

const product3 = new Product('meat', 430, '5/4/2023');

const product4 = new Product('chocolate', 233, '8/21/2023');

const paymentCard = new PaymentCard(2000, 'active', '04/01/2024');

const paymentCard2 = new PaymentCard(1000, 'active', '11/22/2026');

const shoppingBag = new ShoppingBag();

//Main IIFE

(() => {
  shoppingBag.addProduct(product1);
  shoppingBag.addProduct(product2);
  shoppingBag.addProduct(product3);
  shoppingBag.addProduct(product4);

  console.log(
    'The average price of products in the shopping bag is: ',
    shoppingBag.calcAvgPrice()
  );

  shoppingBag.getMostExpensive();

  shoppingBag.calculateTotalPrice();

  checkoutAndBuy(shoppingBag, paymentCard);

  checkoutAndBuy(shoppingBag, paymentCard2);
})();
