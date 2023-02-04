"use strict";

const inputField = document.querySelector("input");
const main = document.querySelector("main");
const display = document.querySelector(".display");

inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let request = $.ajax({
      url: `https://api.github.com/users/${inputField.value}`,
      method: "GET",
    });
    request.done(function (msg) {
      console.log(msg);
      let html = `
          <div class="display disp">
          <img class="display_img disp" src="${msg.avatar_url}"/>
          <p class="display_p disp">${msg.login}</p>
          </div>`;
      main.insertAdjacentHTML("beforeend", html);
    });
    inputField.value = "";
  }
});
