"use strict";

// Selecting DOM elements

const button = document.querySelector(".button");
const div = document.querySelector("div");

const getDogPic = function () {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://dog.ceo/api/breeds/image/random");
  xmlHttp.onload = function () {
    let data = JSON.parse(xmlHttp.responseText);
    console.log(data);
    let html = `
    <img src="${data.message}"/>`;
    div.insertAdjacentHTML("afterbegin", html);
  };
  xmlHttp.send();
};

// Event listeners
button.addEventListener("click", function (e) {
  e.preventDefault();
  getDogPic();
});
