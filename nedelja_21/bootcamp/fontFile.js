"use strict";

let figlet = require("figlet");

const createArtisticFont = function (
  inputString,
  font = "Ghost",
  horLayout = "default",
  vertLayout = "default",
  width = 80,
  whitespace = true
) {
  return console.log(
    figlet.textSync(inputString, {
      font: font,
      horizontalLayout: horLayout,
      verticalLayout: vertLayout,
      width: width,
      whitespaceBreak: whitespace,
    })
  );
};

exports.createArtisticFont = function (
  inputString,
  font = "Ghost",
  horLayout = "default",
  vertLayout = "default",
  width = 80,
  whitespace = true
) {
  return figlet.textSync(inputString, {
    font: font,
    horizontalLayout: horLayout,
    verticalLayout: vertLayout,
    width: width,
    whitespaceBreak: whitespace,
  });
};
