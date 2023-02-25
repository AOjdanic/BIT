"use strict";

const button = document.querySelector("button");
const container = document.querySelector(".joke__container");

const displayJoke = function (data) {
  let html = `<p>${data.value}</p>`;
  container.insertAdjacentHTML("beforeend", html);
};

const fetchJoke = async function () {
  //

  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();

  displayJoke(data);

  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};

button.addEventListener("click", fetchJoke);
