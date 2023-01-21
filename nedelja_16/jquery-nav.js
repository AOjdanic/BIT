"use strict";

$(function () {
  console.log("Hello World!");
});

$("li:eq(0)").css("border-bottom", "5px solid darkorange");

$("li").css("text-transform", "uppercase");

let active = document.activeElement;
$(active).css("color", "#aa9ffd");

const middleLiItem =
  document.querySelectorAll("li")[
    Math.floor(document.querySelectorAll("li").length / 2)
  ];
$(middleLiItem).css("background-color", "darkred");
