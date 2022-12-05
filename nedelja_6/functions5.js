//prvi zadatak

var array = [3, 500, 12, 149, 53, 414, 1, 19];

function replaceElement(array) {
  var maximum = array[0];
  var minimum = array[0];

  for (i = 0; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    } else continue;
  }
  for (j = 0; j < array.length; j++) {
    if (minimum > array[j]) {
      minimum = array[j];
    } else continue;
  }

  for (k = 0; k < array.length; k++) {
    if (array[k] === maximum) {
      array[k] = minimum;
    } else if (array[k] === minimum) {
      array[k] = maximum;
    } else array[k] = array[k];
  }
  return array;
}

console.log(replaceElement(array));

//drugi zadatak

var array2 = [3, 500, -10, 149, 53, 414, 1, 19];

function divideAndAdd(array) {
  var outputArray = [];
  for (i = 0; i < array.length; i++) {
    outputArray[i] = array[i] / 2 + 5;
    if (outputArray[i] === 0) {
      outputArray[i] = 20;
    }
  }
  return outputArray;
}

console.log(divideAndAdd(array2));

//treci zadatak

function students(namesArray, pointsArray) {
  var gradesArray = [];
  for (i = 0; i < namesArray.length; i++) {
    if (pointsArray[i] >= 51 && pointsArray[i] < 60) {
      gradesArray[i] = 6;
    } else if (pointsArray[i] >= 61 && pointsArray[i] < 70) {
      gradesArray[i] = 7;
    } else if (pointsArray[i] >= 71 && pointsArray[i] < 80) {
      gradesArray[i] = 8;
    } else if (pointsArray[i] >= 81 && pointsArray[i] < 90) {
      gradesArray[i] = 9;
    } else if (pointsArray[i] >= 91 && pointsArray[i] <= 100) {
      gradesArray[i] = 10;
    }
    if (pointsArray[i] >= 51) {
      console.log(
        `${namesArray[i]} acquired ${pointsArray[i]} points and earned ${gradesArray[i]}`
      );
    } else {
      console.log(
        `${namesArray[i]} acquired ${pointsArray[i]} points and failed to complete the exam`
      );
    }
  }
}

students(
  ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
  [50, 39, 63, 72, 99, 51, 83, 59]
);

//cetvrti zadatak

function sort(array) {
  var outputArray = [];
  var sortedArray = [];
  var index = 0;
  var element;
  var maximum = array[0];
  for (i = 0; i < array.length; i++) {
    if (maximum < array[i]) {
      maximum = array[i];
    }

    minimum = maximum;
  }
  for (j = 0; j < array.length; j++) {
    for (i = 0; i < array.length; i++) {
      if (minimum > array[i]) {
        minimum = array[i];
        element = array[i];
      } else continue;
    }
    for (k = 0; k < array.length; k++) {
      if (array[k] == element) {
        delete array[k];
      } else continue;
    }
    console.log(minimum);
    sortedArray[index] = minimum;
    index++;
    minimum = maximum;
  }
  console.log(sortedArray);
  for (i = 0; i < array.length; i++) {
    outputArray[i] = sortedArray[i] * 2;
  }
  return outputArray;
}

console.log(sort([13, 11, 15, 5, 6, 1, 8, 12]));

//peti zadatak
function sort2(array) {
  var sortedArray = [];
  var index = 0;
  var element;
  var minimum = array[0];
  for (i = 0; i < array.length; i++) {
    if (minimum > array[i]) {
      minimum = array[i];
    }

    maximum = minimum;
  }
  for (j = 0; j < array.length; j++) {
    for (i = 0; i < array.length; i++) {
      if (maximum < array[i]) {
        maximum = array[i];
        element = array[i];
      } else continue;
    }
    for (k = 0; k < array.length; k++) {
      if (array[k] == element) {
        delete array[k];
      } else continue;
    }
    console.log(maximum);
    sortedArray[index] = maximum;
    index++;
    maximum = minimum;
  }
  return sortedArray;
}

console.log(sort2([13, 11, 15, 5, 6, 1, 8, 12]));

//sesti zadatak

function addAndSubtract(range) {
  var sum = 0;
  for (i = 1; i <= range; i++) {
    if (i % 2 === 0) {
      sum += i;
    } else continue;
  }
  for (j = 1; j <= range / 2; j++) {
    if (j % 2 !== 0) {
      sum -= j;
    }
  }
  result = sum * 12.5;
  return result;
}

console.log(addAndSubtract(1000));

//sedmi zadatak

function twoLetter(array) {
  var index = 0;
  var outArray = [];
  var string = "";
  for (i = 0; i < array.length; i++) {
    if (array[i] != Number(array[i]) && array[i] != true) {
      outArray[index] = array[i];
      index++;
    } else continue;
  }

  for (i = 0; i < outArray.length; i++) {
    if (outArray[i].length < 2) continue;
    else {
      string += outArray[i][0] + outArray[i][1];
    }
  }
  return string;
}

console.log(
  twoLetter([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A",
  ])
);

//osmi zadatak

//a
function reverseString(sentence) {
  var outString = "";
  for (i = 0; i < sentence.length; i++) {
    outString += sentence[sentence.length - 1 - i];
  }
  return outString;
}

console.log(reverseString("Belgrade Institute of Technology"));

//b
function reverseString2(sentence) {
  var outString = "";
  for (i = sentence.length - 1; i >= 0; i--) {
    outString += sentence[i];
  }
  return outString;
}

console.log(reverseString2("Belgrade Institute of Technology"));

//deveti zadatak

function combinations(numberOne, numberTwo) {
  var index = 0;
  var outArray = [];
  var sum = "";
  var greaterNumber;
  var lesserNumber;

  numberOne > numberTwo
    ? (greaterNumber = numberOne)
    : (greaterNumber = numberTwo);
  numberOne < numberTwo
    ? (lesserNumber = numberOne)
    : (lesserNumber = numberTwo);
  for (i = lesserNumber; i <= greaterNumber; i++) {
    sum = "";
    sum += i;
    for (j = lesserNumber; j <= greaterNumber; j++) {
      if (j == i) continue;
      else {
        sum += "," + j;
      }
      outArray[index] = sum;
      index++;
      sum = "" + i;
    }

    console.log(outArray);
    outArray = [];
    index = 0;
  }
  return outArray;
}
console.log(combinations(1, 7));

//deseti zadatak

function primeNumber(number) {
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      result = `${number} is not a prime number`;
      break;
    } else result = `${number} is a prime number`;
  }
  return result;
}

console.log(primeNumber(15));

//jedanaesti zadatak

function palindrome(string) {
  var sum = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] == " ") continue;
    else {
      sum += string[i];
    }
    //console.log(sum);
  }
  for (i = 0; i < sum.length; i++) {
    if (sum[i] == sum[sum.length - 1 - i]) {
      result = `string is palindrome`;
    } else {
      result = `string is not a palindrome`;
      break;
    }
  }
  return result;
}

console.log(palindrome("eye"));

//dvanaesti zadatak

function greatestCommonDivisor(number1, number2) {
  for (i = 1; i < number1; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
      result = i;
    } else continue;
  }
  return result;
}
console.log(greatestCommonDivisor(81, 9));

//
