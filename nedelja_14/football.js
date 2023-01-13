"use strict";

const field = document.querySelector(".field");
const player = document.querySelector(".player");
const button = document.querySelector("button");

let x, y;
document.addEventListener("mousemove", (event) => {
  x = event.clientX;
  y = event.clientY;
});

const moving = function () {
  player.style.position = "absolute";
  player.style.left = x - 25 + "px";
  player.style.top = y - 25 + "px";
};

field.addEventListener("click", moving);
let active = true;
button.addEventListener("click", function (e) {
  if (active) {
    active = !active;
    e.preventDefault();
    e.stopPropagation();
    button.textContent = "Resume Moving";
    field.removeEventListener("click", moving);
  } else {
    active = !active;
    e.preventDefault();
    e.stopPropagation();
    button.textContent = "Stop Moving";
    field.addEventListener("click", moving);
  }
});
