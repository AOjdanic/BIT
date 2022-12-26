"use strict";

// Selecting One/Multiple Elements

// Create a function that selects the second list and applies a class that sets some background color to it.

let body = document.documentElement.childNodes[2];

let secondUnorderedList = body.children[1];

secondUnorderedList.classList.add("secondList");

secondUnorderedList.addEventListener("click", function () {
  document.querySelector(".secondList").style.backgroundColor = "red";
});

// Create a second function that, when triggered, selects all <li> elements on the page.
// The function also sets a class that sets some bg color to every <li> element.
function selectAllLi() {
  let listItem = document.querySelectorAll("li");

  for (let i = 0; i < 10; i++)
    listItem[i].addEventListener("click", function () {
      listItem[i].classList.add("purple");
    });
}
selectAllLi();

// Create one more unordered list and one more function
// The function should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg color and transforms the text to uppercase.

let thirdUnorderedList = body.children[2];
thirdUnorderedList.classList.add("thirdList");
let listItemThirdList = document.querySelectorAll(".thirdList>li");

for (let i = 0; i < listItemThirdList.length; i++)
  listItemThirdList[i].addEventListener("click", function () {
    listItemThirdList[i].classList.remove("purple");
    listItemThirdList[i].classList.add("green");
  });

// Traversing
// Create two unordered lists.
// Each list should be wrapped in a div element.
// One <li> element in the second list should have a class “active”, which sets its background color.
const secondDivSecondUlFourthListItem =
  document.documentElement.children[1].children[4].children[0].children[3];
secondDivSecondUlFourthListItem.classList.add("active");

// Create a function that selects the <li> element with class “active”.
// Remove the class from that element, and then select the first <li> element in the first unordered list using node relations.
// Apply class to that newly selected <li> element

const firstDivFirstLi =
  secondDivSecondUlFourthListItem.parentElement.parentNode
    .previousElementSibling.children[0].children[0];

firstDivFirstLi.addEventListener("click", function () {
  secondDivSecondUlFourthListItem.classList.remove("active");
  firstDivFirstLi.classList.add("active");
});

// Access/Update Text Node
// Create an unordered list containing <li> items that represent navigation.

//already created such list in first div

// Create a function that takes text from one of the <li> elements and presents it on screen using alert.

const alertMe = function (e) {
  if (e.key === "Enter") {
    alert(
      document.documentElement.children[1].children[3].children[0].children[2]
        .textContent
    );
  }
};

body.addEventListener("keydown", alertMe);

// Create one more function.
// The function should take some text as an argument.
// The function should select the last <li> element in the list and replace its text with text passed as the function argument.

const replaceText = function (text) {
  body.children[3].children[0].children[4].textContent = text;
};

// InnerHTML
// Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
// Create a function that is used for building a dropdown/select element.

// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the select element.
// Add the whole dropdown list to DOM .

// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page.

//DOM Manipulation
const firstDiv = body.children[3];
const secondDiv = body.children[4];

const addDropdown = function (arrayOfStrings, nodeWhereSelectIsAdded) {
  const dropdown = document.createElement("select");
  for (let i = 0; i < arrayOfStrings.length; i++) {
    const text = document.createTextNode(arrayOfStrings[i]);
    const option = document.createElement("option");
    option.appendChild(text);
    dropdown.appendChild(option);
  }
  nodeWhereSelectIsAdded.appendChild(dropdown);
};

addDropdown(["Well", "hello", "there"], firstDiv);
addDropdown(["Well", "hello", "there"], secondDiv);

//Inner HTML

const addDropdownHTML = function (arrayOfStrings, nodeWhereSelectIsAdded) {
  let string = "";
  for (let i = 0; i < arrayOfStrings.length; i++) {
    string += `<option>${arrayOfStrings[i]}</option>`;
  }
  nodeWhereSelectIsAdded.innerHTML += "<select>" + string + "</select>";
};

addDropdownHTML(["well", "hello", "there", "in", "HTML"], firstDiv);
addDropdownHTML(["well", "hello", "there", "in", "HTML"], secondDiv);

// Attributes
// Create a form that contains multiple input elements with labels.
// Some of those elements should be required.

// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.
const form = document.documentElement.children[1].children[5];
const inputs = form.querySelectorAll("input");
const validateForm = function () {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "" && inputs[i].hasAttribute("required")) {
      inputs[i].style.borderColor = "red";
    } else if (inputs[i].value != "" && inputs[i].hasAttribute("required")) {
      inputs[i].style.borderColor = "unset";
      inputs[i].style.borderColor = "#858585";
    }
  }
};
