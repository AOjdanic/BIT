"use strict";
//
const search = document.querySelector("input");
const div = document.querySelector(".container");
const title = document.querySelector(".title");
const popular = document.querySelector(".popular");

const displayMovie = function (obj) {
  let html = `
  <div data-id="${
    obj?.show?.externals?.thetvdb ?? obj?.externals?.thetvdb
  }" data-src="${obj?.show?.id ?? obj?.id}" class="card" style="width: 18rem;">
  <img class="card-img-top" src="${
    obj?.show?.image?.medium ?? obj?.image?.medium
  }" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${obj?.show?.name ?? obj?.name}</h5>
   </div>
</div>`;
  div.insertAdjacentHTML("beforeend", html);
};

const fetchTop50 = function () {
  fetch("https://api.tvmaze.com/shows")
    .then((result) => result.json())
    .then((result) => {
      let list = Array.from(result);
      let top50 = list
        .sort((a, b) => b.rating.average - a.rating.average)
        .slice(0, 50);
      console.log(top50);
      return top50.forEach((obj) => displayMovie(obj));
    });
};

const removeCards = function () {
  return document.querySelectorAll(".card").forEach((el) => el?.remove());
};

window.addEventListener("load", fetchTop50);

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    removeCards();
    fetch(`https://api.tvmaze.com/search/shows?q=${search.value}`)
      .then((result) => result.json())
      .then((result) => {
        let list = Array.from(result);
        list.forEach((obj) => displayMovie(obj));
      });
    search.value = "";
  }
});

title.addEventListener("click", function (e) {
  popular.textContent = "Popular Shows";
  document.querySelector(".single_movie")?.remove();
  removeCards();
  fetchTop50();
});

div.addEventListener("click", function (e) {
  let target = e.target.closest(".card");
  if (e.target.classList.contains("wrapper")) return;
  fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${target.dataset.id}`)
    .then((result) => result.json())
    // .then((result) => console.log(result))
    .then((result) => {
      popular.textContent = `${result.name}`;

      div.insertAdjacentHTML(
        "afterbegin",
        `<div class="single_movie">
        <img src="${result.image.original}">
        ${result.summary}
        </div>`
      );
      return;
    });
  fetch(`https://api.tvmaze.com/shows/${target.dataset.src}/seasons`)
    .then((seasons) => seasons.json())
    .then((season) => console.log(season));
  removeCards();
});
