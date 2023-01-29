"use strict";

/////////////////////////////////////////////////////////////////////

//selecting DOM elements

let button = document.querySelector(".button");
let passedDiv = document.querySelector(".passed_div");
let failedDiv = document.querySelector(".failed_div");
let numberOfStudentsPassed = document.querySelector(".span_numberPassed");
let numberOfStudentsFailed = document.querySelector(".span_numberFailed");
let totalNumberOfStudents = document.querySelector(".span_total");
let percentage = document.querySelector(".percentage");
let subjectInput = document.querySelector(".subjects");
let studentInput = document.querySelector(".student");
let gradeInput = document.querySelector(".grades");

/////////////////////////////////////////////////////////////////////

//Event listener

button.addEventListener("click", function () {
  let [subject, student, grade] = inputFormData();

  [subject, student, grade] = validateData(subject, student, grade);

  let exam = new Exam(
    subject,
    student.split(" ")[0],
    student.split(" ")[1],
    grade
  );

  updateList(exam);

  updateStatistics();
});

/////////////////////////////////////////////////////////////////////
