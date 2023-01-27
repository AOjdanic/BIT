"use strict";

// 1.
// Headquarters have asked that you store the following information about each book: title, author,
// copyright date, ISBN, number of pages, number of times the book has been checked out, whether the book has been discarded.

// Headquarters also needs you to track certain actions that you must perform when books get out of date.
// First, for a manual, the book must be thrown out if it is over 5 years old.
// Second, for a novel, the book should be thrown out if it has been checked out over 100 times.

// Construct three classes that hold the information needed by headquarters as properties.
// One class should be a Book class and two child classes of the Book class called Manual and Novel.
// Each class will contain two methods. One will be a constructor.
// The other one will either be in charge of disposal of the book or updating the property related to the number of times a book has been checked out.
// Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and what should belong to the Novel and Manual classes.

// Declare an object of the Novel class for the following tome from the library. Declare an object of the Manual class for the following tome from the library.
// One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.
// The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out.

class Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numberOfPages,
    timesCheckedOut = 1,
    isDiscarded = false
  ) {
    (this.title = title),
      (this.author = author),
      (this.copyrightDate = copyrightDate),
      (this.ISBN = ISBN),
      (this.numberOfPages = numberOfPages),
      (this.timesCheckedOut = timesCheckedOut),
      (this.isDiscarded = isDiscarded);
  }
}

class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numberOfPages,
    timesCheckedOut,
    isDiscarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      ISBN,
      numberOfPages,
      timesCheckedOut,
      isDiscarded
    );
  }

  checkManualAge() {
    const copyDate = new Date(this.copyrightDate);
    const age = Date.now() - copyDate.getTime();
    if (age >= 5 * 365 * 24 * 60 * 60 * 1000) {
      this.isDiscarded = true;
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    numberOfPages,
    timesCheckedOut,
    isDiscarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      ISBN,
      numberOfPages,
      timesCheckedOut,
      isDiscarded
    );
  }
  updateNumberOfCheckedOutTimes(views) {
    this.timesCheckedOut += views;
    if (this.timesCheckedOut >= 100) {
      this.isDiscarded = true;
    }
  }
}

// 2.
// You need to create some kind of calculator.
// The argument passed to run(instructions) will always be a string containing a series of instructions.
// The instruction set of the calculator will be this:

// + (plus): Pop the last 2 values from the stack, add them, and push the result onto the stack.
// - (minus): Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
// * (multiple): Pop the last 2 values, multiply, and push the result.
// / (divide): Pop the last 2 values, divide the topmost one by the lower one, and push the result.
// DUP: Duplicate (not double) the top value on the stack.
// POP: Pop the last value from the stack and discard it.
// PSH: Performed whenever a number appears as an instruction. Push the number to the stack.
// Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]".

// Examples:
// StackCalc("") ➞ 0

// StackCalc("5 6 +") ➞ 11

// StackCalc("3 DUP +") ➞ 6

// StackCalc("6 5 5 7 * - /") ➞ 5

// StackCalc("x y +") ➞ Invalid instruction: x

// If there are no instructions, the value should remain 0.
// The return value of get value() should be the topmost value on the stack.
// Be careful with methods in this class!

const popTwo = function (stack) {
  let a = Number(stack.pop());
  let b = Number(stack.pop());
  return [a, b];
};

const add = function (stack) {
  const [a, b] = popTwo(stack);
  return stack.push(a + b);
};

const subtract = function (stack) {
  const [a, b] = popTwo(stack);
  return stack.push(Math.abs(a - b));
};

const multiply = function (stack) {
  const [a, b] = popTwo(stack);
  return stack.push(a * b);
};

const divide = function (stack) {
  const [a, b] = popTwo(stack);
  return a > b ? stack.push(a / b) : stack.push(b / a);
};

const duplicate = function (stack) {
  return stack.push(stack.slice().at(-1));
};

const deleteLast = function (stack) {
  return stack.pop();
};

const CalculateResultOf = function (operation, stack) {
  switch (operation) {
    case "+":
      add(stack);
      break;
    case "-":
      subtract(stack);
      break;
    case "*":
      multiply(stack);
      break;
    case "/":
      divide(stack);
      break;
    case "DUP":
      duplicate(stack);
      break;
    case "POP":
      deleteLast(stack);
      break;
  }
  return stack;
};

const StackCalc = function (instructions) {
  if (instructions == "") return console.log(0);
  if (/[a-z]/.test(instructions)) return console.log("Invalid instructions");

  const stack = (Number.parseInt(instructions.split(" ").join("")) + "").split(
    ""
  );

  const operations = instructions.split(" ").slice().splice(stack.length);

  for (const operation of operations) CalculateResultOf(operation, stack);
  return console.log(stack.at(0));
};

