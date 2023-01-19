"use strict";

/*
Festival
In your IDE of choice, create a new JavaScript file named festival.js and make it so that all
code written in the file follows strict mode.
Create an anonymous immediately-invoking function that will hold the main execution of all
program calls. Writing a simple command console.log(“Hi”) inside this function and running
code should output “Hi“ in the console.
Create constructor functions with properties representing the following:
● Genre - name
● Movie - title, genre (instance of Genre), length
● Program - date, list of movies (initially empty) and total number of movies
Festival - name, list of programs (initially empty), and number of movies in all programs
Add method getData to Genre which returns formatted string as first and last letter of genre
name
"Action" -> AN
"Drama" -> DA
"Comedy" -> CY
Add getData method to Movie. It should return a formatted string consisting of the movie title,
length and genre acronym.
The Shawshank Redemption, 130min, AN
Add addMovie method to Program. It should receive a Movie and add the movie to the movie
list of a given program.
Add addProgram method to Festival. It should receive a Program and add the program to the
list of the given festival’s programs.
Add getData method to Program. It should return a formatted string of all data related to the
program. The string should contain date, program length (calculated from length of all movies in a
list) and data about movies in a list (see the example below). To display movie data, use Movie’s
getData method.
Date, program length from all movies
First movie title, length and genre
Second movie title, length and genre
Third movie title, length and genre
Fourth movie name and length and genre
Add method getData to Festival which return formatted string like festival name, number of
movies in all programs and all programs listed. Use Programs getData method to list all
programs. (example output is shown below)
Weekend festival has 4 movie titles
28.10.2017, program duration 368min
Spider-Man: Homecoming, 133min, AN
War for the Planet of the Apes, 140min, DA
The Dark Tower, 95min, WN
29.10.2017, program duration 108min
Deadpool, 108min, CY
Inside your immediately-invoking function, add createMovie function that receives a movie title,
movie length and genre (as a string) as parameters and returns a created Movie.
Inside your immediately-invoking function, add createProgram function that receives a date and
returns a created Program.
Start creating your movie festival.
In your main program function, create an instance of the Festival object.
Create two instances of Program using createProgram function.
Create four instances of Movie object using createMovie function. Add all created movies to
both programs using the addMovie method.
Add the created program instances to the created festival instance using festival’s addProgram
method.
Display festival’s data using getData method.
Hints
List is a synonym for array, so when we say a list of movies, it’s actually an array of movie
objects
Use JS built-in Date()object to create Date object
Use \t and \n special strings to format output
Use built-in String methods to transform text from lowercase to uppercase
Use Array’s built-in methods to add and remove elements from an array

Festival.js
When adding a movie to the movie list, make sure that there are no more than 4 movies of the
same genre. Also, length of all movies in a list can not be longer than 8 hours.
Handle error when you enter text instead of a number for movie length. Try to stop program
execution when this type of error happens.
Modify the festival so that it accepts maximum number of movies. Handle the error if text is
inserted instead of a number for maximum number of movies.
If there are no programs added to the festival, instead of program data display a message
informing the user that the program is yet to be announced.
Weekend festival
Program to be announced
*/

/////////////////////////////////////////////////////////////////////

//auxiliary functions

const formatDate = function (date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}.${month}.${year}`;
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
  try {
    if (duration !== Number(duration)) {
      throw new TypeError("Movie length input data should be a number");
    }
  } catch (err) {
    throw err;
  }
  (this.title = title),
    (this.genre = new Genre(genre)),
    (this.duration = duration),
    (this.getData = function () {
      return `${this.title}, ${this.duration}, ${this.genre.getData()}`;
    });
}

/////////////////////////////////////////////////////////////////////

function Program(date) {
  (this.date = new Date(date)),
    (this.movies = []),
    (this.moviesTotal = function () {
      return (this.moviesTotal = this.movies.length);
    }),
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
      return `\t${formatDate(this.date)}, program duration ${this.movies
        .map((movie) => movie.duration)
        .reduce((acc, val) => (acc += val), 0)} minutes\n\t\t${this.movies
        .map((movie) => movie.getData())
        .join("\n\t\t")}`;
    });
}

/////////////////////////////////////////////////////////////////////

function Festival(name, maxNumberOfMovies) {
  try {
    if (typeof maxNumberOfMovies == "string") {
      throw new TypeError("Maximum number of movies is an integer");
    }
  } catch (err) {
    maxNumberOfMovies = Number(maxNumberOfMovies);
  }
  (this.name = name),
    (this.programs = []),
    (this.numberOfMoviesAllPrograms = function () {
      return (this.numberOfMoviesAllPrograms = this.programs
        .map((program) => program.moviesTotal)
        .reduce((acc, val) => (acc += val), 0));
    }),
    (this.addProgram = function (program) {
      this.programs.push(program);
    }),
    (this.getData = function () {
      if (this.programs.length == 0) {
        return console.log(`${this.name}\n\tProgram to be announced`);
      }
      return `${this.name} has ${
        this.numberOfMoviesAllPrograms
      } movie titles\n${this.programs
        .map((program) => program.getData())
        .join("\n")}`;
    }),
    (this.maxNumberOfMovies = maxNumberOfMovies);
}

/////////////////////////////////////////////////////////////////////

(function () {
  //defining functions that return new objects

  const createMovie = function (title, duration, genre) {
    return new Movie(title, genre, duration);
  };

  const createProgram = function (date) {
    return new Program(date);
  };

  const program1 = createProgram("10/12/2024");
  const program2 = createProgram("8/24/2024");

  const movie1 = createMovie("The Shawshank Redemption", 142, "Drama");
  const movie2 = createMovie("Prisoners", 153, "Thriller");
  const movie3 = createMovie("The Big Lebowski", 117, "Comedy");
  const movie4 = createMovie("Top Gun", 110, "Action");

  program1.addMovie(movie1);
  program1.addMovie(movie2);
  program2.addMovie(movie3);
  program2.addMovie(movie4);

  program1.moviesTotal();
  program2.moviesTotal();

  const festival = new Festival("Cannes Festival", "5");

  festival.addProgram(program1);
  festival.addProgram(program2);

  festival.numberOfMoviesAllPrograms();

  console.log(festival.getData());

  //result of error handling for maximum number of movies

  console.log(typeof festival.maxNumberOfMovies);
})();
