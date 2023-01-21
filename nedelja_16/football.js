"use strict";

const player = $("div.player");

let x, y;

$(document).on("mousemove", function (event) {
  x = event.clientX;
  y = event.clientY;
});

const moving = function () {
  let left = x - 25 + "px";
  let top = y - 25 + "px";
  $(player).css("position", "absolute");
  $(player).css("left", left);
  $(player).css("top", top);
};

$("div.field").on("click", moving);

let active = true;

$("button").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  active ? $("button").text("Stop Moving") : $("button").text("Resume Moving");
  active
    ? $("div.field").on("click", moving)
    : $("div.field").off("click", moving);
  active = !active;
});
