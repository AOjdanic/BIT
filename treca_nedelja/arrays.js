//prvi zadatak

const monthsOfYear = [
  "january",
  "febraury",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

console.log(monthsOfYear[5], monthsOfYear[9], monthsOfYear[0]);

//drugi zadatak

const daysInWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(daysInWeek[6]);

//treci zadatak

const newArray = [2, -4, 5, -2, -11];

// for (let i = 0; i < newArray.length; i++) {
//   if (newArray[i] < 0) {
//     console.log(newArray[i]);
//   } else continue;
// }

if (newArray[0] < 0) {
  console.log(newArray[0]);
}
if (newArray[1] < 0) {
  console.log(newArray[1]);
}
if (newArray[2] < 0) {
  console.log(newArray[2]);
}
if (newArray[3] < 0) {
  console.log(newArray[3]);
}
if (newArray[4] < 0) {
  console.log(newArray[4]);
}

//cetvrti zadatak

const indexArray = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log(indexArray[3], indexArray[6]);

//peti zadatak
const multipleArray = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

console.log(multipleArray[0][3]);
console.log(multipleArray[0].indexOf(24));

console.log(multipleArray[2]);
console.log(multipleArray[2][1]);
