//1.	Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price

const grocery1 = {
  product: "Coffee",
  quantity: 21,
  price: 28,
};
const grocery2 = {
  product: "Coca Cola",
  quantity: 1,
  price: 120,
};
const grocery3 = {
  product: "Chicken frites",
  quantity: 2,
  price: 449.99,
};
const grocery4 = {
  product: "Chocolate",
  quantity: 1,
  price: 109.99,
};
const grocery5 = {
  product: "Bread",
  quantity: 1,
  price: 204.99,
};
const grocery6 = {
  product: "Milk",
  quantity: 1,
  price: 149.99,
};
const grocery7 = {
  product: "Bag",
  quantity: 1,
  price: 13.99,
};

const groceries = [
  grocery1,
  grocery2,
  grocery3,
  grocery4,
  grocery5,
  grocery6,
  grocery7,
];

function totalPrice(groceries) {
  let price;
  let totalPrice = 0;
  for (let i = 0; i < groceries.length; i++) {
    price = groceries[i].quantity * groceries[i].price;
    totalPrice += price;
  }
  return totalPrice;
}

console.log(totalPrice(groceries));
console.log(Math.round(totalPrice(groceries)));

//2.	You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.
//      Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

const jewelry = [
  { name: "ring", price: 2000 },
  { name: "necklace", price: 1500 },
  { name: "bracelet", price: 800 },
  { name: "earings", price: 500 },
  { name: "ankle bracelet", price: 750 },
  { name: "crown", price: 10000 },
];

function mostExpensive(jewelry) {
  let jewelryName = jewelry[0].name;
  let jewelryPrice = jewelry[0].price;
  for (let i = 0; i < jewelry.length; i++) {
    if (jewelry[i].price > jewelryPrice) {
      jewelryPrice = jewelry[i].price;
      jewelryName = jewelry[i].name;
    }
  }
  return `The most expensive item is the ${jewelryName}`;
}

console.log(mostExpensive(jewelry));

//3.	Given a word, create an object that stores the indexes of each letter in an array. Make sure the letters are the keys.
//      Make sure the letters are symbols.
//      Make sure the indexes are stored in an array and those arrays are values.

//Examples:

//mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

//mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

//mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters(string) {
  let object = {};
  let positionArray = [];

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    for (let j = 0; j < string.length; j++) {
      if (string[j] == letter) {
        positionArray[positionArray.length] = j;
      }
    }
    object[string[i]] = positionArray;
    positionArray = [];
  }
  return object;
}

console.log(JSON.stringify(mapLetters("dodo")));
console.log(JSON.stringify(mapLetters("froggy")));
console.log(JSON.stringify(mapLetters("grapes")));

//4.	And who cursed the most in the fight between you and your spouse? Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most: If you, return "ME!" If your spouse, return "SPOUSE!" If a draw, return "DRAW!"

//Examples:

//determineWhoCursedTheMost([{me: 10, spouse: 5}, {me: 5, spouse: 10}, { me: 0, spouse: 10}]) ➞ "DRAW!"  <- not correct!

//determineWhoCursedTheMost([{me: 40, spouse: 5}, {me: 9, spouse: 10}, { me: 9, spouse: 10}]) ➞ "ME!"

//determineWhoCursedTheMost([{me: 10, spouse: 5}, {me: 9, spouse: 44}, { me: 10, spouse: 55}]) ➞ "SPOUSE!"

function determineWhoCursedTheMost(array) {
  let me = 0;
  let spouse = 0;
  for (let i = 0; i < array.length; i++) {
    me += array[i].me;
    spouse += array[i].spouse;
  }
  if (me > spouse) {
    return "ME!";
  } else if (spouse > me) {
    return "SPOUSE!";
  } else if (spouse == me) {
    return "DRAW!";
  }
}

console.log(
  determineWhoCursedTheMost([
    { me: 10, spouse: 5 },
    { me: 5, spouse: 10 },
    { me: 0, spouse: 10 },
  ])
);

console.log(
  determineWhoCursedTheMost([
    { me: 40, spouse: 5 },
    { me: 9, spouse: 10 },
    { me: 9, spouse: 10 },
  ])
);

console.log(
  determineWhoCursedTheMost([
    { me: 10, spouse: 5 },
    { me: 9, spouse: 44 },
    { me: 10, spouse: 55 },
  ])
);

//5.	Create a function that converts color in RGB format to Hex format.

//Examples:

//rgbToHex({red: 0, green: 128,  blue: 192}) ➞ "#0080c0"

