"use strict";

let message;

for (let i = 0; i < 6; i++)
  document
    .querySelector(`.img${i + 1}`)
    .addEventListener("click", function (e) {
      if (i !== 1 && i !== 4) {
        e.stopPropagation();
      }
      document.querySelector(`.img${i + 1}`).style.border = "1px solid red";

      message = `You just clicked on image number ${i + 1}`;
    });

document.addEventListener("click", function () {
  console.log(message);
  alert(message);
});
