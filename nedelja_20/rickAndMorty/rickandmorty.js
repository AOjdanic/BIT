"use strict";

/*
TODO
1)modulation
*/
const body = document.querySelector("body");
const container = document.querySelector(".cards__container");
const modal = document.querySelector(".my__modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn__close");
const modalContent = document.querySelector(".modal__content");

const setBodyPosition = function () {
  if (!modal.classList.contains("hidden"))
    return (body.style.position = "fixed");
  else return (body.style.position = "relative");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  setBodyPosition();
};

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  setBodyPosition();
};

overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

///starting the page, getting and rendering chracters
const renderCharacter = function (charObj) {
  let html = `
  <div data-id="${charObj.id}" class="card" style="width: 18rem;">
  <button>
<img src="${charObj.image}" class="card-img-top" alt="...">
 </button>
   <div class="card-body">
    <h5 class="card-title">${charObj.name}</h5>
      <a  class="btn btn-secondary like-btn">Like</a>
  </div>
</div>
    `;
  container.insertAdjacentHTML("beforeend", html);
};

const getCharacters = async function () {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await res.json();
  results.forEach((result) => renderCharacter(result));
};

window.addEventListener("load", getCharacters);
////////////////////////

///Clicking specific character and loading its details

const renderCharacterDetails = function (data) {
  let html = `
  <h1>${data.name}</h1>
  <img src="${data.image}">
  <p>Gender: ${data.gender}</p>
  <p>Location: ${data.location.name}</p>
  <p>Origin: ${data.origin.name}</p>
  <p>Species: ${data.species}</p>
  <p>Type: ${data.type ? data.type : "unknown"}</p>
  <p>Status: ${data.status}</p>
  `;
  return html;
};

const showCharacterDetails = async function (target) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${target.dataset.id}`
  );
  const data = await res.json();
  return data;
};

container.addEventListener("click", async function (e) {
  let target = e.target.closest(".card");

  if (e.target.classList.contains("like-btn")) {
    target.querySelector(".like-btn").classList.toggle("btn-secondary");
    target.querySelector(".like-btn").classList.toggle("btn-success");
  }

  if (target === null || e.target.classList.contains("like-btn")) return;

  const charObj = await showCharacterDetails(target);
  modalContent.innerHTML = renderCharacterDetails(charObj);

  showModal();
});
