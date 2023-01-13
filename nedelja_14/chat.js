"use strict";

const input = document.querySelector(".input");
const button = document.querySelector(".button");
const chat = document.querySelector(".chat");

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value != "") {
    const text = `<p class="cloud">${input.value}</p>`;
    chat.insertAdjacentHTML("beforeend", text);
    input.value = "";
    chat.scrollTop = chat.scrollHeight;
  }
});
