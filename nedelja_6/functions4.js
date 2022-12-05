//prvi zadatak

var e = 3;
var a = [5, -4.2, 3, 7];
var b = [5, -4.2, 18, 7];
function isItHere(array, e) {
  var result = "";
  for (i = 0; i < array.length; i++) {
    if (array[i] === e) {
      result = `The element ${e} is in the array`;
    } else continue;
  }
  result === ""
    ? (result = `The element ${e} is not in the array`)
    : (result = result);
  return result;
}

var checkVar = isItHere(a, e);
console.log(checkVar);

//drugi zadatak
function multiplyPositive(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      array[i] = array[i] * 2;
    }
  }
  return array;
}

var positiveArray = multiplyPositive([-3, 11, 5, 3.4, -8]);
console.log(positiveArray);

//treci zadatak

function minimum(array) {
  var minimum = array[0];
  var arr = "";
  for (i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
      index = i;
    } else continue;
  }

  return (arr = minimum + " " + index);
}

console.log(minimum([4, 2, 2, -1, 6]));

//cetvrti zadatak
function smallerButNotSmallest(array) {
  var minimum = array[0];
  var secondMinimum = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    } else continue;
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] > minimum && secondMinimum > array[i]) {
      secondMinimum = array[i];
    } else continue;
  }
  return secondMinimum;
}

console.log(smallerButNotSmallest([4, 2, 2, -1, 6]));

//peti zadatak
function sumPositive(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    } else continue;
  }
  return sum;
}

console.log(sumPositive([3, 11, -5, -3, 2]));

//sesti zadatak

function isItSymmetric(array) {
  var counter = 0;
  for (i = 0; i < array.length; i++) {
    if (array[0 + i] === array[array.length - 1 - i]) {
      counter++;
    }
  }
  counter === array.length
    ? (result = `The array is symmetric`)
    : (result = `The array is not symmetric`);
  return result;
}

console.log(isItSymmetric([2, 4, -2, 7, -2, 4, 2]));
console.log(isItSymmetric([3, 4, 12, 8]));

//sedmi zadatak
function intertwine(array1, array2) {
  var outputArray = [];
  for (i = 0; i < array1.length + array2.length; i += 2) {
    outputArray[i] = array1[i - i / 2];
    outputArray[i + 1] = array2[i - i / 2];
  }
  return outputArray;
}

console.log(intertwine([4, 5, 6, 2], [3, 8, 11, 9]));

//osmi zadatak
function concatenate(array1, array2) {
  var outputArray = [];
  for (i = 0; i < array1.length; i++) {
    outputArray[i] = array1[i];
  }
  for (i = 0; i < array2.length; i++) {
    outputArray[i + array1.length] = array2[i];
  }
  return outputArray;
}

console.log(concatenate([4, 5, 6, 2], [3, 8, 11, 9]));

//deveti zadatak

function deleteElement(a, e) {
  var aNew = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
      delete a[i];
    } else continue;
  }
  var index = 0;
  for (j = 0; j < a.length; j++) {
    if (a[j] != undefined) {
      aNew[index] = a[j];
      index++;
    }
  }
  a = aNew;

  return a;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));

//deseti zadatak

function insertElement(a, e, p) {
  var outputArray = [];
  var index = 0;
  if (p <= a.length) {
    for (i = 0; i <= a.length; i++) {
      if (i != p) {
        outputArray[i] = a[index];
        index++;
      } else {
        outputArray[i] = e;
      }
    }
  } else outputArray = "ERROR";
  return outputArray;
}
console.log(insertElement([2, -2, 33, 12, 5, 8], 78, 3));
