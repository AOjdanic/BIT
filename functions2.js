//prvi zadatak

function checkInput(input) {
  if (input === Number(input)) {
    console.log("false");
  } else if (input === String(input)) {
    console.log("true");
  } else console.log("false");
}

checkInput(false);

//drugi zadatak
function checkInput(input) {
  if (input === Number(input)) {
    console.log("false");
  } else if (String(input) === " " || String(input) === " ") {
    console.log("true");
  } else if (input === String(input)) {
    console.log("false");
  } else console.log("false");
}

checkInput(" ");

//treci zadatak

function concat(string, numberOfConcat) {
  var result = "";
  for (i = 0; i < numberOfConcat; i++) {
    result += string;
  }

  console.log(result);
}

concat("Ha", 5);

//cetvrti zadatak

function spellCheck(string, letter) {
  var n = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      n++;
    }
  }
  return n;
}

var numberOfAppereances = spellCheck("xQc is my favorite streamer", "e");
console.log(numberOfAppereances);

//peti zadatak

function indexSpellCheck(string, letter) {
  for (i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      result = i;
      break;
    } else result = -1;
  }
  return result;
}
var positionOfLetter = indexSpellCheck("xQc is my favorite streamer", "c");
console.log(positionOfLetter);

//sesti zadatak
function indexSpellCheckReversed(string, letter) {
  for (i = string.length - 1; i > 0; i--) {
    if (string[i] === letter) {
      result = i;
      break;
    } else result = -1;
  }
  return result;
}
var positionOfLetterReversed = indexSpellCheckReversed(
  "xQc is my favorite streamer",
  "r"
);
console.log(positionOfLetterReversed);

//sedmi zadaatak

function stringToArray(string) {
  var array = [];
  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      array[i] = null;
    } else array[i] = string[i];
  }
  return array;
}

var arrayTest = stringToArray("Best day of my life");
console.log(arrayTest);

//osmi zadatak

function primeNumber(number) {
  var result = 0;
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      result++;
    } else continue;
  }
  result == 0
    ? (verdict = `${number} is a prime number`)
    : (verdict = `${number} is not a prime number`);
  return verdict;
}

var isThisAPrimeNumber = primeNumber(13);
console.log(isThisAPrimeNumber);

//deveti zadatak

function switchTheSpace(string, separator) {
  var sum = "";

  if (separator === undefined) {
    separator = "-";
  } else separator === separator;

  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      sum += separator;
      //   console.log(sum);
    } else {
      sum += string[i];
      //   console.log(sum);
    }
  }
  return sum;
}

var improvedString = switchTheSpace("best day of my life");
console.log(improvedString);

//deseti zadatak

function add3Dots(string) {
  var newString = "";
  for (i = 0; i < string.length; i++) {
    newString += string[i];
  }
  newString += "...";
  return newString;
}

var myDeepString = add3Dots("best day of my life");
console.log(myDeepString);

//jedanaesti zadatak
function stringToNumber(array) {
  var newArray = [];
  var index = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === String(array[i])) {
      newArray[index] = Number(array[i]);
      index++;
    } else continue;
  }
  return newArray;
}
var array11 = ["1", "21", undefined, "42", "1e+3", Infinity];
var numberArray = stringToNumber(array11);
console.log(numberArray);

//dvanaesti zadatak
function retirement(yearOfBirth, gender) {
  if (gender === "male") {
    years = 65 - (2022 - yearOfBirth);

    if (years > 0) {
      result = `You have ${years} years until you retire`;
    } else if (years <= 0) {
      result = `You have already retired`;
    }
  } else if (gender === "female") {
    years = 60 - (2022 - yearOfBirth);

    if (years > 0) {
      result = `You have ${years} years until you retire`;
    } else if (years <= 0) {
      result = `You have already retired`;
    }
  }
  return result;
}

var amIRetired = retirement(1997, "male");
console.log(amIRetired);

//trinaesti zadatak
function tellMeANumber(number) {
  if (number === 1) {
    number = number + "st";
  } else if (number === 2) {
    number = number + "nd";
  } else if (number === 3) {
    number = number + "rd";
  } else if (number > 3) {
    number = number + "th";
  }
  return number;
}

var howDoYouWriteThisNumber = tellMeANumber(1150);
console.log(howDoYouWriteThisNumber);
