// prvi zadatak

var sum = 0;

for (i = 0; i < 11; i++) {
  sum += i;
}
console.log("The sum of first ten natural numbers is " + sum);

//drugi zadatak

var number = 6;
var cubeNumber = 1;

for (i = 0; i < 3; i++) {
  cubeNumber *= number;
}
console.log(`The cube of ${number} is equal to ${cubeNumber}`);

//treci zadatak

var number = 6;
var factorial = 1;

for (i = number; i > 0; i--) {
  factorial *= i;
}
console.log(`The facotrial of ${number} is equal to ${factorial}`);

//cetvrti zadatak
var sum = 0;
var terms = 7;

for (i = 1; i <= terms; i++) {
  number = 2 * i;
  sum += number;
  console.log(number);
}
console.log(`The sum of given integers is ${sum}`);

//peti zadatak
var number5 = 2234465848;
var givenNumber = number5; //postoji samo zbog console.log-a
var stringNumber5 = number5 + ""; // sluzi za racunanje duzine stringa cime odredjuje max vrednost brojaca
var sum5 = 0;
for (i = 10; i <= 10 ** stringNumber5.length; i *= 10) {
  digit = number5 % i;
  sum5 += digit / (i / 10);
  number5 = number5 - digit;
}
console.log(`The sum of digits of number ${givenNumber} is equal to ${sum5}`);

//sesti zadatak

var givenWord = "Eclip542ser65at";
var numberOfLetters = 0;
for (i = 0; i < givenWord.length; i++) {
  if (
    givenWord[i] == 0 ||
    givenWord[i] == 1 ||
    givenWord[i] == 2 ||
    givenWord[i] == 3 ||
    givenWord[i] == 4 ||
    givenWord[i] == 5 ||
    givenWord[i] == 6 ||
    givenWord[i] == 7 ||
    givenWord[i] == 8 ||
    givenWord[i] == 9
  ) {
    continue;
  } else numberOfLetters++;
}
console.log(
  `The number of letters in the word ${givenWord} is equal to ${numberOfLetters}`
);
//sedmi zadatak
var letter = "c";
var array = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
var element;
for (j = 0; j < array.length; j++) {
  element = array[j];
  if (element == letter) {
    console.log(`This array contains letter ${letter} and it's index is ${j}`);
  } else continue;
}
