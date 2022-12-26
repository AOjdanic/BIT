"use strict";

//1.	Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

//12345 -> 54321

const reverseNumber = (number) => {
  let reversedNumber = [];
  number += "";
  number.split("").forEach((element) => reversedNumber.unshift(element));
  return Number(reversedNumber.join(""));
};

console.log(reverseNumber(12345), typeof reverseNumber(12345));
console.log(reverseNumber(3647), typeof reverseNumber(3647));

//2.	Write a JavaScript function that returns a passed string with letters in alphabetical order.
//Note: Assume punctuation, numbers and symbols are not included in the passed string.

//“Webmaster” -> “abeemrstw”

const sortAtoZ = (string) => {
  let sortedString;
  return (sortedString = string.toLowerCase().split("").sort().join(""));
};

console.log(sortAtoZ("Webmaster"));

//3.	Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

//	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function alphabetize(string) {
  //splitting string into array with empty spaces
  let splitString = string.split(" ");

  //removing empty spaces from the array
  let splitStringNoGaps = splitString.filter((string) => {
    if (string != " ") {
      return string;
    }
  });
  //creating an empty array where i will add all of the words that will be sorted
  let stringWithSortedWords = [];
  //forEach: for each element in array, split it, sort it , join it back into a string, and then as such push it to new array
  splitStringNoGaps.forEach((element) =>
    stringWithSortedWords.push(element.split("").sort().join(""))
  );
  //return that array, but join it's elements with empty space between
  return (stringWithSortedWords = stringWithSortedWords.join(" "));
}

console.log(alphabetize("Republic of Serbia"));

//4.	Write a function to split a string and convert it into an array of words.

//	"John Snow" -> [ 'John', 'Snow' ]

const splitWords = (string) => {
  return string.split(" ");
};

console.log(splitWords("John Snow"));

//5.	Write a function to convert a string to its abbreviated form.

//	"John Snow" -> 	"John S."

const abbreviate = (string) => {
  let stringArr = string.split(" ");
  let newSecondWord = stringArr[1][0] + ".";
  let newArr = [];
  newArr.push(stringArr[0]);
  newArr.push(newSecondWord);
  return newArr.join(" ");
};
console.log(abbreviate("John Snow"));

//6.	Write a function that adds string to the left or right of string, by replacing it’s characters.

//	'0000', ‘123’, 'l' -> '0123'
//  '00000000', ‘123’, 'r' -> '12300000'

function insertString(string, insertValue, side) {
  //   if (side === "r") {
  //     string = string.split("");
  //     string.splice(
  //       string.length - insertValue.length,
  //       string.length,
  //       insertValue
  //     );
  //     string = string.join("");
  //     return string;
  //   } else if (side === "l") {
  //     string = string.split("");
  //     string.splice(0, 0 + insertValue.length, insertValue);
  //     string = string.join("");

  //     return string;
  //   }

  string = string.split("");
  string.splice(
    side === "r" ? string.length - insertValue.length : 0,
    side === "r" ? string.length : 0 + insertValue.length,
    insertValue
  );
  return string.join("");
}
console.log(insertString("0000", "123", "r"));
console.log(insertString("0000", "123", "l"));

//7.	Write a function to capitalize the first letter of a string and returns modified string.

//"js string exercises" -> "Js string exercises"

const capitalize = (string) => {
  let firstLetter = string.charAt(0).toUpperCase();
  return string.replace(string.charAt(0), firstLetter);
};

console.log(capitalize("js string exercises"));

//8.	Write a function to hide email addresses to protect them from unauthorized users.
//	"somerandomaddress@example.com" -> "somerand...@example.com"

const hideEmail = (string) => {
  const hideThis = string.substring(2, string.indexOf("@"));
  return string.replace(hideThis, "...");
};

console.log(hideEmail("aleksaojdanic2163@gmail.com"));

//9.	Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

//"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

const switchCase = (string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++)
    string[i] === string[i].toUpperCase()
      ? (newString += string[i].toLowerCase())
      : (newString += string[i].toUpperCase());

  return newString;
};

console.log(switchCase("The Quick Brown Fox"));
