//Math

//●	Random
//Create a function that builds an array of 10 random numbers between 1 and 50.
//The function prints that array out in the console and then returns it.

function buildRandomArray() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(Math.random() * 50 + 1);
  }

  console.log(result);
  return result;
}

buildRandomArray();

//●	Round
//Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
//Print out the modified array in the console.
//Use the first function for generating the input array.

function roundArrayElements2Decimals(fn) {
  let arr = fn();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(arr[i] * 100) / 100;
  }
  console.log(arr);
  return arr;
}

roundArrayElements2Decimals(buildRandomArray);

//●	Floor
//Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
//Print out the modified array in the console.
//Use the first function for generating the input array.

function roundArrayElements(fn) {
  let arr = fn();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(arr[i]);
  }
  console.log(arr);
  return arr;
}

roundArrayElements(buildRandomArray);

//●	Max
//Create a function that finds and prints out the biggest element in the passed array of numbers.

function maxArrayElement(fn) {
  let arr = fn();
  console.log(arr);
  let maxElement = Math.max(...arr); //after unsuccessful attempts, i found this on MDN (...[1,2,3]); I have no idea what these three dots do, and why does this program work now, have to read through documentation
  console.log(maxElement);
}

maxArrayElement(buildRandomArray);

//Date

//●	Print out the whole date object in the console.
//●	Print out the current time in the console.
//●	Print out the current date in the console.

console.log(Date());

console.log(Date().slice(16, 24));

console.log(Date().slice(4, 16));

//this is done, or i use the getTime etc.?

// let date = new Date();

// console.log(date.getTime());

// console.log(date.getDate());
