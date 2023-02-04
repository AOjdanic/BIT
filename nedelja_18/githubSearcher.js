"use strict";

//Selecting DOM elements

/////////////////////////////////////////////////////////////////////
const inputField = document.querySelector("input");
const main = document.querySelector("main");
const display = document.querySelector(".display");
const invisible = document.querySelector(".invisible");
const button = document.querySelector("button");

/////////////////////////////////////////////////////////////////////

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
          </div>
          <button class="button inactive">Go back to users</button>`;
      main.insertAdjacentHTML("beforeend", html);
    });
    let request2 = $.ajax({
      url: `https://api.github.com/users/${inputField.value}/repos`,
      method: "GET",
    });
    request2.done(function (msg) {
      console.log(msg);
      msg.forEach((repo) => {
        let html = `
        <table class="repo_table inactive">
        <tr>
        <th><p>Repository name</p></th>
        <th><p>Repository description</p></th>
        <th><p>Repository stars</p></th>
        </tr>
        <tr>
        <td><p class="repo_desc">${repo.name}</p></td>
        <td><p class="repo_desc">${repo.description}</p></td>
        <td><p class="repo_desc">${repo.stargazers_count}</p></td>
        </tr>
        </table>`;
        main.insertAdjacentHTML("beforeend", html);
      });
    });
    inputField.value = "";
  }
});

main.addEventListener("click", function (e) {
  if (e.target.classList.contains("disp")) {
    document
      .querySelectorAll(".display")
      .forEach((display) => display.classList.toggle("inactive"));
    document.querySelector("button").classList.toggle("inactive");
    document
      .querySelectorAll(".repo_table")
      .forEach((table) => table.classList.toggle("inactive"));
  }
});

main.addEventListener("click", function (e) {
  if (e.target.classList.contains("button")) {
    document
      .querySelectorAll(".display")
      .forEach((display) => display.classList.toggle("inactive"));
    document.querySelector("button").classList.toggle("inactive");
    document
      .querySelectorAll(".repo_table")
      .forEach((table) => table.classList.toggle("inactive"));
  }
});
