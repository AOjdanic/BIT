"use strict";

// Selecting DOM elements

const inputField = document.querySelector(".input");
const button = document.querySelector(".button");

const getCountryName = function () {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open(
    "GET",
    `http://www.geoplugin.net/xml.gp?ip=${inputField.textContent}`
  );
  xmlHttp.onload = function () {
    let xmlDoc = xmlHttp.responseXML;
    alert(
      `Your country is: ${
        xmlDoc.getElementsByTagName("geoplugin_countryName")[0].textContent
      }`
    );

    alert(
      `Your city is: ${
        xmlDoc.getElementsByTagName("geoplugin_city")[0].textContent
      }`
    );
  };
  xmlHttp.send();
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  getCountryName();
  inputField.value = "";
  inputField.textContent = "";
});
