// prvi zadatak

(function (array) {
  var resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[0]) {
      resultArray.push(array[array.length - 1]);
    } else if (array[i] == array[array.length - 1]) {
      resultArray.push(array[0]);
    } else {
      resultArray.push(array[i]);
    }
  }
  console.log(resultArray);
})([4, 5, 11, 9]);

//drugi zadatak

(function (a, b) {
  console.log(a * b);
})(4, 5);

//treci zadatak

(function (string) {
  var newString = "";
  var occurence = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "m" || string[i] == "M") {
      newString += "*";
      occurence++;
    } else {
      newString += string[i];
    }
  }
  console.log(newString + " , " + occurence);
})("prograMming");

// cetvrti zadatak -da li se ubacuju ime i prezime kao string?
(function (name, surname) {
  console.log(`${name}.${surname}@gmail.com`);
})("pera", "peric");

//peti zadatak

function convertToDecimal() {
  return function (octalNumber) {
    var decimalNumber = 0;
    octalNumber = octalNumber + "";
    for (let i = 0; i < octalNumber.length; i++) {
      decimalNumber +=
        Number(octalNumber[i]) * 8 ** (octalNumber.length - 1 - i);
    }

    return console.log(
      `The octal number ${octalNumber} is a decimal number ${decimalNumber}`
    );
  };
}

var result = convertToDecimal();
result(34);

//sesti zadatak
function successCallback() {
  console.log("Your password is cool!");
}
function errorCallback() {
  console.log("Your password is invalid!");
}
function checkPassword(password, fn1, fn2) {
  let numberInPass;
  let digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < password.length; i++) {
    if (digit.includes(password[i])) {
      numberInPass = true;
      break;
    }
  }

  if (password.length >= 6 && numberInPass) {
    return fn1();
  } else return fn2();
}

checkPassword("JSGuru", successCallback, errorCallback);

//sedmi zadatak

function isOdd(array) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      continue;
    } else {
      resultArray[resultArray.length] = array[i];
    }
  }
  return resultArray;
}

function filterElements(array, fn) {
  return fn(array);
}

console.log(filterElements([2, 8, 11, 4, 9, 3], isOdd));

//dodatni zadaci

//part1

//prvi zadatak

function checkNoDigits(string) {
  let result;
  let count = 0;
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < string.length; i++) {
    if (digits.includes(string[i])) {
      count++;
    }
  }
  if (count == 5) {
    result = true;
  } else result = false;
  return result;
}

console.log(checkNoDigits("1b8952abd"));
console.log(checkNoDigits("1bser9re"));
//1A

function checkForDigit5(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 5 || string[i] === "5") {
      return true;
    }
  }
  return false;
}

console.log(checkForDigit5("1b8952abd"));
console.log(checkForDigit5("1bser9re"));

//drugi zadatak

function replaceJS(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "J" && string[i + 1] == "S") {
      newString += "**";
    } else if (string[i] == "S" && string[i - 1] == "J") {
      continue;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

console.log(replaceJS("Programming in JS is super interesting!"));

//treci zadatak

function insertChar(string, position, character) {
  let resultString = "";
  for (let i = 0; i < string.length; i++) {
    if (i == position - 1) {
      resultString += character;
      resultString += string[i];
    } else {
      resultString += string[i];
    }
  }
  return resultString;
}

console.log(insertChar("Goo Morning", 4, "d"));

//cetvrti zadatak

function deleteChar(string, position) {
  let resultString = "";
  for (let i = 0; i < string.length; i++) {
    if (i == position) {
      continue;
    } else resultString += string[i];
  }
  return resultString;
}

console.log(deleteChar("Goodd Morning", 3));

//peti zadatak

function deleteEverySecondElement(array) {
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 != 0) {
      continue;
    } else {
      resultArr.push(array[i]);
    }
  }
  return resultArr;
}

console.log(deleteEverySecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));

//part2

//sesti zadatak

function doubleValues(array, pos1, pos2) {
  for (let i = 0; i < array.length; i++) {
    if (i >= pos1 && i <= pos2) {
      array[i] = array[i] * 2;
    }
  }
  return array;
}
console.log(doubleValues([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

//sedmi zadatak

function checkMatch(array1, array2) {
  let counter = 0;
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
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
}

console.log(checkMatch([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

//osmi zadatak

function sortByA(array) {
  let counter = 0;
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
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
  for (let k = 1; k < newArr.length; k += 2) {
    counterArr.push(newArr[k]);
  }
  counterArr.sort();
  let previous;

  for (let l = 0; l < counterArr.length; l++) {
    for (m = 1; m < newArr.length; m += 2) {
      if (counterArr[l] == newArr[m] && m != previous) {
        resultingArr.push(newArr[m - 1]);
        break;
      }
    }
    previous = m;
  }
  return resultingArr;
}

console.log(sortByA(["apple", "tea", "amazing", "morning", "JavaScript"]));

//deveti zadatak

function dateOfNextDay() {
  let date = Date();
  date = date + "";
  let fullWordArray = [];
  let string = "";
  for (let i = 0; i < date.length; i++) {
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
  if (day < 9) {
    shortFullWordArray[1] = "0" + (day + 1) + "";
  } else if (day >= 9) {
    shortFullWordArray[1] = day + 1 + "";
  }
  let nextDayDate = "";
  for (let j = 0; j < shortFullWordArray.length; j++) {
    for (let k = 0; k < shortFullWordArray[j].length; k++) {
      nextDayDate += shortFullWordArray[j][k];
    }
    if (j != shortFullWordArray.length - 1) {
      nextDayDate += " ";
    } else continue;
  }
  return nextDayDate;
}

console.log(dateOfNextDay());

//deseti zadatak

function dateOfPreviousDay() {
  let date = Date();
  date = date + "";
  let fullWordArray = [];
  let string = "";
  for (let i = 0; i < date.length; i++) {
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
  if (day <= 10) {
    shortFullWordArray[1] = "0" + (day - 1) + "";
  } else {
    shortFullWordArray[1] = day - 1 + "";
  }
  let previousDayDate = "";
  for (let j = 0; j < shortFullWordArray.length; j++) {
    for (let k = 0; k < shortFullWordArray[j].length; k++) {
      previousDayDate += shortFullWordArray[j][k];
    }
    if (j != shortFullWordArray.length - 1) {
      previousDayDate += " ";
    } else continue;
  }
  return previousDayDate;
}

console.log(dateOfPreviousDay());

//jedanaesti zadatak

function printRight(array) {
  for (let j = 0; j < array.length; j++) {
    array[j] = array[j] + "";
  }
  let maxLength = array[0].length;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
    }
  }
  // console.log(maxLength);
  let space = "";
  let spaceArr = [];
  for (let m = 0; m < array.length; m++) {
    for (let k = 0; k < maxLength - array[m].length; k++) {
      space += " ";
    }
    // console.log(space.length);
    spaceArr.push(space);
    space = "";
  }

  for (let l = 0; l < array.length; l++) {
    result = spaceArr[l] + array[l];
    console.log(result);
  }
}
printRight([78, 111, 4, 4321]);
