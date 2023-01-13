"use strict";

const btnTurnOff = document.querySelector(".btn-warning");

let active = true;

let toggleBackground = function () {
  return document.querySelector("body").classList.toggle("blue");
};

const cancelToggle = function () {
  if (active) {
    btnTurnOff.textContent = "Turn On";
    toggleBackground = "";
    active = !active;
    return document.querySelector("body").classList.remove("blue");
  } else {
    btnTurnOff.textContent = "Turn Off";
    toggleBackground = function () {
      return document.querySelector("body").classList.toggle("blue");
    };
    active = !active;
  }
};
