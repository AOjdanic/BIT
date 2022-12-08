// 1. Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.
// Examples:
// numThenChar([[1, 2, 4, 3, "a", "b"], [6, "c", 5], [7, "d"], ["f", "e", 8] ]) ➞ [[1, 2, 3, 4, 5, 6], [7, 8, "a"], ["b", "c"], ["d", "e", "f"]]
// numThenChar([[1, 2, 4.4, "f", "a", "b"], [0], [0.5, "d","X",3,"s"], ["f", "e", 8], ["p","Y","Z"], [12,18]]) ➞
// [[0, 0.5, 1, 2, 3, 4.4], [8], [12, 18, "X", "Y", "Z"], ["a", "b", "d"], ["e", "f", "f"], ["p", "s"]]

function numThenChar() {
  //prvi korak - razdvajanje clanova argumenata u dva niza,
  //jedan sa slovima drugi sa brojevima
  let numberArr = [];
  let letterArr = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (
        !!/[a-z]+/.test(arguments[i][j]) ||
        !!/[A-Z]+/.test(arguments[i][j])
      ) {
        letterArr.push(arguments[i][j]);
      } else {
        numberArr.push(arguments[i][j]);
      }
    }
  }

  //drugi korak - sortiranje nizova brojeva i slova
  numberArr.sort(function (a, b) {
    return a - b;
  });
  letterArr.sort();

  //treci korak - upisivanje sortiranih vrednosti clanova niza u argumente, sa posebno definisanim uslovom da kada se upisu svi elementi
  //iz niza brojeva, pocnu da se upisuju elementi iz niza slova

  let index = 0;
  let index2 = 0;

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (index <= numberArr.length) {
        arguments[i][j] = numberArr[index];
        index++;
      }
      if (index > numberArr.length) {
        arguments[i][j] = letterArr[index2];
        index2++;
      }
    }
  }

  //cetvrti korak - ispisivanje rezultata, pravljenjem stringa koji sadrzi argumente.
  //string se pravi pomocu template literala

  let resultText = `[`;

  for (let i = 0; i < arguments.length; i++) {
    if (i == arguments.length - 1) {
      resultText += `[${arguments[i]}]`;
    } else {
      resultText += `[${arguments[i]}],`;
    }
  }
  resultText += `]`;
  return resultText;
}

console.log(
  numThenChar([1, 2, 4, 3, "a", "b"], [6, "c", 5], [7, "d"], ["f", "e", 8])
);

console.log(
  numThenChar(
    [1, 2, 4.4, "f", "a", "b"],
    [0],
    [0.5, "d", "X", 3, "s"],
    ["f", "e", 8],
    ["p", "Y", "Z"],
    [12, 18]
  )
);

// 2. Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.
// Triangle fits if it has the same or smaller size as the hole.
// The function should return false if the triangle with that dimensions is not possible.
// Examples:
// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

function isThisTrianglePossible(sides) {
  let maxSide = sides[0];
  for (let i = 0; i < sides.length; i++) {
    if (sides[i] > maxSide) {
      maxSide = sides[i];
    }
  }

  let sumOfSmallerSides = 0;
  for (let i = 0; i < sides.length; i++) {
    sumOfSmallerSides += sides[i];
  }
  sumOfSmallerSides -= maxSide;
  if (sumOfSmallerSides > maxSide) {
    return true;
  } else return false;
}

function doesTriangleFit(triangle1, triangle2) {
  let firstTriangle = isThisTrianglePossible(triangle1);
  let secondTriangle = isThisTrianglePossible(triangle2);
  if (firstTriangle == false || secondTriangle == false) {
    return false;
  }
  triangle1.sort();
  triangle2.sort();

  for (let i = 0; i < 3; i++) {
    let side1 = triangle1[i];
    let side2 = triangle2[i];
    if (side1 > side2) {
      return false;
    }
  }
  return true;
}

console.log(doesTriangleFit([1, 2, 2], [1, 2, 2.8]));

