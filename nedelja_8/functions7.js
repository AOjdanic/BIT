//prvi zadatak

function tellFortune(
  numberOfChildren,
  partnerName,
  geographicLocation,
  jobTitle
) {
  console.log(
    `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`
  );
}

tellFortune(4, "Kristina", "Belgrade", "programmer");

//drugi zadatak

function calculateDogAge(age, conversionRate) {
  var dogAge = age * conversionRate;
  var result = `Your dog is ${dogAge} years old in dog years!`;
  return result;
}

console.log(calculateDogAge(5, 7));

//treci zadatak - ne razumem zadatak uopste, sta se trazi?

function calculateSupply(age, amountPerDay) {
  var maxAge = 100;
  var amountForRestOfLife = (maxAge - age) * amountPerDay * 365;
  //console.log(amountForRestOfLife);
  var approxAmountForRestOfLife = parseInt(amountForRestOfLife);
  var result = `You will need ${approxAmountForRestOfLife} to last you until the ripe old age of ${maxAge}`;
  return result;
}

console.log(calculateSupply(25, 412.37));

//cetvrti zadatak

//a)
function celsiusToFahrenheit(temperatureInCelsius) {
  var temperatureInFahrenheit = 1.8 * temperatureInCelsius + 32;
  return (result = `${temperatureInCelsius} °C is ${temperatureInFahrenheit} °F`);
}

console.log(celsiusToFahrenheit(25));

//b)

function fahrenheitToCelsius(temperatureInFahrenheit) {
  var temperatureInCelsius = (temperatureInFahrenheit - 32) / 1.8;
  return (result = `${temperatureInFahrenheit} °F is ${temperatureInCelsius} °C`);
}

console.log(fahrenheitToCelsius(77));

//peti zadatak
function validatePassword(password) {
  //duzina reci

  var passwordLength;
  if (password.length < 6 || password.length > 24) {
    passwordLength = false;
    console.log(`password must be between 6 and 24 characters`);
  } else passwordLength = true;

  //velika slova

  var capitalArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var counter = 0;
  var capitalLetter;
  for (i = 0; i < capitalArray.length; i++) {
    for (j = 0; j < password.length; j++) {
      if (password[j] == capitalArray[i]) {
        counter++;
        break;
      } else continue;
    }
  }
  if (counter == 0) {
    capitalLetter = false;
    console.log(`You must have at least one capital letter`);
  } else capitalLetter = true;

  //mala slova

  var notCapitalArray =
    "" +
    [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

  var counter2 = 0;
  var smallLetter;
  for (i = 0; i < notCapitalArray.length; i++) {
    for (j = 0; j < password.length; j++) {
      if (password[j] == notCapitalArray[i]) {
        counter2++;
        break;
      } else continue;
    }
  }
  if (counter2 == 0) {
    smallLetter = false;
    console.log(`You must have at least one small letter`);
  } else smallLetter = true;

  //brojevi

  var counter3 = 0;
  var digitPass;
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (i = 0; i < 10; i++) {
    for (j = 0; j < password.length; j++) {
      if (password[j] == i) {
        counter3++;
        break;
      } else continue;
    }
  }
  if (counter3 == 0) {
    digitPass = false;
    console.log(`You must have at least one digit`);
  } else digitPass = true;

  //ponavljanje karaktera

  var repeatCharacters;
  for (i = 0; i < password.length; i++) {
    var letterOne = password[i - 2];
    var letterTwo = password[i - 1];
    var letterCurrent = password[i];
    //console.log(letterCurrent, letterOne, letterTwo);
    if (letterCurrent === letterOne && letterCurrent === letterTwo) {
      repeatCharacters = true;
      console.log(`there can't be three same characters in a row`);
      break;
    } else repeatCharacters = false;
  }
  //specijalni karakteri

  var specialArray = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "=",
    "_",
    "-",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    '"',
    "'",
    "?",
    "<",
    ">",
    ",",
    ".",
  ];

  var specialChar = true;
  for (i = 0; i < password.length; i++) {
    if (
      !(
        !!capitalArray.includes(password[i]) ||
        !!notCapitalArray.includes(password[i]) ||
        !!numbersArray.includes(password[i])
      )
    ) {
      if (!!specialArray.includes(password[i])) {
        specialChar = true;
      } else {
        specialChar = false;
        console.log(`The password contains unsupported characters`);
        break;
      }
    } else {
      specialChar = true;
    }
  }

  //konacna evaluacija

  var result = "";
  if (
    passwordLength == true &&
    capitalLetter == true &&
    smallLetter == true &&
    digitPass == true &&
    repeatCharacters == false &&
    specialChar == true
  ) {
    result = `The password is OK`;
  } else result = `The password is not supported`;

  return result;
}

