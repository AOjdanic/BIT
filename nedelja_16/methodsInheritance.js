"use strict";

/*
Employees and Managers

1.	Create constructor functions with properties representing the following:
○	Person: name, surname
○	Employee: inherits Person and has job and salary
○	Developer: inherits from Employee and has specialization
○	Manager: inherits from Employee and has department

2.	All developers should inherit method:
○	getSpecialization which prints out the name of the specialization

3.	All managers should inherit methods:
○	getDepartment which prints out the name of the department
○	changeDepartment which sets the department value to the given value

4.	All employees should inherit methods:
○	getData which returns the name, surname and salary 
○	getSalary which prints out the salary
○	increaseSalary which increases the salary by 10% 


     

 
Applications:

1.	Create constructor functions with properties representing the following:
○	WebApp: name, url, technologies, licence, stars
○	MobileApp: name, platforms, licence, stars
 
2.	All web applications should inherit methods: 
○	getData which prints out all the information
○	reactBased which checks if one of the used technologies is React
 
3.	All mobile applications should inherit methods:
○	getData which prints out all the informations
○	forAndroid which checks if one of the platforms the application is developed for is Android

4.	Both web and mobile applications should inherit methods:
○	isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
○	like which increases the number of stars by one
○	showStars which prints out the number of stars 
*/

//////////////////////////////////////////////////////////////////////
// function Person(name, lastName) {
//   (this.name = name), (this.lastName = lastName);
// }

// function Employee(name, lastName, job, salary) {
//   Person.call(this, name, lastName);
//   (this.job = job), (this.salary = salary);
// }

// function Developer(name, lastName, job, salary, specialization) {
//   Employee.call(this, name, lastName, job, salary);
//   this.specialization = specialization;
// }

// function Manager(name, lastName, job, salary, department) {
//   Employee.call(this, name, lastName, job, salary);
//   this.department = department;
// }

// Developer.prototype.getSpecialization = function () {
//   return this.specialization;
// };

// Manager.prototype.getDepartment = function () {
//   return this.department;
// };

// Manager.prototype.changeDepartment = function (department) {
//   this.department = department;
// };

// Employee.prototype.getData = function () {
//   return `${this.name} ${this.lastName} ${this.salary}`;
// };

// Employee.prototype.getSalary = function () {
//   return `${this.salary}`;
// };

// Employee.prototype.increaseSalary = function () {
//   return (this.salary = this.salary * 0.1);
// };

// //////////////////////////////////////////////////////////////////////

// function WebApp(name, url, technologies, licence, stars) {
//   (this.name = name),
//     (this.url = url),
//     (this.technologies = technologies),
//     (this.licence = licence),
//     (this.stars = stars),
//     AppMethods.call(this);
// }

// /////////////////////////////////////////////////////////////////////

// function MobileApp(name, platforms, licence, stars) {
//   (this.name = name),
//     (this.platforms = platforms),
//     (this.licence = licence),
//     (this.stars = stars),
//     AppMethods.call(this);
// }

// /////////////////////////////////////////////////////////////////////

// WebApp.prototype.getData = function () {
//   return `${this.name} ${this.platforms} ${this.licence} ${this.stars}`;
// };

// WebApp.prototype.reactBased = function () {
//   if (
//     this.technologies.filter(
//       (technology) => technology.toLowerCase() == "react"
//     )
//   ) {
//     return true;
//   }
// };

// /////////////////////////////////////////////////////////////////////

// MobileApp.prototype.getData = function () {
//   return `${this.name} ${this.platforms} ${this.licence} ${this.stars}`;
// };

// MobileApp.prototype.forAndroid = function () {
//   if (this.platforms.filter((platform) => platform.toLowerCase() == "android"))
//     return true;
//   else return false;
// };

// /////////////////////////////////////////////////////////////////////

// function AppMethods() {
//   (this.isCCLicence = function () {
//     if (this.licence.toLowerCase() == "creative commons") {
//       return true;
//     } else return false;
//   }),
//     (this.like = function () {
//       this.stars++;
//       return;
//     }),
//     (this.showStars = function () {
//       console.log(this.stars);
//     });
// }

/////////////////////////////////////////////////////////////////////

//Classes

class Person {
  constructor(name, lastName) {
    (this.name = name), (this.lastName = lastName);
  }
}

class Employee extends Person {
  constructor(name, lastName, job, salary) {
    super(name, lastName);
    (this.job = job), (this.salary = salary);
  }
  getData() {
    return `${this.name} ${this.lastName} ${this.salary}`;
  }

  getSalary() {
    console.log(this.salary);
  }

  increaseSalary() {
    this.salary = this.salary * 1.1;
    return this.salary;
  }
}

class Developer extends Employee {
  constructor(name, lastName, job, salary, specialization) {
    super(name, lastName, job, salary);
    this.specialization = specialization;
  }

  getSpecialization() {
    console.log(this.specialization);
  }
}

class Manager extends Employee {
  constructor(name, lastName, job, salary, department) {
    super(name, lastName, job, salary);
    this.department = department;
  }

  getDepartment() {
    console.log(this.department);
  }

  changeDepartment(departmentIn) {
    return (this.department = departmentIn);
  }
}

/////////////////////////////////////////////////////////////////////

class BothTech {
  isCCLicence() {
    if (this.licence.toLowerCase() == "creative commons") {
      return true;
    } else return false;
  }

  like() {
    this.stars = ++this.stars;
  }

  showStars() {
    console.log(this.stars);
  }
}

class WebApp extends BothTech {
  constructor(name, url, technologies, licence, stars) {
    super("");
    (this.name = name),
      (this.url = url),
      (this.technologies = technologies),
      (this.licence = licence),
      (this.stars = stars);
  }

  getData() {
    console.log(
      `${this.name} ${this.url} ${this.technologies} ${this.licence} ${this.stars}`
    );
  }

  reactBased() {
    return this.technologies.some(
      (technology) => technology.toLowerCase() === "react"
    );
  }
}

class MobileApp extends BothTech {
  constructor(name, platforms, licence, stars) {
    super("");
    (this.name = name),
      (this.platforms = platforms),
      (this.licence = licence),
      (this.stars = stars);
  }

  getData() {
    console.log(`${this.name} ${this.platforms} ${this.licence} ${this.stars}`);
  }

  forAndroid() {
    return this.platforms.some(
      (platform) => platform.toLowerCase() == "android"
    );
  }
}
