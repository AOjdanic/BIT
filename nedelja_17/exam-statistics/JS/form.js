"use strict";

let studentsPassed = 0;
let studentsFailed = 0;

/////////////////////////////////////////////////////////////////////

const inputFormData = function () {
  let subject = subjectInput.value;
  let student = studentInput.value;
  let grade = gradeInput.value;
  return [subject, student, grade];
};

/////////////////////////////////////////////////////////////////////

const validateData = function (subject, student, grade) {
  if (subject === "Subject") {
    try {
      throw new Error("Wrong input subject");
    } catch (err) {
      alert(err);
    }
  } else if (student.split(" ").length < 2) {
    try {
      throw new Error("Please provide both name and surname");
    } catch (err) {
      alert(err);
    }
  } else if (grade === "Grade") {
    try {
      throw new Error("Grade must be between 1 and 10 ");
    } catch (err) {
      alert(err);
    }
  } else return [subject, student, grade];
};

/////////////////////////////////////////////////////////////////////

const updateList = function (exam) {
  let result = `<p class="student_results" >${exam.getExamInfo()} <span>${
    exam.grade
  }</span></p><hr/>`;
  if (exam.grade > 5) {
    passedDiv.insertAdjacentHTML("beforeend", result);
    studentsPassed++;
  } else {
    failedDiv.insertAdjacentHTML("beforeend", result);
    studentsFailed++;
  }
};

/////////////////////////////////////////////////////////////////////

const updateStatistics = function () {
  numberOfStudentsPassed.textContent = `${studentsPassed}`;

  numberOfStudentsFailed.textContent = `${studentsFailed}`;

  totalNumberOfStudents.textContent = `${studentsPassed + studentsFailed}`;

  percentage.textContent = `${(
    (studentsFailed / (studentsFailed + studentsPassed)) *
    100
  ).toFixed(0)}%`;
};

/////////////////////////////////////////////////////////////////////