// 3. Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign. Return false otherwise. For clarity, each letter must have a plus sign on both sides.
// Examples:
// plusSign("+f+d+c+#+f+") ➞ true
// plusSign("+d+=3=+s+") ➞ true
// plusSign("f++d+g+8+") ➞ false
// plusSign("+s+7+fg+r+8+") ➞ false

function plusSign(string) {
  let numberOfLetters = 0;
  let plusesPresent = 0;
  for (let i = 0; i < string.length; i++) {
    if (!!/[a-z]+/.test(string[i]) || !!/[A-Z]+/.test(string[i])) {
      numberOfLetters++;
      if (string[i - 1] == "+" && string[i + 1] == "+") {
        plusesPresent++;
      }
    } else continue;
  }
  if (numberOfLetters == plusesPresent) {
    return true;
  } else return false;
}

console.log(plusSign("+f+d+c+#+f+"));
console.log(plusSign("+d+=3=+s+"));
console.log(plusSign("f++d+g+8+"));
console.log(plusSign("+s+7+fg+r+8+"));

// 4. Create a function that takes a 5x5 2D array and returns true if it has at least one Bingo, and false if it doesn't.
// Only check for diagonals, horizontals and verticals.
// Examples:
// bingoCheck([
//   [45, "x", 31, 74, 87],
//   [64, "x", 47, 32, 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, 39, 44],
//   [21, "x", 24, 30, 52]
// ]) ➞ true
// bingoCheck([
//   ["x", 43, 31, 74, 87],
//   [64, "x", 47, 32, 90],
//   [37, 65, "x", 83, 54],
//   [67, 98, 39, "x", 44],
//   [21, 59, 24, 30, "x"]
// ]) ➞ true
// bingoCheck([
//   ["x", "x", "x", "x", "x"],
//   [64, 12, 47, 32, 90],
//   [37, 16, 68, 83, 54],
//   [67, 19, 98, 39, 44],
//   [21, 75, 24, 30, 52]
// ]) ➞ true
// bingoCheck([
//   [45, "x", 31, 74, 87],
//   [64, 78, 47, "x", 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, "x", 44],
//   [21, "x", 24, 30, 52]
// ]) ➞ false

function verticalBingo(array) {
  let match = 0;
  let verticalArray = [];
  let check = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      verticalArray.push(array[j][i]);
      check = array[j][i];
    }

    // console.log(verticalArray);
    for (let k = 0; k < array.length; k++) {
      if (check === verticalArray[k]) {
        match++;
      }
    }
    if (match == array.length) {
      return true;
    }
    match = 0;
    check = 0;
    verticalArray = [];
  }
  return false;
}

function horizontalBingo(array) {
  let match = 0;
  let horizontalArray = [];
  let check = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      horizontalArray.push(array[i][j]);
      check = array[i][j];
    }

    // console.log(horizontalArray);
    for (let k = 0; k < array.length; k++) {
      if (check === horizontalArray[k]) {
        match++;
      }
    }
    if (match == array.length) {
      return true;
    }
    match = 0;
    check = 0;
    horizontalArray = [];
  }
  return false;
}

function diagonalBingo(array) {
  let diagonalArrayLeft = [];
  let diagonalArrayRight = [];
  let checkLeft, checkRight;
  let matchLeft = 0,
    matchRight = 0;
  for (let i = 0; i < array.length; i++) {
    diagonalArrayLeft.push(array[i][i]);
    checkLeft = array[i][i];
    diagonalArrayRight.push(array[array.length - 1 - i][i]);
    checkRight = array[array.length - 1 - i][i];
  }
  // console.log(diagonalArrayLeft);
  // console.log(diagonalArrayRight);
  for (let k = 0; k < diagonalArrayLeft.length; k++) {
    if (checkLeft === diagonalArrayLeft[k]) {
      matchLeft++;
    }
  }
  for (let k = 0; k < diagonalArrayRight.length; k++) {
    if (checkRight === diagonalArrayRight[k]) {
      matchRight++;
    }
  }
  // console.log(matchLeft, matchRight);
  if (
    matchLeft === diagonalArrayLeft.length ||
    matchRight === diagonalArrayRight.length
  ) {
    return true;
  } else return false;
}

