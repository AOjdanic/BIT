"use strict";

/*
1.	Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES']

*/

const capitalizeLetters = function (array) {
  return array
    .filter((word) => typeof word === "string")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1));
};

console.log(capitalizeLetters(["hello", "there", "ES", 6]));

/*

2.	Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only

*/

const calculateSalesTax = function (arr) {
  const tax = 0.2;
  const output2 = arr.map((obj) => obj.price * tax);
  for (const obj of arr) {
    obj.price += obj.price * tax;
  }
  return [arr, output2];
};

const [arr, output2] = calculateSalesTax([
  { name: "Banana", price: 120 },
  { name: "Orange", price: 100 },
]);
console.log(arr);
console.log(output2);

/*
3.	Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]
*/

const increaseBy = function (arr, increaseValue) {
  return arr.map((number) => {
    if (increaseValue == undefined) {
      return ++number;
    } else {
      return (number += increaseValue);
    }
  });
};

console.log(increaseBy([4, 6, 11, -9, 2.1], 2));
console.log(increaseBy([4, 6, 11, -9, 2.1]));

/*
4.	Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
*/

const filterEvenElements = function (arr) {
  return arr.filter((member) => member % 2 == 0);
};

console.log(filterEvenElements([6, 11, 9, 0, 3]));

/*
5.	Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard']
*/

const filterJS = function (arr) {
  return arr.filter((member) => member.toLowerCase().includes("js"));
};

console.log(
  filterJS(["compiler", "transpiler", "babel.js", "JS standard", "linter"])
);

/*
6.	Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8]
*/

const filterInteger = function (arr) {
  return arr.filter((number) => number === Number.parseInt(number));
};

console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));

/*
7.	Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553]
*/

const filterIntegerWith5 = function (...arr) {
  return arr.filter((number) => {
    if (number === Number.parseInt(number)) {
      let numString = number + "";
      if (numString.split("").includes("5")) return number;
    }
  });
};

console.log(filterIntegerWith5(23, 11.5, 9, "abc", 45, 28, 553));

/*
8.	Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: [1, 2, 5]
*/

const returnIndex = function (arr) {
  return arr.reduce((acc, number, i) => {
    if (number > 10) acc.push(i);
    return acc;
  }, []);
};

console.log(returnIndex([1.6, 11.34, 29.23, 7, 3.11, 18]));

/*
9.	
a.	Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
b.	Write a function that prints out the names of persons older than 25. 
c.	Write a function that check if there is a person older than 40.
d.	Write a function that checks if all persons are older than 20.   
*/

const firstName = "Martha";
const age = 30;

const persons = [
  { firstName: "Jason", age: 15 },
  { firstName, age },
  { firstName: "Christine", age: 27 },
  { firstName: "Alex", age: 50 },
];

const displayPeopleOlderThan25 = function (arr) {
  return arr.filter((person) =>
    person.age > 25 ? console.log(person.firstName) : ""
  );
};

displayPeopleOlderThan25(persons);

const isSomeoneOver40 = function (arr) {
  return arr.some((person) => person.age > 40);
};

console.log(isSomeoneOver40(persons));

const isEveryoneOlderThan20 = function (arr) {
  return arr.every((person) => person.age > 20);
};

console.log(isEveryoneOlderThan20(persons));

/*
10.	Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no
*/

const PositiveIntegerArray = function (arr) {
  return arr.every(
    (number) => number === Number.parseInt(number) && number > 0
  );
};

console.log(PositiveIntegerArray([3, 11, 9, 5, 6]));
console.log(PositiveIntegerArray([3, -12, 4, 11]));
console.log(PositiveIntegerArray([3, 11, 9.3, 5.5, 6]));

/*
11.	Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48
*/

const displayProductOfMembers = function (arr) {
  return arr.reduce((acc, number) => (acc *= number), 1);
};

console.log(displayProductOfMembers([2, 8, 3]));
console.log(displayProductOfMembers([2, 8, 3, 4, 5, 8, 2.33]));

/*
12.	Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
	Output: 8
   */

const maxValue = function (arr) {
  return Math.max(...arr);
};

console.log(maxValue([2, 7, 3, 8, 5.4]));
