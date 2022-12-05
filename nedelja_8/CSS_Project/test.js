console.log(2 + true);
// for (var i = 0; i < 5; ) {
//   console.log("*");
// }
// var n = 10;
// console.log(++n);
// console.log([2, 3, 4]);
var sum = 0;

for (i = 0; i < 10; i++) {
  if (i == 6) {
    continue;
  }
  if (i % 3 == 0) {
    sum++;
  }
}

console.log(sum);

if (0 % 2 == 0) {
  console.log("true");
} else console.log("false");

console.log(parseInt("ab34abc"));
var s = "coffee";
s[0] = "C";
console.log(s);

console.log(12 * undefined);