function bingoCheck(array) {
  let horizontals = horizontalBingo(array);
  let verticals = verticalBingo(array);
  let diagonals = diagonalBingo(array);
  if (horizontals || verticals || diagonals) {
    return true;
  } else return false;
}

console.log(
  bingoCheck([
    [45, "x", 31, 74, 87],
    [64, "x", 47, 32, 90],
    [37, "x", 68, 83, 54],
    [67, "x", 98, 39, 44],
    [21, "x", 24, 30, 52],
  ])
);
console.log(
  bingoCheck([
    ["x", 43, 31, 74, 87],
    [64, "x", 47, 32, 90],
    [37, 65, "x", 83, 54],
    [67, 98, 39, "x", 44],
    [21, 59, 24, 30, "x"],
  ])
);
console.log(
  bingoCheck([
    ["x", "x", "x", "x", "x"],
    [64, 12, 47, 32, 90],
    [37, 16, 68, 83, 54],
    [67, 19, 98, 39, 44],
    [21, 75, 24, 30, 52],
  ])
);
console.log(
  bingoCheck([
    [45, "x", 31, 74, 87],
    [64, 78, 47, "x", 90],
    [37, "x", 68, 83, 54],
    [67, "x", 98, "x", 44],
    [21, "x", 24, 30, 52],
  ])
);

console.log(
  bingoCheck([
    [45, "x", 31, 74, "x"],
    [64, 78, 47, "x", 90],
    [37, "x", "x", 83, 54],
    [67, "x", 98, "x", 44],
    ["x", "x", 24, 30, 52],
  ])
);

// 5. When a person receives a blood transfusion, it is essential to make sure that the donor's blood type is compatible with the receiver's blood type.
// Receiving a blood type that is not compatible with your own can be life-threating,
// so blood banks always make sure to note the type of blood they receive from donors so that they can ensure a safe transfusion.
// Blood types are named according to three factors: presence of antigen A,
// presence of antigen B, and presence of Rh factor. If antigen A is found, the blood type includes the letter "A".
// If antigen B is found, the blood type includes the letter "B". And if the Rh factor is present, the blood type ends with "+"; otherwise, it ends with "-".
// If neither antigen A nor antigen B are found, the blood type includes the letter "O".
// For example, a person with only antigen A would have the blood type "A-".
// A person with both antigens A and B and the Rh factor would have blood type "AB+",
// and a person wih only the Rh factor would have blood type "O+".
// The rules for giving and receiving blood are as follows:
// A person with antigen A may only give blood to another person with antigen A.
// A person with antigen B may only give blood to another person with antigen B.
// A person with the Rh factor may only give blood to another person with the Rh factor.
// A person with none of the above factors (O-) can give blood to anyone.
// Write a function that takes in a donor's and receiver's blood types as strings and returns whether or not the donor can safely give blood to the receiver, according to the rules above. For clarity: all letters are capital and each blood type will be one of the following strings: "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-".
// Examples:
// canGiveBlood("O+", "A+") ➞ true
// canGiveBlood("A-", "B-") ➞ false
// canGiveBlood("A-", "AB+") ➞ true

function typeAndRh(blood) {
  if (blood.length == 2) {
    bloodType = blood[0];
    rhFactor = blood[1];
  } else {
    bloodType = blood[0] + blood[1];
    rhFactor = blood[2];
  }
  return [bloodType, rhFactor];
}

function canGiveBlood(donorBlood, receiverBlood) {
  let donorBloodType = typeAndRh(donorBlood)[0];
  let donorRhFactor = typeAndRh(donorBlood)[1];
  let receiverBloodType = typeAndRh(receiverBlood)[0];
  let receiverRhFactor = typeAndRh(receiverBlood)[1];

  if (
    donorBloodType == receiverBloodType ||
    donorBloodType == "O" ||
    receiverBloodType == "AB"
  ) {
    if (
      donorRhFactor == "-" ||
      donorRhFactor == receiverRhFactor ||
      receiverRhFactor == "+"
    ) {
      return true;
    } else return false;
  } else return false;
}

console.log(canGiveBlood("AB+", "AB+"));
