//1.	Write a functional expression that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]
//Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

let duplicateArr = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i]);
    newArr.push(array[i]);
  }
  return newArr;
};

console.log(duplicateArr([2, 4, 7, 11, -2, 1]));

//2.	Write a functional expression that removes all duplicates in a given array.

//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13]

let deleteDuplicates = (array) => {
  let newArr = [];

  return (newArr = array.filter(
    (value, index) => array.indexOf(value) === index
  )).sort(function (a, b) {
    return a - b;
  });
};
console.log(deleteDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

//3.

//a.	Write a function that checks if a given array has odd number of elements.

//Input: [1, 2, 9, 2, 1]

//Output: true

function checkOddNumber(array) {
  if (array.indexOf(array[array.length - 1]) % 2 == 0) {
    return true;
  } else return false;
}

console.log(checkOddNumber([1, 2, 9, 2, 25]));

//b.	Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.

//Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]

//Output: 4

function lessThanMiddle(array) {
  let numberOfElementsLessThanMiddleValue = 0;
  if (array.length % 2 == 0) {
    return `ERROR`;
  }

  let middleValue = array[(array.length - 1) / 2];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < middleValue) {
      numberOfElementsLessThanMiddleValue++;
    }
  }
  return numberOfElementsLessThanMiddleValue;
}

console.log(lessThanMiddle([-1, 8.1, 3, 6, 44, 2.3, 2.11, 5, 0]));

//4.	Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.

//Input: [1, 4, -2, 11, 8, 1, -2, 3]

//Output:  { minValue: -2, minLastIndex: 6 }

function smallestElement(array) {
  let minimum;
  minimum = array[0];
  let object = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  let minLastIndex;
  minLastIndex = array.lastIndexOf(minimum);

  object.minValue = minimum;
  object.minLastIndex = minLastIndex;
  return object;
}

console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3]));

//5. a.	Write a function that finds all the elements in a given array less than a given element.

//Input: [2, 3, 8, -2, 11, 4], 6

//Output: [2, 3, -2, 4]

function elementsLesserThanThis(array, input) {
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < input) {
      resultArr.push(array[i]);
    }
  }

  return resultArr;
}

console.log(elementsLesserThanThis([2, 3, 8, -2, 11, 4], 6));

//b.	Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.

//Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]

//Output: [’Programming’, ‘product’]

function startWithSample(array, sample) {
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].toLowerCase().slice(0, sample.length) === sample.toLowerCase()
    ) {
      resultArr.push(array[i]);
    }
  }
  return resultArr;
}

console.log(
  startWithSample(["Javascript", "Programming", "fun", "product"], "pro")
);

//c.	Write a function that expects an array and a callback function that filters out some of the elements.
//Use functions defined in a) or b) to test it.

//i made some small adjustments to the functions

function startWithSample1(array, sample) {
  if (array.toLowerCase().slice(0, sample.length) === sample.toLowerCase()) {
    return true;
  }

  return false;
}

function elementsLesserThanThis1(array, input) {
  for (let i = 0; i < 1; i++) {
    if (Number(array[array.length - 1]) < input) {
      return true;
    }
  }

  return false;
}

function specificFilter(array, fn1, fn2) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    //specify the second parameter in this function as your sample word with which every element in the array needs to begin with in order to be selected
    let check1 = fn1(array[i], "JAVA");
    //specify the second parameter in this function which represents the number by which all elements will be filtered. If the element of the array has a number below the one specified, and that number is at the end of the element, that element will be selected
    let check2 = fn2(array[i], 5);
    if (check1 && check2) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(
  specificFilter(
    ["JAvAScript7", "JAVASCRIPT4", "javeLIN3", "method9", "Java0"],
    startWithSample1,
    elementsLesserThanThis1
  )
);

//6

//a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,

//[{name: ‘apples’, price: 100}, {name: ‘milk’, price: 80}, {name:’bananas’, price: 150}]

let groceriesList = [
  { name: "bread", price: 110 },
  { name: "meat", price: 250 },
  { name: "coca cola", price: 150 },
];