function rgbToHex(rgb) {
  let coef;
  let number;
  let string = "";
  let coefArr = [];
  let hexArr = [];
  let rgbArr = [rgb.red, rgb.green, rgb.blue];

  for (let i = 0; i < rgbArr.length; i++) {
    if (rgbArr[i] < 0 || rgbArr[i] > 255) {
      return `INVALID`;
    }
    if (Math.round(rgbArr[i]) == 0) {
      hexArr[hexArr.length] = "0" + Math.round(rgbArr[i]);
    } else {
      number = Math.round(rgbArr[i]);
      while (number / 16 != 0) {
        coefArr[coefArr.length] = number % 16;
        number = parseInt(number / 16);
      }
      // console.log(coefArr);
      if (coefArr.length == 1) {
        coefArr.push(0);
      }
      for (let j = coefArr.length - 1; j >= 0; j--) {
        switch (coefArr[j]) {
          case 10:
            coef = "a";
            break;
          case 11:
            coef = "b";
            break;
          case 12:
            coef = "c";
            break;
          case 13:
            coef = "d";
            break;
          case 14:
            coef = "e";
            break;
          case 15:
            coef = "f";
            break;
          default:
            coef = coefArr[j];
        }
        hexArr[hexArr.length] = coef;
        // console.log(hexArr);
      }
      coefArr = [];
    }
  }
  //   console.log(hexArr);
  for (let k = 0; k < hexArr.length; k++) {
    string += hexArr[k];
  }

  return "#" + string;
}

console.log(rgbToHex({ red: 0, green: 128, blue: 192 }));

//6.	Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.

//Examples:

//makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }

//makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }

//makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }

function makeChange(change) {
  change = change / 100;
  let q = 0.25,
    d = 0.1,
    n = 0.05,
    p = 0.01;
  let changeArr = [q, d, n, p];
  let nameArr = ["q", "d", "n", "p"];
  let changeObj = {};
  for (let i = 0; i < changeArr.length; i++) {
    changeObj[nameArr[i]] = Math.floor(change / changeArr[i]);
    change = Math.round((change % changeArr[i]) * 100) / 100;
  }
  return changeObj;
}

console.log(makeChange(47));
console.log(makeChange(24));
console.log(makeChange(92));

//7.	Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and
//returns an array of objects like { name: "John", avgNote: 4 }.
//If student has no notes (an empty array) then let's assume avgNote: 0.

//Examples:

//[{ name: "John", notes: [3, 5, 4]}]➞[{ name: "John", avgNote: 4 }]

function studentsAndNotes(array) {
  let objectArray = [];
  for (let i = 0; i < array.length; i++) {
    let object = {};
    let sum = 0;
    let avg = 0;
    let studentName = array[i].name;
    let studentNotes = array[i].notes;
    for (let j = 0; j < studentNotes.length; j++) {
      sum += studentNotes[j];
    }
    avg = sum / studentNotes.length;
    object = { name: studentName, avgNote: avg };
    // console.log(object);
    objectArray.push(object);
  }

  return objectArray;
}

console.log(
  studentsAndNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Michael", notes: [5, 4, 5, 4] },
  ])
);

console.log(
  JSON.stringify(
    studentsAndNotes([
      { name: "John", notes: [3, 5, 4] },
      { name: "Michael", notes: [5, 4, 5, 4] },
    ])
  )
);

console.log(studentsAndNotes([{ name: "John", notes: [3, 5, 4] }]));

console.log(
  JSON.stringify(studentsAndNotes([{ name: "John", notes: [3, 5, 4] }]))
);

//8.	Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average.
//The key will be the student's name and the value will be an array of their grades.
//You will only have to return the student's name. You do not need to return their Test Average.

//getBestStudent([{  name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, grades: [100, 70, 80]}…]) ➞ "John" // John's avg = 90 // Bob's avg = 83.33

function getBestStudent(array) {
  let objectArray = [];
  for (let i = 0; i < array.length; i++) {
    let object = {};
    let sum = 0;
    let avg = 0;
    let studentName = array[i].name;
    let studentNotes = array[i].notes;
    for (let j = 0; j < studentNotes.length; j++) {
      sum += studentNotes[j];
    }
    avg = sum / studentNotes.length;
    object = { name: studentName, avgNote: avg };
    // console.log(object);
    objectArray.push(object);
  }
  let bestStudentName;
  for (let l = 0; l < 1; l++) {
    let maxAvg = objectArray[0].avgNote;
    bestStudentName = objectArray[0].name;

    for (let k = 0; k < objectArray.length; k++) {
      if (objectArray[k].avgNote > maxAvg) {
        maxAvg = objectArray[k].avgNote;
        bestStudentName = objectArray[k].name;
      } else continue;
    }
  }
  return bestStudentName;
}

console.log(
  getBestStudent([
    { name: "John", notes: [100, 90, 80] },
    { name: "Bob", notes: [100, 70, 80] },
  ])
);

console.log(
  getBestStudent([
    { name: "John", notes: [100, 90, 80] },
    { name: "Bob", notes: [100, 100, 80] },
  ])
);