StackCalc("");
StackCalc("6 5 5 7 * - /");
StackCalc("5 6 +");
StackCalc("x y +");
StackCalc("3 DUP +");

// 3.
// Write a class called CoffeeShop, which has three instance variables and seven methods. Variables are:
// a) name : a string (basically, of the shop),
// b) menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price,
// c) orders : an empty array.

// Methods:
// a) addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
// b) fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
// c) listOrders: returns the list of orders taken, otherwise, an empty array.
// d) dueAmount: returns the total amount due for the orders taken, round off up to two decimal places.
// e) cheapestItem: returns the name of the cheapest item on the menu.
// f) drinksOnly: returns only the item names of type drink from the menu.
// g) foodOnly: returns only the item names of type food from the menu.

// IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

// Examples:
// tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// // Tesha's coffee shop does not sell hot cocoa
// tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// // specifying the variant of "iced tea" will help the process

// tcs.addOrder("cinnamon roll") ➞  "Order added!"
// tcs.addOrder("iced coffee") ➞ "Order added!"
// tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// // the list of all the items in the current order

// tcs.dueAmount() ➞ 2.17

// tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
// tcs.fulfillOrder() ➞ "The iced coffee is ready!"
// tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// // all orders have been presumably served

// tcs.listOrders() ➞ []
// // an empty array is returned if all orders have been exhausted

// tcs.dueAmount() ➞ 0.0
// // no new orders taken, expect a zero payable

// tcs.cheapestItem() ➞ "lemonade"
// tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
// tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]

class CoffeeShop {
  constructor(name, menu) {
    (this.name = name), (this.menu = menu), (this.orders = []);
  }

  addOrder(orderIn) {
    if (this.menu.map((order) => order.itemName).includes(orderIn)) {
      this.orders.push(orderIn);
      return console.log("Order added!");
    } else return console.log("This item is currently unavailable!");
  }

  fulfillOrder(orderIn) {
    const item = this.menu
      .filter((order) => {
        if (order.itemName === orderIn) return order;
      })
      .at(0);
    if (this.orders.length != 0) {
      if (this.orders.at(0) === orderIn) {
        this.orders.shift(orderIn);
        return console.log(`The ${item.itemName} is ready!`);
      } else
        return console.log(
          "We are processing previous order request, please wait"
        );
    } else {
      return console.log("All orders have been fulfilled");
    }
  }

  listOfOrders() {
    return console.log(this.orders);
  }

  dueAmount() {
    let amount = 0;
    for (const order of this.orders) {
      this.menu.forEach((menuItem) => {
        if (menuItem.itemName === order) {
          amount += menuItem.price;
          return amount;
        }
      });
    }
    return console.log(amount.toFixed(2));
  }

  cheapestItem() {
    return console.log(
      this.menu
        .slice()
        .sort((a, b) => a.price - b.price)
        .at(0).itemName
    );
  }

  drinksOnly() {
    return console.log(
      this.menu
        .filter((order) => order.itemType === "drink")
        .map((order) => order.itemName)
    );
  }

  foodOnly() {
    return console.log(
      this.menu
        .filter((order) => order.itemType === "food")
        .map((order) => order.itemName)
    );
  }
}

const tsc = new CoffeeShop("The 305", [
  { itemName: "orange juice", itemType: "drink", price: 200 },
  { itemName: "lemonade", itemType: "drink", price: 150 },
  { itemName: "cranberry juice", itemType: "drink", price: 250 },
  { itemName: "pineapple juice", itemType: "drink", price: 230 },
  { itemName: "lemon iced tea", itemType: "drink", price: 175 },
  { itemName: "vanilla chai latte", itemType: "drink", price: 300 },
  { itemName: "hot chocolate", itemType: "drink", price: 350 },
  { itemName: "iced coffee", itemType: "drink", price: 350 },
  { itemName: "tuna sandwich", itemType: "food", price: 480 },
  { itemName: "ham and cheese sandwich", itemType: "food", price: 550 },
  { itemName: "bacon and egg", itemType: "food", price: 510 },
  { itemName: "steak", itemType: "food", price: 800 },
  { itemName: "hamburger", itemType: "food", price: 650 },
  { itemName: "cinnamon roll", itemType: "food", price: 600 },
]);

console.log(tsc);

tsc.addOrder("hot cocoa");
tsc.addOrder("iced tea");
tsc.addOrder("cinnamon roll");
tsc.addOrder("iced coffee");
tsc.listOfOrders();
tsc.dueAmount();
tsc.fulfillOrder("cinnamon roll");
tsc.fulfillOrder("iced coffee");
tsc.fulfillOrder();
tsc.listOfOrders();
tsc.dueAmount();

tsc.cheapestItem();
tsc.drinksOnly();
tsc.foodOnly();
