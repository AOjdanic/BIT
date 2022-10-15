//prvi zadatak
const a = 3 * -7 * 2;
if (a > 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}
// drugi zadatak
const b = -5;
const c = -2;
const d = -6;
const e = 0;
const f = -1;
if (b > c && b > d && b > e && b > f) {
  console.log(b);
} else if (c > b && c > d && c > e && c > f) {
  console.log(c);
} else if (d > c && d > b && d > e && d > f) {
  console.log(d);
} else if (e > c && e > d && e > b && e > f) {
  console.log(e);
} else {
  console.log(f);
}
//treci zadatak
const g = 0;
const h = -1;
const i = 4;
if (g > h && g > i) {
  if (h > i) {
    console.log(g, h, i);
  } else if (h < i) {
    console.log(g, i, h);
  }
} else if (h > g && h > i) {
  if (g > i) {
    console.log(h, g, i);
  } else if (g < i) {
    console.log(h, i, g);
  }
} else if (i > h && i > g) {
  if (h > g) {
    console.log(i, h, g);
  } else if (h < g) {
    console.log(i, g, h);
  }
}
//cetvrti zadatak
const j = 47;
if (typeof j == "number") {
  if (j % 2 === 0) {
    console.log(j / 2);
  } else console.log("X");
} else console.log("Not a number");
//peti zadatak
k = 60;
l = 58;
k > l ? console.log(k) : console.log(l);
//sesti zadatak
const temperatureUnit = prompt(
  "Input F if you want temperature from Celsius to Fahrenheit. (If you want to convert Fahrenheit to Celsius, input C)"
);
if (temperatureUnit === "F") {
  const temperature = Number(prompt("Input the temperature in Celsius"));
  const temperatureFahrenheit = (9 * temperature) / 5 + 32;
  console.log(`${temperature} C is ${temperatureFahrenheit} F`);
} else if (temperatureUnit === "C") {
  const temperature = Number(prompt("Input the temperature in Fahrenheit"));
  const temperatureCelsius = (5 * (temperature - 32)) / 9;
  console.log(`${temperature} F is ${temperatureCelsius} C`);
}
//sedmi zadatak
const inputNumber = 32;
if (inputNumber < 13) {
  console.log(13 - inputNumber);
} else if (inputNumber > 13) {
  console.log(2 * (inputNumber - 13));
}
//osmi zadatak
const firstInteger = 12;
const secondInteger = 5;
if (firstInteger === secondInteger) {
  console.log(3 * (firstInteger + secondInteger));
} else {
  console.log(firstInteger + secondInteger);
}
//deveti zadatak
const firstNumber = 5;
const secondNumber = 45;
if (
  firstNumber === 50 ||
  secondNumber === 50 ||
  firstNumber + secondNumber === 50
) {
  console.log("true");
} else {
  console.log("-");
}
//deseti zadatak
const rangeNumber = 365;
if (rangeNumber >= 20 && rangeNumber < 100) {
  console.log("20 to 100");
} else if (rangeNumber >= 100 && rangeNumber <= 400) {
  console.log("100 to 400");
} else {
  console.log("-");
}