//b.	Write a function that calculates the total price of your shopping list.

function totalPrice(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i].price;
  }
  return total;
}

console.log(totalPrice(groceriesList));
//c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.

function threeDecimals(array, fn1) {
  let avg;
  let sum = fn1(array);
  avg = sum / array.length;
  return avg.toFixed(3);
}

console.log(threeDecimals(groceriesList, totalPrice));

//d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.

function mostExpensive(array) {
  let productName;
  let maxPrice = array[0].price;
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > maxPrice) {
      maxPrice = array[i].price;
      productName = array[i].name;
    }
  }
  return productName.toUpperCase();
}

console.log(mostExpensive(groceriesList));

//7

//a.	Write a function that checks if a given string is written in all capitals.

function isItAllUppercase(string) {
  let check;
  check = string.toUpperCase();
  if (string === check) {
    return true;
  } else return false;
}

console.log(isItAllUppercase("BEOgraD"));
console.log(isItAllUppercase("BEOGRAD"));

//b.	Write a function that checks if a given string contains any digits.

function containsNumbers(string) {
  let result;
  let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < string.length; i++) {
    if (numberArr.includes(string[i])) {
      //   console.log(string[i]);
      result = true;
      break;
    } else {
      //   console.log(string[i]);
      result = false;
    }
  }
  return result;
}

console.log(containsNumbers("Javascripti"));
console.log(containsNumbers("Javascripti13"));

//c.	Write a function that checks if a given string is a valid hexadecimal color.

function validChar(string) {
  let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let letterArr = ["a", "b", "c", "d", "e", "f"];

  for (let i = 1; i < string.length; i++) {
    if (numberArr.includes(string[i])) {
      continue;
    }
    if (letterArr.includes(string[i])) {
      continue;
    }
    if (
      letterArr.includes(string[i]) == false &&
      numberArr.includes(string[i]) == false
    ) {
      return `INVALID COLOR`;
    }
  }
  return true;
}

function validHexColor(string) {
  let hash, longString;

  string[0] === "#" ? (hash = true) : (hash = false);
  string.length == 7 ? (longString = true) : (longString = false);
  //   string.filter(function (element, index) {
  //     return element == numberArr[index];
  //   });
  let character = validChar(string);

  if (hash == true && longString == true && character == true) {
    return true;
  } else return false;
}

console.log(validHexColor("#ffffff"));

//d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018.

function belongsToInterval(number) {
  if (number > 1900 && number < 2018) {
    return true;
  } else return false;
}

console.log(belongsToInterval(1524));

//e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function Validator(string, numberString, color, number) {
  this.stringValidator = isItAllUppercase(string);
  this.passwordValidator = containsNumbers(numberString);
  this.colorValidator = validHexColor(color);
  this.yearValidator = belongsToInterval(number);
}

let validate = new Validator("JAVASCRIPt", "javsc13ipt", "#f0f0f", 1997);

console.log(validate);

//8.	Write a function that calculates a number of days to your birthday.
//Input: 25 February
//Output: 5 days

function daysUntilBirthday(date) {
  let date_1 = new Date(date);
  let date_2 = new Date();
  // console.log(date_2);
  //   console.log(date_2.getTime() / (24 * 60 * 60 * 1000));

  let difference = date_1.getTime() - date_2.getTime();
  difference = Math.round(difference / (24 * 60 * 60 * 1000));
  return difference;
}
console.log(daysUntilBirthday("04/13/2023"));

//9.	Write a function that for a given departure and arrival time calculates the time the trip takes.

//Input: 8:22:13 11:43:22

//Output: 3 hours 21 minutes 9 seconds

