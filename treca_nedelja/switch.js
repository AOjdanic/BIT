// prvi zadatak i drugi

const day = 10;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Input should be between 1 and 7");
}

// treci zadatak

const day2 = 5;

switch (day2) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It's Weekday");
    break;
  case 6:
  case 7:
    console.log("It's Weekend");
    break;
  default:
    console.log("Input should be between 1 and 7");
}

// cetvrti zadatak

const month = 13;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Input must be between 1 and 12");
}

//peti zadatak

const month2 = 5;
switch (month2) {
  case 1:
  case 2:
  case 12:
    console.log("winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("autumn/fall");
    break;
  default:
    console.log("Input must be between 1 and 12");
}

//sesti zadatak
const grade = "F";

switch (grade) {
  case "A":
    console.log("Good job");
    break;
  case "B":
    console.log("Pretty good");
    break;
  case "C":
    console.log("Passed");
    break;
  case "D":
    console.log("Not so good");
    break;
  case "F":
    console.log("Failed");
    break;
  default:
    console.log("Unknown grade");
}

// sedmi zadatak

const city = "Bordeaux";

switch (city) {
  case "Belgrade":
    console.log("This city is in Serbia");
    break;
  case "Berlin":
  case "Frankfurt":
  case "Munich":
  case "Stuttgart":
  case "Leipzig":
    console.log("This city is in Germany");
    break;
  case "Paris":
  case "Marseille":
  case "Bordeaux":
  case "Lyon":
    console.log("This city is in France");
    break;
  case "London":
  case "Liverpool":
  case "Manchester":
    console.log("This city is in Great Britain");
    break;
  case "Moscow":
  case "St. Petersburg":
    console.log("This city is in Russia");
    break;
  default:
    console.log("Please choose a different city");
}

// osmi zadatak

const a = 10;
const b = 2;
const operator = "/";
switch (operator) {
  case "+":
    console.log((result = a + b));
    break;
  case "-":
    console.log((result = a - b));
    break;
  case "*":
    console.log((result = a * b));
    break;
  case "/":
    console.log((result = a / b));
    break;
  default:
    "not a known operation";
}
