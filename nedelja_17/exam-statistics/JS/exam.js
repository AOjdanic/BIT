"use strict";

function Exam(subject, studentNameIN, studentLastNameIN, grade) {
  (this.subject = new SubjectName(subject)),
    (this.student = new Student(studentNameIN, studentLastNameIN)),
    (this.grade = grade);
}

Exam.prototype.getExamInfo = function () {
  return `${this.subject.getSubjectName()} - ${this.student.getStudentData()}`;
};

Exam.prototype.hasPassed = function () {
  this.grade > 5 ? true : false;
};
