//prvi zadatak
function insertStringIntoString(string, insertedString, position) {
  var newString = "";
  insertedString = " " + insertedString + " ";
  var index = 0;
  if (position === undefined) {
    position = 0;
  }
  for (i = 0; i <= string.length; i++) {
    if (i === position) {
      newString += insertedString;
    } else {
      newString += string[index];
      index++;
    }
  }
  return newString;
}

var sentence = insertStringIntoString("Best day of my life", "NOPE", 4);
console.log(sentence);

//drugi zadatak

var array2 = [NaN, 0, 15, false, -22, "", undefined, 47, null];
function joinStringEmpire(array) {
  var string = "";
  for (i = 0; i < array.length; i++) {
    var check = isNaN(array[i]);
    if (
      array[i] == undefined ||
      array[i] == null ||
      //array[i] == NaN ||   //zasto NaN ne radi?
      check === true ||
      array[i] == Infinity
    ) {
      continue;
    } else string += array[i];
  }
  return string;
}

var myNewString = joinStringEmpire(array2);
console.log(myNewString);

//treci zadatak

var array3 = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function noFalsyValuesHere(array) {
  var arrayNew3 = [];
  var index = 0;

  for (i = 0; i < array.length; i++) {
    var check = isNaN(array[i]);
    if (
      array[i] === false ||
      array[i] === 0 ||
      array[i] === "" ||
      array[i] === undefined ||
      array[i] === null ||
      //array[i] === NaN
      check === true
    ) {
      continue;
    } else {
      arrayNew3[index] = array[i];

      index++;
    }
  }
  return arrayNew3;
}

var onlyTruthyValues = noFalsyValuesHere(array3);
console.log(onlyTruthyValues);

//cetvrti zadatak

function reverseANumber(number) {
  number = number + "";
  var string = "";
  for (i = number.length - 1; i >= 0; i--) {
    string += number[i];
  }
  string = String(string);
  return string;
}

var myNumber = reverseANumber(12344567889);
console.log(myNumber);

//peti zadatak

function lastElement(array, n) {
  var result = [];
  var index = n - 1;
  if (n == undefined) {
    n = array.length - 1;
    result = array[n];
  } else {
    for (i = array.length - 1; i > array.length - 1 - n; i--) {
      result[index] = array[i];
      index--;
    }
  }
  return result;
}

var whatIsTheLastElement = lastElement([7, 9, 0, 2, 4, 5], 2);
console.log(whatIsTheLastElement);

//sesti zadatak
function preDefined(numberOfElements, value) {
  var arrayPre = [];
  if (value === undefined) {
    value = null;
  }
  for (i = 0; i < numberOfElements; i++) {
    arrayPre[i] = value;
  }
  return arrayPre;
}

var array6 = preDefined(2);
console.log(array6);

//sedmi zadatak
function perfectNumber(number) {
  var index = 0;
  var array = [];
  var sum = 0;
  for (i = 1; i <= number; i++) {
    if (number % i == 0) {
      array[index] = i;
      index++;
      sum += i;
    } else continue;
  }
  console.log(array);
  if (number === sum / 2) {
    result = `The number ${number} is a perfect number!`;
  } else result = `The number ${number} is not a perfect number!`;

  return result;
}

var myPerfectNumber = perfectNumber(8128);
console.log(myPerfectNumber);

//osmi zadatak

//a
//prvobitno odradjen program, postojao je problem ukoliko ne bih uneo razmak na kraju stringa

// function findMyWord(string, word) {
//   var sum = "";
//   var stringArray = [];
//   var index = 0;
//   for (i = 0; i < string.length; i++) {
//     if (string[i] == " ") {
//       stringArray[index] = sum;
//       index++;
//       sum = "";
//     } else {
//       sum += string[i];
//     }
//   }
//   console.log(stringArray);
//   var numOfApp = 0;
//   for (i = 0; i < stringArray.length; i++) {
//     if (word == stringArray[i]) {
//       numOfApp++;
//     } else continue;
//   }

//   numOfApp > 1
//     ? (result = `The word ${word} was found ${numOfApp} times`)
//     : (result = `The word ${word} was found ${numOfApp} time`);
//   return result;
// }

// var myWord = findMyWord("The quick brown fox ", "fox");
// console.log(myWord);

//b
//malo izmenjen program, ne mora da se ubacuje razmak

function findMyWord(string, word) {
  var sum = "";
  var stringArray = [];
  var index = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == " " && i < string.length - 1) {
      stringArray[index] = sum;
      index++;
      sum = "";
    } else if (string[i] != " " && i < string.length - 1) {
      sum += string[i];
    } else if ((i = string.length - 1)) {
      sum += string[string.length - 1];
      stringArray[index] = sum;
    }
  }
  console.log(stringArray);
  var numOfApp = 0;
  for (i = 0; i < stringArray.length; i++) {
    if (word == stringArray[i]) {
      numOfApp++;
    } else continue;
  }

  numOfApp > 1
    ? (result = `The word ${word} was found ${numOfApp} times`)
    : (result = `The word ${word} was found ${numOfApp} time`);
  return result;
}

var myWord = findMyWord("The quick brown fox", "fox");
//var myWord = findMyWord("aa bb cc dd aa", "aa");

console.log(myWord);
//deveti zadatak

//za ovaj zadatak sam shvatio da treba u potpunosti sakriti username mejla, jer on je poseban, a domen ima vecina ljudi isti

function hideMail(mailAddress) {
  var sum = [];
  for (i = 0; i < mailAddress.length; i++) {
    sum[i] = mailAddress[i];
  }

  for (j = 0; j < sum.length; j++) {
    if (sum[j] == "@") {
      break;
    } else {
      sum[j] = "*";
    }
  }
  var string = "";
  for (k = 0; k < sum.length; k++) {
    string += sum[k];
  }
  return string;
}

var incognitoMail = hideMail("aojdanic97@gmail.com");
console.log(incognitoMail);

//deseti zadatak

var array10 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
function mostFrequentItem(array) {
  var frequencyArray = [];
  for (i = 0; i < array.length; i++) {
    var frequency = 0;
    var item = array[i];
    for (j = 0; j < array.length; j++) {
      if (item == array[j]) {
        frequency++;
      } else continue;
    }
    frequencyArray[i] = frequency;
  }
  var max = 0;
  var max_i = 0;
  for (i = 0; i < frequencyArray.length; i++) {
    if (frequencyArray[i] > max) {
      max = frequencyArray[i];
      max_i = i;
    } else continue;
  }
  result = `The item ${array[max_i]} is the most frequent item of the array`;
  return result;
}

var item = mostFrequentItem(array10);
console.log(item);
