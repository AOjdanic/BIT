console.log("hello from external world");

console.log(window.navigator.platform);
console.log(window.navigator.appVersion);
console.log(window.navigator.vendor);

function isOnline(property) {
  if (property) {
    return "Online";
  } else {
    return "Offline";
  }
}
console.log(isOnline(window.navigator.onLine));

console.log(window.screen.availHeight);
console.log(window.screen.availWidth);
console.log(window.screen.height);
console.log(window.screen.width);

console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.protocol);
//parameters dont exist?

console.log(
  setTimeout(() => {
    window.location.reload();
  }, 60000)
);

function goHere(address) {
  return (window.location.href = address);
}

// console.log(goHere("http://www.google.com"));

//Create a function that stores passed data in the browser local storage.

function insertData(dataName, dataValue) {
  window.localStorage.setItem(dataName, dataValue);
  return;
}

//Create a function that reads the stored data, and print it out in console.
//If there is no data, print "There is no data" in the console.

function readData(dataName) {
  if (window.localStorage.length != 0) {
    console.log(window.localStorage.getItem(dataName));
  } else if (window.localStorage.length == 0) {
    console.log("There is no data");
  }
}

//Create a function that removes data from the local storage.

function removeData(dataName) {
  return window.localStorage.removeItem(dataName);
}

//Modify functions to work with sessionStorage instead of localStorage.

function insertDataSession(dataName, dataValue) {
  window.sessionStorage.setItem(dataName, dataValue);
  return;
}
function readDataSession(dataName) {
  if (window.sessionStorage.length != 0) {
    console.log(window.sessionStorage.getItem(dataName));
  } else if (window.sessionStorage.length == 0) {
    console.log("There is no data");
  }
}
function removeDataSession(dataName) {
  return window.sessionStorage.removeItem(dataName);
}

//Play around with the browser forward/back navigation.
//Implement a function that navigates two pages back.

let goBackTwoPages = function (number) {
  return window.history.go(number);
};
// goBackTwoPages();

//window methods

//●	Create a function that shows the user a greeting message using alert

alert("Hello User");

//●	Then a question is presented to the user using prompt

let answer = prompt("Are you 18 years or older?");

//●	When the user provides the answer, that answer is used in the confirm dialog
//●	The format of the message in the dialog should be: "We will submit this answer now! " + the answer

let confAnswer = confirm("we will submit this answer: " + answer);

//●	If the user clicks OK, show alert with success message
//●	If the user clicks Cancel, don't show anything

if (confAnswer) {
  alert("Success");
}
