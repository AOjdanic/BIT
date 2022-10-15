//prvi zadatak
const a = 5;
const b = 4;
const c = 3;

if (a === b && a === c && b === c) {
  console.log("This is a equilateral triangle");
} else if (
  (a === b && c !== a) ||
  (a === c && b !== a) ||
  (b === c && a !== b)
) {
  console.log("This is isosceles triangle");
} else {
  console.log("This is scalene triangle");
}

//drugi zadatak
const d = 6;
const e = 4;
console.log(d + e);
console.log(d - e);
console.log(d * e);
console.log(d / e);
console.log(d % e);

//treci zadatak

const inputMark1 = 75;

const inputMark2 = 65;

const grade = (inputMark1 + inputMark2) / 2;

if (grade >= 91 && grade <= 100) {
  console.log("The grade is A");
} else if (grade >= 81 && grade <= 90) {
  console.log("The grade is B");
} else if (grade >= 71 && grade <= 80) {
  console.log("The grade is C");
} else if (grade >= 61 && grade <= 70) {
  console.log("The grade is D");
} else if (grade >= 51 && grade <= 60) {
  console.log("The grade is C");
} else console.log("Student has failed the exam");

//cetvrti zadatak
const numberOfAnimals = prompt("Input the number of animals");
const typeOfAnimal = prompt("Input the type of the animal");

/*if (typeOfAnimal !== "sheep" || typeOfAnimal !== "geese")
  if (Number(numberOfAnimals) >= 2) {
    console.log(`${numberfAnimals} ${typeofAnimal}s`);
  } else console.log(`${numberOfAnimals} ${typeOfAnimal}`);
*/

if (Number(numberOfAnimals) >= 2) {
  if (
    typeOfAnimal === "sheep" ||
    typeOfAnimal === "geese" ||
    typeOfAnimal === "fish" ||
    typeOfAnimal === "tuna" ||
    typeOfAnimal === "bison"
  ) {
    console.log(`${numberOfAnimals} ${typeOfAnimal}`);
  } else console.log(`${numberOfAnimals} ${typeOfAnimal}s`);
} else console.log(`${numberOfAnimals} ${typeOfAnimal}`);

//peti zadatak

const age = prompt("Input your age");

Number(age) >= 18
  ? console.log("You are old enough to drive")
  : console.log(`You need ${18 - age} more years until you are 18`);

/*if (Number(age)>=18) {
  console.log('You are old enough to drive');
} else {
  yearsUntil18=18-age;
  console.log(`You need ${yearsUntil18} more years until you are 18`);
}*/

//sesti zadatak

const age2 = prompt("Input your age");

const myAge = prompt("Input my age");

if (Number(age2) > Number(myAge)) {
  console.log(`You are ${age2 - myAge} years older than me`);
} else if (Number(age2) < Number(myAge)) {
  console.log(`You are ${myAge - age2} years younger than me`);
} else console.log("We are the same age");

//sedmi zadatak

const firstCanineSPecies = "french bulldog";
const secondCanineSPecies = "beagle";
const thirdCanineSPecies = "german shepherd";
const fourthCanineSPecies = "golden retriever";
const fifthCanineSPecies = "Rottweilers";

const currentCanineSpecies = prompt(`Input you dog's species`);

if (
  currentCanineSpecies === fifthCanineSPecies ||
  currentCanineSpecies === secondCanineSPecies ||
  currentCanineSpecies === thirdCanineSPecies ||
  currentCanineSpecies === fourthCanineSPecies ||
  currentCanineSpecies === fifthCanineSPecies
) {
  console.log(`This dog is a ${currentCanineSpecies}`);
} else console.log(`This dog is mixed breed`);
