"use strict";

//Selecting DOM elements

const marioStanding = document.querySelector(".mario");
const marioRunning = document.querySelector(".mario_running");
const backgroundImageDiv = document.querySelector(".background");

//Defining global variables

let activeTimer = true;
let timer;
let pos = 0;

//Defining event handler

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    marioStanding.classList.toggle("inactive");
    marioRunning.classList.toggle("inactive");
    activeTimer = !activeTimer;
    if (activeTimer) {
      clearInterval(timer);
    } else {
      timer = setInterval(function () {
        pos--;

        //Here by multiplying pos with some integer we can get different speeds of ground movement

        // backgroundImageDiv.style.backgroundPositionX = pos + "px";
        backgroundImageDiv.style.backgroundPositionX = pos * 5 + "px";
      }, 1);
    }
  }
  return timer;
});

/////////////////////////////////////////////////////////////////////

//Defining event handler for jumping

let up = 0;
let down = 30;
let timerUp, timerDown;
let timerUpRemove, timerDownRemove;

document.addEventListener("keydown", function (e) {
  //reassigning values to up and down

  up = 0;
  down = 30;

  if (e.key === "ArrowUp") {
    //clearing all unfinished timers

    clearInterval(timerUp);
    clearInterval(timerDown);
    clearInterval(timerUpRemove);
    clearInterval(timerDownRemove);

    marioStanding.classList.toggle("inactive");
    marioRunning.classList.toggle("inactive");

    //going up

    timerUp = setInterval(function () {
      up++;
      marioStanding.style.top = 55 - up + "%";
      return timerUp;
    }, 10);

    timerUpRemove = setInterval(function () {
      if (up >= 30) {
        up = "";
        clearInterval(timerUp);
        return timerUpRemove;
      }
    }, 20);

    //going down

    timerDown = setInterval(function () {
      if (up == "") {
        down--;
        marioStanding.style.top = 55 - down + "%";
        return timerDown;
      }
    }, 10);

    timerDownRemove = setInterval(function () {
      if (down <= 0) {
        down = "";
        clearInterval(timerDown);
        if (down === "") {
          (function () {
            marioStanding.classList.toggle("inactive");
            marioRunning.classList.toggle("inactive");
          })();
          clearInterval(timerDownRemove);
        }
        return timerDownRemove;
      }
    }, 20);
  }
});