console.log(validatePassword("Fgh93@"));

//sesti zadatak

function primeNumbers(number) {
  var numberArray = [];
  var k = 0;
  for (i = 2; i <= number; i++) {
    numberArray[k] = i;
    k++;
  }
  //console.log(numberArray);
  var counter = 0;
  var numberOfPrimes = 0;
  for (j = 0; j < numberArray.length; j++) {
    counter = 0;
    for (l = 2; l < numberArray[j]; l++) {
      if (numberArray[j] % l == 0) {
        counter++;
      }
    }
    if (counter == 0) {
      //console.log(numberArray[j]);
      numberOfPrimes++;
    }
  }
  return numberOfPrimes;
}

console.log(primeNumbers(20));

//sedmi zadatak

function diamondArrays(input) {
  var index = 0;
  var diamondArray = [];
  for (i = 1; i <= input; i++) {
    for (j = 0; j < i; j++) {
      diamondArray[index] = i;
      index++;
    }
  }
  for (i = input - 1; i >= 1; i--) {
    for (j = 0; j < i; j++) {
      diamondArray[index] = i;
      index++;
    }
  }
  return diamondArray;
}

console.log(diamondArrays(5));

//elegantniji nacin

function diamondArrays2(input2) {
  var index2 = 0;
  var diamondArray2 = [];
  for (i = 1; i <= input2; i++) {
    for (j = 0; j < i; j++) {
      diamondArray2[index2] = i;
      diamondArray2[input2 ** 2 - 1 - index2] = i;
      index2++;
    }
  }
  return diamondArray2;
}

console.log(diamondArrays2(5));

//dodatna dva zadataka

//missing numbers

function sumMissingNumbers(array8) {
  var sum8 = 0;

  array8 = array8.sort(function (a, b) {
    return a - b;
  });
  minimum = array8[0];
  maximum = array8[array8.length - 1];
  for (i = minimum; i < maximum; i++) {
    if (!array8.includes(i)) {
      sum8 += i;
    }
  }
  return sum8;
}

console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]));
console.log(sumMissingNumbers([1, 3, 5, 7, 10]));
console.log(sumMissingNumbers([10, 7, 5, 3, 1]));

//concatenate

function canConcatenate(inputArrays, targetArray) {
  var checkArray = [];
  var checkArray1 = [];
  var reverseTargetArray = [];
  for (i = 0; i < inputArrays.length; i++) {
    for (j = 0; j < inputArrays[i].length; j++) {
      checkArray.push(inputArrays[i][j]);
      checkArray1.push(inputArrays[i][j]);
    }
  }

  checkArray = checkArray.sort(function (a, b) {
    return a - b;
  });
  checkArray1 = checkArray1.sort(function (c, d) {
    return d - c;
  });
  console.log(checkArray, checkArray1, targetArray);

  var max;
  var is_same;
  var is_same1;

  checkArray1.length > targetArray.length
    ? (max = checkArray1.length)
    : (max = targetArray.length);
  for (i = 0; i < max; i++) {
    if (checkArray[i] === targetArray[i]) {
      is_same = true;
    } else {
      is_same = false;
      break;
    }
  }
  for (i = 0; i < max; i++) {
    if (checkArray1[i] == targetArray[i]) {
      is_same1 = true;
    } else {
      is_same1 = false;
      break;
    }
  }

  // var is_same =
  //   checkArray.length == targetArray.length &&
  //   checkArray.every(function (element, index) {
  //     return element === targetArray[index];
  //   });
  // var is_same1 =
  //   checkArray1.length == targetArray.length &&
  //   checkArray1.every(function (element, index) {
  //     return element === targetArray[index];
  //   });

  return !!is_same || !!is_same1 ? true : false;
}

console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7, 6],
    ],
    [7, 6, 5, 4, 3, 2, 1]
  )
);

console.log(
  canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7], [7]], [1, 2, 3, 4, 5, 6, 7])
);
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7],
    ],
    [1, 2, 3, 4, 5, 6, 7]
  )
);
