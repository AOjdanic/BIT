"use strict";

let figlet = require("figlet");

// printing out all available fonts

// console.log(figlet.fontsSync());

// creating font function

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

// options for layouts : "default", "full", "fitted", "controlled smushing", and "universal smushing"

createArtisticFont("Hello");

createArtisticFont(
  "This is cyber space",
  "Cyberlarge",
  "fitted",
  "fitted",
  80,
  true
);

createArtisticFont(
  "What do I write here?",
  "Doom",
  undefined,
  "contolled smushing",
  100,
  false
);

createArtisticFont(
  "Is this in 3D?",
  "3D-ASCII",
  "universal smushing",
  "contolled smushing",
  90,
  false
);
