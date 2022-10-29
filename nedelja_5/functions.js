//prvi zadatak

function maxNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    result = firstNumber;
  } else result = secondNumber;
  return result;
}

var maksimum = maxNumber(36, 50);
console.log(maksimum);

//drugi zadatak

function isOddNumber(number) {
  return number % 2 === 0 ? false : true;
}

var oddNumber = isOddNumber(17);
console.log(oddNumber);

//treci zadatak
var numberOfDigits = 0;
function threeDigitNumber(number) {
  //return (number + "").length === 3 ? true : false;
  number += "";
  for (i = 0; i < number.length; i++) {
    if (
      number[i] == 0 ||
      number[i] == 1 ||
      number[i] == 2 ||
      number[i] == 3 ||
      number[i] == 4 ||
      number[i] == 5 ||
      number[i] == 6 ||
      number[i] == 7 ||
      number[i] == 8 ||
      number[i] == 9
    ) {
      numberOfDigits++;
    } else continue;
  }
  return numberOfDigits === 3 ? true : false;
}

var threeNumber = threeDigitNumber(4.59);
console.log(threeNumber);

//cetvrti zadatak

function arithmeticMean(a, b, c, d) {
  var result = (a + b + c + d) / 4;
  return result;
}

var mean = arithmeticMean(5, 8, 14, 23);
console.log(mean);

//peti zadatak
var sum1 = "";
var sum;
var sum2 = "";

function square(size) {
  for (i = 0; i < size; i++) {
    sum1 += "*";
  }
  console.log(sum1);

  for (i = 0; i < size - 2; i++) {
    sum = "*";
    for (j = 0; j < size - 2; j++) {
      sum += " ";
    }
    sum += "*";
    console.log(sum);
  }
  for (i = 0; i < size; i++) {
    sum2 += "*";
  }

  console.log(sum2);
}

square(5); //dobijam kvadrat, samo sto je probem sto u terminalu on grupise iste poruke, na chrome-u sam uspeo u konzoli da konfigurisem da to ne radi, i izgleda kako treba. E sad, kontam da ovo ima bolji nacin da se uradi, ali i ovo funkcionise

//sesti zadatak
var sum1 = "";
var sum2 = "";
var sum3 = "";

function chart(value1, value2, value3) {
  for (i = 0; i < value1; i++) {
    sum1 += "*";
  }
  console.log(sum1);
  for (i = 0; i < value2; i++) {
    sum2 += "*";
  }
  console.log(sum2);
  for (i = 0; i < value3; i++) {
    sum3 += "*";
  }
  console.log(sum3);
}
var horizontalLine = chart(5, 3, 7);

//sedmi zadatak
var numberOfDigits = 0;
function digitNumber(number) {
  number = number + "";
  for (i = 0; i < number.length; i++) {
    if (
      number[i] == 0 ||
      number[i] == 1 ||
      number[i] == 2 ||
      number[i] == 3 ||
      number[i] == 4 ||
      number[i] == 5 ||
      number[i] == 6 ||
      number[i] == 7 ||
      number[i] == 8 ||
      number[i] == 9
    ) {
      numberOfDigits++;
    } else continue;
  }
  return numberOfDigits;
}

var digNumber = digitNumber(58965.68);
console.log(digNumber);

//osmi zadatak
var a = [2, 4, 7, 8, 7, 7, 1, 7, 7, 7, 7];
var numberOfApp = 0;
function numberOfAppereances(e) {
  for (i = 0; i < a.length; i++) {
    if (e === a[i]) {
      numberOfApp++;
    } else continue;
  }
  return numberOfApp;
}

var appereances = numberOfAppereances(8);
console.log(appereances);

//deveti zadatak
var array = [2, 4, 7, 8, 7, 7, 1, 7, 7, 7, 7, 8, 2, 6, 4, 10];
var sum = 0;

function sumOdd(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      sum += array[i];
    } else continue;
  }
  return sum;
}

var stagod = sumOdd(array);
console.log(stagod);

//deseti zadatak
var numberofAs = 0;
function aorA(string) {
  for (i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      numberofAs++;
    } else continue;
  }
  return numberofAs;
}

var somestring = aorA("albuqAuerquea");
console.log(somestring);

//jedanaesti zadatak
var sum = "";

function concatenate(string, numberofrepetitions) {
  for (i = 0; i < numberofrepetitions; i++) {
    sum += string;
  }
  return sum;
}

console.log(concatenate("abc", 4));
