// prvi zaadatak
var outputArray = [];
var inputArray = ["1", "21", undefined, "42", "1e+3", Infinity];
var index = 0;
for (i = 0; i < inputArray.length; i++) {
  var check = parseInt(inputArray[i]);
  if (isNaN(check) == true) {
    continue;
  } else {
    outputArray[index] = check;
    index++;
  }
}
console.log(outputArray);

//drugi zadatak
var sum = "";
var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
for (i = 0; i < a.length; i++) {
  parseInt(a[i]);
  if (isNaN(parseInt(a[i])) == true && a[i] != false) {
    continue;
  } else sum += a[i];
}
result = sum;
console.log(result);
//treci zadatak
var outputArray3 = [];
var index = 0;
var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
for (i = 0; i < a.length; i++) {
  if (Boolean(a[i]) == true) {
    outputArray3[index] = a[i];
    index++;
  } else continue;
}

console.log(outputArray3);
//cetvrti zadatak
var a = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
var numberOfIntegerValues = 0;
for (i = 0; i < a.length; i++) {
  if (parseInt(a[i]) == a[i]) {
    numberOfIntegerValues++;
  } else continue;
}
console.log(numberOfIntegerValues);

//peti zadatak

var a = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
var numberOfFloatValues = 0;
var numberOfIntegerValues = 0;

for (i = 0; i < a.length; i++) {
  if (Boolean(a[i]) == false) continue;
  else {
    if (parseInt(a[i]) == a[i]) {
      numberOfIntegerValues++;
    } else numberOfFloatValues++;
  }
}
console.log(numberOfFloatValues);
