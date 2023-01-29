"use strict";

function SubjectName(nameIn) {
  this.name = nameIn;
}

SubjectName.prototype.getSubjectName = function () {
  return this.name;
};
