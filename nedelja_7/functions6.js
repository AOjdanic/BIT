//prvi zadatak

function rotate(array, n) {
  var index = 0;
  var outArray = [];
  for (i = 0; i < array.length - n; i++) {
    outArray[index] = array[i + n];
    index++;
  }
  for (j = 0; j < n; j++) {
    outArray[index] = array[j];
    index++;
  }
  return outArray;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 3));

//drugi zadatak

function returnDigits(number) {
  var resultArray = [];
  var numberString = number + "";
  for (i = 0; i < numberString.length; i++) {
    resultArray[i] = Number(numberString[i]);
  }
  return resultArray;
}

console.log(returnDigits(12135435232));

//treci zadatak

function multiplicationTable(range) {
  for (i = 1; i <= range; i++) {
    for (j = 1; j <= range; j++) {
      result = i * j;
      rez = console.log(`${i} * ${j} = ${result}`);
    }
    console.log("\n");
  }
}

multiplicationTable(12);

//cetvrti zadatak

function maxElement(array) {
  for (k = 0; k < array.length; k++) {
    if (array[k] === Number(array[k])) {
      var maximum = array[k];
      for (i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
          maximum = array[i];
        } else continue;
      }
    } else continue;
  }
  return maximum;
}

console.log(
  maxElement([
    "true",
    "15 000",
    undefined,
    0,
    undefined,
    true,
    15,
    20,
    37,
    1000,
    15000,
  ])
);

//peti zadatak

function returnMinMax(array5) {
  var minimum5 = array5[0];
  var maximum5 = array5[0];
  for (i = 0; i < array5.length; i++) {
    if (array5[i] > maximum5) {
      maximum5 = array5[i];
    } else if (array5[i] < minimum5) {
      minimum5 = array5[i];
    } else continue;
  }
  result5 = [minimum5, maximum5];
  return result5;
}

console.log(returnMinMax([-351, 5, 7, 90, 3200, 88, -13, 200, 85, -2000]));

//sesti zadatak
function median(array6) {
  var result6;
  array6 = array6.sort();
  console.log(array6);
  if (array6.length % 2 != 0) {
    result6 = array6[(array6.length - 1) / 2];
  } else {
    result6 = (array6.length / 2 - 1 + array6.length / 2) / 2;
  }
  return result6;
}
console.log(median([0, 3, 2, 5, 4, 6, 7, 1, 9, 8]));
console.log(median([3, 2, 5, 4, 6, 7, 1, 9, 8]));

//sedmi zadatak

function returnElements(array7) {
  var resultArray7 = [];
  if (array7.length % 2 != 0 && array7.length != 0) {
    resultArray7[0] = array7[0];
    resultArray7[1] = array7[(array7.length - 1) / 2];
    resultArray7[2] = array7[array7.length - 1];
  } else if (array7.length % 2 == 0 && array7.length != 0) {
    resultArray7[0] = array7[0];
    resultArray7[1] = array7[array7.length - 1];
  } else if (array7.length == 0) {
    resultArray7 = array7;
  }
  return resultArray7;
}

console.log(returnElements([-351, 5, 7, 90, 3200, 88, -13, 200, 85, -2000]));
console.log(returnElements([-351, 5, 7, 90, 3200, 88, -13, 200, 85]));
console.log(returnElements([]));

//osmi zadatak

function averageOfN() {
  var sum8 = 0;
  var average8;
  for (i = 0; i < arguments.length; i++) {
    sum8 += arguments[i];
  }
  average8 = sum8 / arguments.length;
  return average8;
}

console.log(averageOfN(1, 2, 3, 4, 5, 6, 7, 8));

//deveti zadatak

function greaterThanAverage() {
  var sum9 = 0;
  var average9;
  var index = 0;
  var result9 = [];
  for (i = 0; i < arguments.length; i++) {
    sum9 += arguments[i];
  }
  average9 = sum9 / arguments.length;
  for (j = 0; j < arguments.length; j++) {
    if (arguments[j] > average9) {
      result9[index] = arguments[j];
      index++;
    } else continue;
  }
  console.log(average9);
  return result9;
}

console.log(greaterThanAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//deseti zadatak

function BMI(weight, height) {
  var BMI;
  BMI = weight / height ** 2;
  if (BMI < 15) {
    console.log("Starvation");
  } else if (BMI < 17.5) {
    console.log("Anorexic");
  } else if (BMI < 18.5) {
    console.log("Underweight");
  } else if (BMI >= 18.5 && BMI < 25) {
    console.log("Ideal");
  } else if (BMI >= 25 && BMI < 30) {
    console.log("Overweight");
  } else if (BMI >= 30 && BMI < 40) {
    console.log("Obese");
  } else if (BMI >= 40) {
    console.log("Morbidly obese");
  }
}

BMI(75, 1.9);

//jedanaesti zadatak

function framed(list) {
  //nalazenje najduze reci
  var maxLength = list[0].length;
  for (i = 0; i < list.length; i++) {
    if (list[i].length > maxLength) {
      maxLength = list[i].length;
    }
  }
  //prvi red
  var sum11 = "";
  for (j = 0; j < maxLength; j++) {
    sum11 += "*";
  }
  console.log("**" + sum11 + "**" + "\n");

  //glavni deo
  for (k = 0; k < list.length; k++) {
    var sum112 = "";
    for (l = 0; l < maxLength - list[k].length; l++) {
      sum112 += " ";
    }
    console.log("* " + list[k] + sum112 + " *" + "\n");
  }

  //poslednji red
  console.log("**" + sum11 + "**" + "\n");
}

framed(["Hello", "World", "in", "a", "frame"]);
