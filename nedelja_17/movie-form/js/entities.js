"use strict";

/////////////////////////////////////////////////////////////////////

//auxiliary functions

const formatDate = function (date) {
  return date.split("/").join(".");
};

/////////////////////////////////////////////////////////////////////

function Genre(name) {
  (this.name = name),
    (this.getData = function () {
      return `${this.name.at(0).toUpperCase()}${this.name
        .at(-1)
        .toUpperCase()}`;
    });
}

/////////////////////////////////////////////////////////////////////

function Movie(title, genre, duration) {
  (this.title = title),
    (this.genre = new Genre(genre)),
    (this.duration = Number(duration)),
    (this.getData = function () {
      return `${this.title.slice(0, 1).toUpperCase() + this.title.slice(1)}, ${
        this.duration
      } min, ${this.genre.getData()}`;
    });
}

/////////////////////////////////////////////////////////////////////

function Program(date) {
  (this.date = date),
    (this.movies = []),
    (this.addMovie = function (movieIn) {
      let genreArray = this.movies.map((movie) => movie.genre.name);
      let durationArray = this.movies.map((movie) => movie.duration);
      if (
        genreArray.filter((genreName) => genreName == movieIn.genre.name)
          .length < 4 &&
        durationArray.reduce((acc, duration) => (acc += duration), 0) +
          movieIn.duration <
          480
      ) {
        this.movies.push(movieIn);
      } else {
        console.log(`You can't add this movie: ${JSON.stringify(movieIn)}`);
      }
    }),
    (this.getData = function () {
      return `${formatDate(this.date)}, ${
        this.movies.length
      } movies, duration: ${this.movies
        .map((movie) => movie.duration)
        .reduce((acc, duration) => (acc += duration), 0)} min`;
    });
}

///////////////////////////////////////////////////////////////////