//forceful, less elegant way
function tripTime(departure, arrival) {
  let diffArr = [];
  let partsOfTime = [];
  let hoursInSeconds;
  let minutesInSeconds;
  let seconds;
  let string = "";
  let timeArr = [departure, arrival];
  for (let i = 0; i < timeArr.length; i++) {
    let time = timeArr[i];
    // console.log(time);
    time = time + ":";
    for (let j = 0; j < time.length; j++) {
      if (time[j] != ":") {
        string += time[j];
      } else if (time[j] == ":") {
        partsOfTime.push(string);
        string = "";
        // console.log(partsOfTime);
      }
    }
    hoursInSeconds = Number(partsOfTime[0]) * 60 * 60;
    minutesInSeconds = Number(partsOfTime[1]) * 60;
    seconds = Number(partsOfTime[2]);
    let sumSeconds = hoursInSeconds + minutesInSeconds + seconds;
    diffArr.push(sumSeconds);
    // console.log(diffArr);
    partsOfTime = [];
  }

  let diff = diffArr[1] - diffArr[0];
  // console.log(diff);
  let newHours = Math.floor(diff / 3600);
  diff = diff - newHours * 3600;
  let newMinutes = Math.floor(diff / 60);
  diff = diff - newMinutes * 60;
  let newSecond = diff;

  return `${newHours} hours ${newMinutes} minutes ${newSecond} seconds`;
}
console.log(tripTime("8:22:13", "11:43:22"));

//more elegant way --there's probably 5 more elegant ways, but it's more elegant than first one

function tripTime1(departure, arrival) {
  let departureArr = departure.split(":");
  let arrivalArr = arrival.split(":");
  let timeDifferenceInSeconds =
    Number(arrivalArr[0]) * 3600 +
    Number(arrivalArr[1]) * 60 +
    Number(arrivalArr[2]) -
    (Number(departureArr[0]) * 3600 +
      Number(departureArr[1]) * 60 +
      Number(departureArr[2]));
  let elapsedHours = Math.floor(timeDifferenceInSeconds / 3600);
  let elapsedMinutes = Math.floor(
    (timeDifferenceInSeconds - elapsedHours * 3600) / 60
  );
  let elapsedSecond =
    timeDifferenceInSeconds - elapsedHours * 3600 - elapsedMinutes * 60;

  return `${elapsedHours} hours ${elapsedMinutes} minutes ${elapsedSecond} seconds`;
}

console.log(tripTime1("8:22:13", "11:43:22"));

//10

//a.	Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

function PointInSpace(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

let point = new PointInSpace(3, 5, 1);
console.log(point);

//b.	Write a function that calculates the distance between two points in the space.

let point1 = new PointInSpace(1, 1, 1);
let point2 = new PointInSpace(2, 2, 2);

function distanceBetweenTwoPoints(point1, point2) {
  let distance =
    ((point1.x - point2.x) ** 2 +
      (point1.y - point2.y) ** 2 +
      (point1.z - point2.z) ** 2) **
    0.5;
  return distance.toFixed(2);
}

console.log(distanceBetweenTwoPoints(point1, point2));

//11

//a.	Write a function that generates a random integer value between 5 and 20.

//if both 5 and 20 are included:

function randomInteger(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

console.log(randomInteger(5, 20));

//b.	Write a function that generates a random integer value between 50 and 100.

console.log(randomInteger(50, 100));

//c.	Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.

function generator0to1000() {
  return Math.floor(Math.random() * 1001);
}

function returnArrayOfRandoms(number, fn) {
  let resultArray = [];
  for (let i = 0; i < number; i++) {
    resultArray.push(fn());
  }
  return resultArray;
}

console.log(returnArrayOfRandoms(10, generator0to1000));

//12

//Write a function that shuffles the elements of a given array.

//Input: [3, 6, 11, 2, 9, 1]

//Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)

function shuffle(array) {
  // debugger;
  let newArr = [];
  let i = 0;
  let numberOfLoops = 0;
  while (newArr.length != array.length || newArr.includes(undefined)) {
    numberOfLoops++;
    let j = Math.floor(Math.random() * array.length);
    if (newArr[j] != undefined) {
      continue;
    } else if (newArr[j] == undefined) {
      newArr[j] = array[i];
    }
    i++;
    if (i >= 6) {
      i = 0;
    }
  }
  console.log("number of loops is " + numberOfLoops);
  return newArr;
}

console.log(shuffle([3, 6, 11, 2, 9, 1]));
