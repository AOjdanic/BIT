/*
// prvi zadatak

for (i = 0; i < 16; i++) {
  if (i % 2 === 0) {
    console.log("This number is even: " + i);
  } else console.log("This number is odd: " + i);
}

// drugi zadatak
var broj = 0;
for (i = 0; i < 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    broj += i;
  }
}
console.log(broj);

// treci zadatak

for (i = 0; i < 11; i++) {
  kvadratniBroj = i ** 2;
  console.log(kvadratniBroj);
}

//cetvrti zadatak

nizCelihBrojeva = [2, 3, 1, 53, 47, 8, 9, 11, 25, 10];
var suma = 0;
var proizvod = 1;
for (i = 0; i < nizCelihBrojeva.length; i++) {
  suma += nizCelihBrojeva[i];
  proizvod *= nizCelihBrojeva[i];
}
console.log(
  "Suma elemenata niza je " + suma,
  "Proizvod elemenata niza je " + proizvod
);

// peti zadatak

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var string = "";
for (i = 0; i < x.length; i++) {
  string += x[i];
}
console.log(string);

// sesti zadatak

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
];

for (i = 0; i < a.length; i++) {
  for (j = 0; j < a[i].length; j++) console.log(a[i][j]);
}

// sedmi zadatak
let kvadratBroja;
sumaKvadrataBrojeva = 0;
for (i = 0; i < 21; i++) {
  kvadratBroja = i ** 2;
  sumaKvadrataBrojeva += kvadratBroja;
}

console.log(sumaKvadrataBrojeva);

//osmi zadatak

Grades = [80, 77, 88, 95, 68];
var sumOfGrades = 0;
for (i = 0; i < Grades.length; i++) {
  sumOfGrades += Grades[i];
}
avgGrade = sumOfGrades / Grades.length / 100;
avgGRadePercent = avgGrade * 100;
console.log(avgGrade, avgGRadePercent);
if (avgGRadePercent < 60) {
  console.log("The average grade is F");
} else if (avgGRadePercent >= 60 && avgGRadePercent < 70) {
  console.log("The average grade is D");
} else if (avgGRadePercent >= 60 && avgGRadePercent < 70) {
  console.log("The average grade is D");
} else if (avgGRadePercent >= 70 && avgGRadePercent < 80) {
  console.log("The average grade is C");
} else if (avgGRadePercent >= 80 && avgGRadePercent < 90) {
  console.log("The average grade is B");
} else if (avgGRadePercent >= 90 && avgGRadePercent < 100) {
  console.log("The average grade is A");
}

//deveti zadatak

for (i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0 && i % 3 != 0) {
    console.log("Buzz");
  } else console.log(i);
}*/

// loops 2 exercises

//prvi zadatak
var a = [5, -4.2, 3, 7];
var e = 3;

for (i = 0; i < a.length; i++) {
  if (e == a[i]) {
    console.log("YES");
  } else continue;
}

//drugi zadatak

var inputArray1 = [-3, 11, 5, 3.4, -8];
//inputArray2=[-3, 22, 10, 6.8, -8];
for (i = 0; i < inputArray1.length; i++) {
  if (inputArray1[i] > 0) {
    inputArray1[i] = inputArray1[i] * 2;
  }
}

console.log(inputArray1);

// treci zadatak

var arrayNew = [4, 2, 2, -1, 6];
var minimum = arrayNew[0];
var index = 0;
for (i = 0; i < arrayNew.length; i++) {
  if (minimum > arrayNew[i]) {
    minimum = arrayNew[i];
    index = i;
  }
}

console.log(minimum, index);

// cetvrti zadatak

var inputArray = [4, 2, 2, -1, 6];
var minimum = inputArray[0];
var secondMinimum = inputArray[0];
for (i = 0; i < inputArray.length; i++) {
  if (minimum > inputArray[i]) {
    minimum = inputArray[i];
  }
  for (j = 0; j < inputArray.length; j++) {
    if (inputArray[j] > minimum && inputArray[j] < secondMinimum) {
      secondMinimum = inputArray[j];
    }
  }
}
console.log(minimum, secondMinimum);

// peti zadatak
positiveArray = [3, 11, -5, -3, 2];
//console.log(positiveArray[positiveArray.length - 1]);
var sum = 0;
for (i = 0; i < positiveArray.length; i++) {
  if (positiveArray[i] > 0) {
    sum += positiveArray[i];
  }
}
console.log(sum);

//sesti zadatak
//a) laksi nacin, kada sam skontao da mogu da koristim continue
//ovde u sustini radi malo dupli posao, jer ce dva puta proci kroz niz (u smislu do sredine i od sredine, tako da mozda nije bas naj efficient ali radi)
var symArray = [2, 4, -2, 7, -2, 4, 2];
//var symArray = [3, 4, 12, 8];
var counter = 0;
for (i = 0; i < symArray.length; i++) {
  if (symArray[i] == symArray[symArray.length - 1 - i]) {
    counter++;
  }
}
counter == symArray.length
  ? console.log("The array is symmetric")
  : console.log("The array isn't symmetric");

//b) moj originalni, zamrseni nacin xD
// var b = 0;
// for (
//   i = 0;
//   symArray.length % 2 == 0
//     ? i < symArray.length / 2
//     : i < (symArray.length + 1) / 2;
//   i++
// ) {
//   if (symArray[i] == symArray[symArray.length - 1 - i]) {
//     b++;
//   }
// }

// if (b == (symArray.length + 1) / 2 || b == symArray.length / 2) {
//   console.log("This array is symmetric");
// } else console.log("This array isn't symmetric");

//sedmi zadatak
var firstArray = [4, 5, 6, 2];
var secondArray = [3, 8, 11, 9];
var outputArray = [];

for (i = 0; i < firstArray.length + secondArray.length; i += 2) {
  outputArray[i] = firstArray[i - i / 2];
  outputArray[i + 1] = secondArray[i - i / 2];
}

console.log(outputArray);

//osmi zadatak

var firstArray = [4, 5, 6, 2];
var secondArray = [3, 8, 11, 9];
var outputArray = [];
for (i = 0; i < firstArray.length; i++) {
  outputArray[i] = firstArray[i];
}
for (j = 0; j < secondArray.length; j++) {
  outputArray[j + firstArray.length] = secondArray[j];
}

console.log(outputArray);
//deveti zadatak
var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var outArray = [];
var index = 0;
for (i = 0; i < a.length; i++) {
  if (a[i] != e) {
    outArray[index] = a[i];
    index++;
  } else continue;
}

console.log(outArray);
//deseti zadatak

var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var exitArray = [];
var index = 0;

if (p <= a.length) {
  for (i = 0; i <= a.length; i++) {
    if (i != p) {
      exitArray[i] = a[index];
      index++;
    } else {
      exitArray[i] = e;
    }
  }
  console.log(exitArray);
} else console.log("ERROR");
