"use strict";

// The following exercises needs to be done on 2 ways: 1) using classes, 2) using constructor functions.

// 1.
// a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
// Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
// Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
// b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
// c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
// d) Create a 3 car objects and test it!

//Classes

class Car {
  constructor(brand, model, motion, speed) {
    (this.brand = brand),
      (this.model = model),
      (this.motion = motion),
      (this.speed = speed);
  }

  checkMotion() {
    this.speed > 0 ? (this.motion = true) : (this.motion = false);
    return this.speed > 0 ? "car is in motion" : "car is not in motion";
  }

  accelerate(speedIncrease) {
    this.speed += speedIncrease;
    this.checkMotion();
    return;
  }

  break(speedDecrease) {
    this.speed > 0 && this.speed > speedDecrease
      ? (this.speed -= speedDecrease)
      : (this.speed = 0);

    this.checkMotion();
    return;
  }

  status() {
    return `${this.brand} ${this.model} is running at ${
      this.speed
    } km/h, car is ${this.motion ? "moving" : "not moving"}.`;
  }

  stopCar() {
    this.speed = 0;
    this.checkMotion();
  }
}

(function () {
  const car1 = new Car("Yugo", "55", true, 60);
  const car2 = new Car("Zastava", "128", true, 80);
  const car3 = new Car("Opel", "Cadet", false, 0);

  console.log(car1.checkMotion());
  console.log(car2.checkMotion());
  console.log(car3.checkMotion());

  console.log(car1.speed);
  car1.accelerate(40);
  console.log(car1.speed);

  console.log(car2.speed);
  car2.accelerate(40);
  console.log(car2.speed);

  console.log(car3.speed);
  car3.accelerate(40);
  console.log(car3.speed);
  console.log(car3.checkMotion());

  car3.break(70);
  console.log(car3.speed);

  console.log(car1.status());
  console.log(car2.status());
  console.log(car3.status());

  console.log(car2.status());
  car2.stopCar();
  console.log(car2.status());
})();

//Constructor functions

// function Car(brand, model, motion, speed) {
//   (this.brand = brand),
//     (this.model = model),
//     (this.motion = motion),
//     (this.speed = speed);
//   this.checkMotion = function () {
//     this.speed > 0 ? (this.motion = true) : (this.motion = false);
//     return this.speed > 0 ? "car is in motion" : "car is not in motion";
//   };

//   this.accelerate = function (speedIncrease) {
//     return (this.speed += speedIncrease);
//   };

//   this.break = function (speedDecrease) {
//     this.speed > 0 && this.speed > speedDecrease
//       ? (this.speed -= speedDecrease)
//       : (this.speed = 0);

//     this.speed > 0 ? (this.motion = true) : (this.motion = false);
//     return;
//   };

//   this.status = function () {
//     return `${this.brand} ${this.model} is running at ${
//       this.speed
//     } km/h, car is ${this.motion ? "moving" : "not moving"}.`;
//   };

//   this.stopCar = function () {
//     this.motion = false;
//     return (this.speed = 0);
//   };
// }

// 2.
// a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
// f) Create a TV object and test it!

//Classes

// class TV {
//   constructor(brand = "HiSense", channel = 1, volume = 50) {
//     (this.brand = brand), (this.channel = channel), (this.volume = volume);
//   }

//   increaseVolume(volumeIncrease) {
//     this.volume + volumeIncrease <= 100
//       ? (this.volume += volumeIncrease)
//       : (this.volume = 100);
//   }

//   decreaseVolume(volumeDecrease) {
//     this.volume - volumeDecrease >= 0
//       ? (this.volume -= volumeDecrease)
//       : (this.volume = 0);
//   }

//   setChannel(channelIn) {
//     if (channelIn > 0 && channelIn <= 50) {
//       return (this.channel = channelIn);
//     } else {
//       return (this.channel = this.channel);
//     }
//   }
//   resetTV() {
//     this.channel = 1;
//     this.volume = 50;
//     return;
//   }

//   status() {
//     return `${this.brand} at channel ${this.channel}, volume ${this.volume}.`;
//   }
// }

//Constuctor functions

function TV(brand = "HiSense", channel = 1, volume = 50) {
  (this.brand = brand), (this.channel = channel), (this.volume = volume);
  this.increaseVolume = function (volumeIncrease) {
    this.volume + volumeIncrease <= 100
      ? (this.volume += volumeIncrease)
      : (this.volume = 100);
  };

  this.decreaseVolume = function (volumeDecrease) {
    this.volume - volumeDecrease >= 0
      ? (this.volume -= volumeDecrease)
      : (this.volume = 0);
  };

  this.setChannel = function (channelIn) {
    if (channelIn > 0 && channelIn <= 50) {
      return (this.channel = channelIn);
    } else {
      return (this.channel = this.channel);
    }
  };
  this.resetTV = function () {
    this.channel = 1;
    this.volume = 50;
    return;
  };

  this.status = function () {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}.`;
  };
}

const HiSense = new TV();

(function () {
  console.log(HiSense.status());

  HiSense.increaseVolume(20);
  console.log(HiSense.volume);
  HiSense.increaseVolume(50);
  console.log(HiSense.volume);

  HiSense.decreaseVolume(30);
  console.log(HiSense.volume);
  HiSense.decreaseVolume(100);

  console.log(HiSense.volume);

  HiSense.setChannel(42);
  console.log(HiSense.channel);
  console.log(HiSense.status());

  HiSense.setChannel(80);
  console.log(HiSense.channel);

  HiSense.resetTV();

  console.log(HiSense.status());
})();
