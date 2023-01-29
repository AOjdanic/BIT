"use strict";

const capitalFirstLetter = function (string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
};

function Student(nameStudentIn, lastNameStudentIn) {
  (this.name = capitalFirstLetter(nameStudentIn)),
    (this.lastName = capitalFirstLetter(lastNameStudentIn));
}

Student.prototype.getStudentData = function () {
  return `${this.name} ${this.lastName}`;
};
