// prvi zadatak  //mathrandom funkcija
function quote(array1) {
  var min = Math.ceil(1);
  var max = Math.floor(7);
  var choice = Math.floor(Math.random() * (max - min) + min);

  switch (choice) {
    case 1:
      console.log(array1[0]);
      break;
    case 2:
      console.log(array1[1]);
      break;
    case 3:
      console.log(array1[2]);
      break;
    case 4:
      console.log(array1[3]);
      break;
    case 5:
      console.log(array1[4]);
      break;
    case 6:
      console.log(array1[5]);
      break;
  }
}

quote([
  '"The first draft is just you telling yourself the story."\n -Terry Pratchet',
  '"Start before you’re ready."\n -Steven Pressfield',
  '"You can’t wait for inspiration. You have to go after it with a club."\n -Jack London',
  '"I have never started a poem yet whose end I knew. Writing a poem is discovering."\n-Robert Frost',
  "\"If there's a book that you want to read, but it hasn't been written yet, then you must write it.\"\n-Toni Morrison",
  '"First, find out what your hero wants, then just follow him!"\n-Ray Bradbury',
]);

//drugi zadatak

function leapYear(year) {
  var result = "";
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 == 0) {
      result = `${year} is a leap year`;
    } else if (year % 100 == 0 && year % 400 != 0) {
      result = `${year} is not a leap year`;
    }
  } else {
    result = `${year} is not a leap year`;
  }
  return result;
}

console.log(leapYear(2400));

//treci zadatak

function consonsantsandvowels(sentence) {
  var result1 = [];
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var consonants = [
    "b",
    "q",
    "x",
    "y",
    "w",
    "v",
    "g",
    "d",
    "z",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "t",
    "f",
    "h",
    "c",
    "X",
    "Y",
    "W",
    "B",
    "V",
    "G",
    "D",
    "Z",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "R",
    "S",
    "Q",
    "T",
    "F",
    "H",
    "C",
  ];
  var numberOfConsonants = 0;
  var numberOfVowels = 0;
  for (i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
      numberOfVowels++;
    } else if (consonants.includes(sentence[i])) {
      numberOfConsonants++;
    } else continue;
  }
  result1[0] = numberOfVowels;
  result1[1] = numberOfConsonants;
  return result1;
}

console.log(
  consonsantsandvowels(
    "This has been....the greatest AND at the same time the worst year of my life!"
  )
);

//cetvrti zadatak

function arrayType(array) {
  var result = [];
  for (i = 0; i < array.length; i++) {
    result[i] = typeof array[i];
  }
  return result;
}
console.log(arrayType([1, "BOOLean", true, NaN]));

//peti zadatak

function noNumberString(array5) {
  var counter = 0;
  var resultArray5 = [];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (i = 0; i < array5.length; i++) {
    for (j = 0; j < array5[i].length; j++) {
      if (number.includes(array5[i][j])) {
        counter++;
      } else {
        continue;
      }
    }
    if (counter == 0) {
      resultArray5.push(array5[i]);
    }
    counter = 0;
  }
  return resultArray5;
}
console.log(noNumberString(["12bb", "pp", "as23s", "00sd"]));

//sesti zadatak

function data(string) {
  firstChar = string[0];
  lastChar = string[string.length - 1];
  string.length % 2 == 0
    ? (middleChar =
        "" + string[string.length / 2 - 1] + string[string.length / 2])
    : (middleChar = "" + string[(string.length - 1) / 2]);
  for (i = 0; i < string.length; i++) {
    if (string[i] == string[1] && i != 1) {
      result = `@index${i}`;
      break;
    } else result = `not found`;
  }
  resultArray = [string.length, firstChar, lastChar, middleChar, result];
  return resultArray;
}

console.log(data("Computer"));

//sedmi zadatak
function noRepeat(array7) {
  var resultArray7 = [];
  var counter = 0;
  for (i = 0; i < array7.length; i++) {
    var check = array7[i];
    for (j = 0; j < array7.length; j++) {
      if (check == array7[j]) {
        counter++;
      } else continue;
    }
    if (counter == 1) {
      resultArray7.push(check);
    }
    counter = 0;
  }
  return resultArray7;
}

console.log(noRepeat([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));
//osmi zadatak

function splitArray(array, N) {
  var index = 0;
  var subArray1 = [];
  var subArray2 = [];
  for (i = 0; i < N; i++) {
    subArray1[i] = array[i];
  }
  for (j = N; j < array.length; j++) {
    subArray2[index] = array[j];
    index++;
  }
  var finalArray = console.log(`[[${subArray1}], [${subArray2}]]`);
  return finalArray;
}
array = [2, 3, 4, 5, 6];
splitArray(array, 3);
