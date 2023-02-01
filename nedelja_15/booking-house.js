"use strict";

/*Bookmaker’s
In your IDE of choice, create a new JavaScript file named booking-house.js and make it so
that all code written in the file follows JS strict mode.
Create an anonymous immediately-invoking function that will hold main execution of all program
calls.

Make sure that functions that you write in this function are pure functions.

Create constructor functions with properties representing the following:
● Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
● Person - name, surname, date of birth
Player - person (instance of Person), bet amount, country (instance of Country)
Address - country, city, postal code, street and number
● BettingPlace - address and list of players (initially empty)
● BettingHouse - competition, list of betting places (initially empty) and number of players
Create continents as constants (objects that can not change). So, when passing a continent as a
parameter, you should pass Continent.ASIA.
Add a method to Person that returns a formatted string containing the name, surname and date
of birth of the person (date of birth in dd.mm.yy format).
Add a method to Address that returns a formatted string like the following one:
Nemanjina 4, 11000 Beograd, SR
Add a method to Player that returns a formatted string containing a country, expected win
amount (odds * bet amount) and person data.
SR, 1050.00 eur, Pera Peric, 29 years
Add a method to BettingPlace that returns a formatted string containing a street (without a
number), postal code and city, and sum of all bet amounts of that place.
Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
Add a method to BettingPlace that adds a player to the players list of a betting place.
Inside your immediately-invoking function, add a function that returns a created Player.
Inside your immediately-invoking function, add a function that creates a BettingPlace.
Create an instance of the BettingHouse that receives the name of competition.
Create four players with random data. Create two betting places. Add created players as you wish
to Betting places. Add betting places to the betting house.
Display all betting house data in the following manner:
Football World Cup Winner, 2 betting places, 4 bets
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
SR, 1050.00 eur, Pera Peric, 29 years
SR, 1050.00 eur, Pera Peric, 29 years
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
GR, 1050.00 eur, Pera Peric, 29 years
SR, 1050.00 eur, Pera Peric, 29 years
There are 3 bets on Serbia

*/

/////////////////////////////////////////////////////////////////////

//auxiliary functions

const formatDate = function (date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}.${month}.${year}`;
};

const calcAge = function (date) {
  return Math.floor(
    (Date.now() - date.getTime()) / (365 * 24 * 60 * 60 * 1000)
  );
};

/////////////////////////////////////////////////////////////////////

function Country(name, odds, continent) {
  (this.name = name), (this.odds = odds), (this.continent = continent);
}

/////////////////////////////////////////////////////////////////////

function Person(name, lastName, dateOfBirth) {
  (this.name = name),
    (this.lastName = lastName),
    (this.dateOfBirth = new Date(dateOfBirth));
}

Person.prototype.summary = function () {
  return `${this.name} ${this.lastName} ${formatDate(this.dateOfBirth)}`;
};

/////////////////////////////////////////////////////////////////////

function Player(person, betAmount, country) {
  (this.person = person),
    (this.betAmount = betAmount),
    (this.country = country);
}

Player.prototype.summary = function () {
  return `${this.country.name}, ${this.betAmount} eur, ${this.person.name} ${
    this.person.lastName
  }, ${calcAge(this.person.dateOfBirth)} years\n\t`;
};
/////////////////////////////////////////////////////////////////////

function Address(country, city, postalCode, street, number) {
  (this.country = country),
    (this.city = city),
    (this.postalCode = postalCode),
    (this.street = street),
    (this.number = number);
}

Address.prototype.summary = function () {
  return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country}`;
};
/////////////////////////////////////////////////////////////////////

function BettingPlace(address) {
  (this.address = address), (this.players = []);
}

BettingPlace.prototype.summary = function () {
  return `${this.address.street}, ${this.address.postalCode} ${
    this.address.city
  }, sum of all bets: ${this.players
    .map((player) => player.betAmount)
    .reduce((acc, bet) => (acc += bet), 0)}eur`;
};

BettingPlace.prototype.addPlayer = function (player) {
  this.players.push(player);
};

/////////////////////////////////////////////////////////////////////

function BettingHouse(competition) {
  (this.competition = competition),
    (this.bettingPlaces = []),
    (this.numberOfPlayers = this.bettingPlaces.flatMap(
      (bettingPlace) => bettingPlace.players
    ).length);
}

BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
  this.bettingPlaces.push(bettingPlace);
};

BettingHouse.prototype.summary = function () {
  let string = "";
  for (const bettingPlace of this.bettingPlaces) {
    string += bettingPlace.summary() + "\n\t";
    bettingPlace.players.forEach(
      (player) => (string += "\t" + player.summary())
    );
  }
  return `Football World Cup Winner, ${
    this.bettingPlaces.length
  } betting places, ${this.bettingPlaces
    .map((bettingPlace) => bettingPlace.players.length)
    .reduce((acc, val) => (acc += val), 0)} bets\n\t${string} `;
};

/////////////////////////////////////////////////////////////////////

const continents = {
  AFRICA: "Africa",
  ASIA: "Asia",
  EUROPE: "Europe",
  SOUTHAMERICA: "South America",
  NORTHAMERICA: "North America",
  AUSTRALIA: "Australia",
  ANTARCTICA: "Antarctica",
};

/////////////////////////////////////////////////////////////////////

//MAIN IIFE

(function () {
  /////////////////////////////////////////////////////////////////////

  const createPlayer = function (
    name,
    lastName,
    dateOfBirth,
    nameCountry,
    odds,
    continent,
    betAmount
  ) {
    const person = new Person(name, lastName, dateOfBirth);
    const country = new Country(nameCountry, odds, continent);
    return new Player(person, betAmount, country);
  };

  /////////////////////////////////////////////////////////////////////

  const createBettingPlace = function (
    country,
    city,
    postalCode,
    street,
    number
  ) {
    const address = new Address(country, city, postalCode, street, number);
    return new BettingPlace(address);
  };

  /////////////////////////////////////////////////////////////////////

  const maxBet = new BettingHouse("Meridian");

  /////////////////////////////////////////////////////////////////////

  const player1 = createPlayer(
    "Jose",
    "Lopez",
    "02/05/1985",
    "Argentina",
    0.5,
    continents.SOUTHAMERICA,
    2000
  );

  const player2 = createPlayer(
    "Bartolomeu",
    "Santos",
    "08/13/1970",
    "Portugal",
    0.7,
    continents.EUROPE,
    1000
  );

  const player3 = createPlayer(
    "Richard",
    "Fischer",
    "04/20/1975",
    "Germany",
    0.8,
    continents.EUROPE,
    3000
  );

  const player4 = createPlayer(
    "Ienari",
    "Tokugawa",
    "11/21/1977",
    "Japan",
    0.6,
    continents.ASIA,
    5000
  );

  /////////////////////////////////////////////////////////////////////

  const bettingPlace1 = createBettingPlace(
    "Serbia",
    "Belgrade",
    11000,
    "Cara Dusana",
    15
  );

  const bettingPlace2 = createBettingPlace(
    "Serbia",
    "Novi Sad",
    21000,
    "Bulevar cara Lazara",
    21
  );

  /////////////////////////////////////////////////////////////////////

  bettingPlace1.addPlayer(player1);
  bettingPlace1.addPlayer(player2);

  bettingPlace2.addPlayer(player3);
  bettingPlace2.addPlayer(player4);

  maxBet.addBettingPlace(bettingPlace1);
  maxBet.addBettingPlace(bettingPlace2);

  console.log(maxBet.summary());
})();
