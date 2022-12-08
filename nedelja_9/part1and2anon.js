//part1

//prvi zadatak

const checkNoOfDigits = (string) => {
  let result;
  let count = 0;
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (i = 0; i < string.length; i++) {
    if (digits.includes(string[i])) {
      count++;
    }
  }
  if (count == 5) {
    result = true;
  } else result = false;
  return result;
};
const AreThereFiveDigits = checkNoOfDigits("1b8952abd");

console.log(AreThereFiveDigits);

//1A

const checkForDigit5 = (string) => {
  for (i = 0; i < string.length; i++) {
    if (string[i] === 5 || string[i] === "5") {
      return true;
    }
  }
  return false;
};

const digit5 = checkForDigit5("1bser9re");
console.log(digit5);

//drugi zadatak

const replaceJS = (string) => {
  let newString = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] == "J" && string[i + 1] == "S") {
      newString += "**";
    } else if (string[i] == "S" && string[i - 1] == "J") {
      continue;
    } else {
      newString += string[i];
    }
  }
  return newString;
};
const newJSString = replaceJS("Programming in JS is super interesting!");
console.log(newJSString);

//treci zadatak

const insertChar = (string, position, character) => {
  let resultString = "";
  for (i = 0; i < string.length; i++) {
    if (i == position - 1) {
      resultString += character;
      resultString += string[i];
    } else {
      resultString += string[i];
    }
  }
  return resultString;
};

const stringAfterInsert = insertChar("Goo Morning", 4, "d");
console.log(stringAfterInsert);

//cetvrti zadatak

const deleteChar = (string, position) => {
  let resultString = "";
  for (i = 0; i < string.length; i++) {
    if (i == position) {
      continue;
    } else resultString += string[i];
  }
  return resultString;
};
const stringAfterDelete = deleteChar("Goodd Morning", 3);
console.log(stringAfterDelete);
//peti zadatak

const deleteEverySecondElement = (array) => {
  let resultArr = [];
  for (i = 0; i < array.length; i++) {
    if (i % 2 != 0) {
      continue;
    } else {
      resultArr.push(array[i]);
    }
  }
  return resultArr;
};
const onlyEvenElementsArray = deleteEverySecondElement([
  3, 5, 1, 8, 90, -4, 23, 1, 67,
]);
console.log(onlyEvenElementsArray);
//part2

//sesti zadatak

const doubleValues = (array, pos1, pos2) => {
  for (i = 0; i < array.length; i++) {
    if (i >= pos1 && i <= pos2) {
      array[i] = array[i] * 2;
    }
  }
  return array;
};
const arrayWithSomeValuesDoubled = doubleValues(
  [3, 5, 1, 8, 90, -4, 23, 1, 67],
  2,
  6
);
console.log(arrayWithSomeValuesDoubled);

//sedmi zadatak

const checkMatch = (array1, array2) => {
  let counter = 0;
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        delete array2[j];
        counter++;
        break;
      }
    }
  }
  if (counter == array1.length) {
    return true;
  } else return false;
};

const doTheseArraysMatchElements = checkMatch(
  [3, 4, 1, 3],
  [8, 9, 3, 1, 11, 4, 3]
);
console.log(doTheseArraysMatchElements);

//osmi zadatak

const sortByA = (array) => {
  let counter = 0;
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      if (array[i][j] == "a" || array[i][j] == "A") {
        counter++;
      }
    }
    newArr.push(array[i]);
    newArr.push(counter);
    counter = 0;
  }
  let resultingArr = [];
  let counterArr = [];
  for (k = 1; k < newArr.length; k += 2) {
    counterArr.push(newArr[k]);
  }
  counterArr.sort();
  let previous;

  for (l = 0; l < counterArr.length; l++) {
    for (m = 1; m < newArr.length; m += 2) {
      if (counterArr[l] == newArr[m] && m != previous) {
        resultingArr.push(newArr[m - 1]);
        break;
      }
    }
    previous = m;
  }
  return resultingArr;
};
const arraySortedByNoOfAs = sortByA([
  "apple",
  "tea",
  "amazing",
  "morning",
  "JavaScript",
]);
console.log(arraySortedByNoOfAs);

//deveti zadatak

const dateOfNextDay = function () {
  let date = Date();
  date = date + "";
  let fullWordArray = [];
  let string = "";
  for (i = 0; i < date.length; i++) {
    if (date[i] == " ") {
      fullWordArray.push(string);
      string = "";
    } else {
      string += date[i];
    }
  }
  let shortFullWordArray = [
    fullWordArray[1],
    fullWordArray[2],
    fullWordArray[3],
  ];
  let day = Number(shortFullWordArray[1]);
  if (day < 10) {
    shortFullWordArray[1] = "0" + (day + 1) + "";
  } else {
    shortFullWordArray[1] = day + 1 + "";
  }
  let nextDayDate = "";
  for (j = 0; j < shortFullWordArray.length; j++) {
    for (k = 0; k < shortFullWordArray[j].length; k++) {
      nextDayDate += shortFullWordArray[j][k];
    }
    if (j != shortFullWordArray.length - 1) {
      nextDayDate += " ";
    } else continue;
  }
  return nextDayDate;
};
const tomorrowsDate = dateOfNextDay();
console.log(tomorrowsDate);

//deseti zadatak

const dateOfPreviousDay = function () {
  let date = Date();
  date = date + "";
  let fullWordArray = [];
  let string = "";
  for (i = 0; i < date.length; i++) {
    if (date[i] == " ") {
      fullWordArray.push(string);
      string = "";
    } else {
      string += date[i];
    }
  }
  let shortFullWordArray = [
    fullWordArray[1],
    fullWordArray[2],
    fullWordArray[3],
  ];
  let day = Number(shortFullWordArray[1]);
  if (day < 10) {
    shortFullWordArray[1] = "0" + (day - 1) + "";
  } else {
    shortFullWordArray[1] = day - 1 + "";
  }
  let previousDayDate = "";
  for (j = 0; j < shortFullWordArray.length; j++) {
    for (k = 0; k < shortFullWordArray[j].length; k++) {
      previousDayDate += shortFullWordArray[j][k];
    }
    if (j != shortFullWordArray.length - 1) {
      previousDayDate += " ";
    } else continue;
  }
  return previousDayDate;
};
const yesterdaysDate = dateOfPreviousDay();
console.log(yesterdaysDate);

//jedanaesti zadatak

const printRight = (array) => {
  for (j = 0; j < array.length; j++) {
    array[j] = array[j] + "";
  }
  let maxLength = array[0].length;
  for (i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
    }
  }
  // console.log(maxLength);
  let space = "";
  let spaceArr = [];
  for (m = 0; m < array.length; m++) {
    for (k = 0; k < maxLength - array[m].length; k++) {
      space += " ";
    }
    // console.log(space.length);
    spaceArr.push(space);
    space = "";
  }

  for (l = 0; l < array.length; l++) {
    result = spaceArr[l] + array[l];
    console.log(result);
  }
};

printRight([78, 111, 4, 4321]);
