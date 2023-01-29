"use strict";

//Selecting DOM Elements

//buttons
const btnMovie = document.querySelector(".btn_createMovie");
const btnProgram = document.querySelector(".btn_createProgram");
const btnAddMovie = document.querySelector(".btn_addMovie");

//lists
const listOfMovies = document.querySelector(".movie_list");
const listOfPrograms = document.querySelector(".program_list");
const programsFullList = document.querySelector(".programs_complete");

//select menus
const movieSelectMenu = document.querySelector(".movie_selectMenu");
const programSelectMenu = document.querySelector(".program_selectMenu");

//inputs
const titleInput = document.querySelector(".title");
const durationInput = document.querySelector(".length");
const genreInput = document.querySelector(".select_menu");
const dateInput = document.querySelector(".date");
/////////////////////////////////////////////////////////////////////

//functions

const createMovie = function (title, duration, genre) {
  return new Movie(title, genre, duration);
};

const createProgram = function (date) {
  return new Program(date);
};

const insertInList = function (insertData, htmlParentElement, idName) {
  let Html = `<li id="${idName}">${insertData}</li>`;
  htmlParentElement.insertAdjacentHTML("beforeend", Html);
  return;
};

const insertOption = function (insertData, htmlParentElement, idName) {
  let htmlOption = `<option id="${idName}">${insertData}</option>`;
  htmlParentElement.insertAdjacentHTML("beforeend", htmlOption);
};

/////////////////////////////////////////////////////////////////////

let movieObject;
let programObject;

//Event listeners

/////////////////////////////////////////////////////////////////////

let isThere = false;

btnMovie.addEventListener("click", function () {
  let title = titleInput.value;
  let duration = durationInput.value;
  let genre = genreInput.value;

  if (!title || !duration || genre == "-") {
    if (!isThere) {
      isThere = !isThere;
      let message = `<p class="pleaseFill">Please fill out all fields</p>`;
      btnMovie.insertAdjacentHTML("beforebegin", message);
    } else {
      return;
    }
    return;
  } else {
    document.querySelector(".pleaseFill")?.remove();
  }

  movieObject = createMovie(title, duration, genre);
  insertInList(movieObject.getData(), listOfMovies, movieObject.title);
  insertOption(movieObject.getData(), movieSelectMenu, movieObject.title);
});

/////////////////////////////////////////////////////////////////////

btnProgram.addEventListener("click", function () {
  let date = dateInput.value;
  programObject = createProgram(date);
  insertInList(programObject.getData(), listOfPrograms, programObject.date);
  insertOption(programObject.getData(), programSelectMenu, programObject.date);
});

/////////////////////////////////////////////////////////////////////

btnAddMovie.addEventListener("click", function () {
  programObject.addMovie(movieObject);
  listOfPrograms.querySelector(`li[id="${programObject.date}"]`).remove();
  insertInList(programObject.getData(), listOfPrograms, programObject.date);
  programSelectMenu.querySelector(
    `option[id="${programObject.date}"]`
  ).textContent = programObject.getData();
});

/////////////////////////////////////////////////////////////////////
