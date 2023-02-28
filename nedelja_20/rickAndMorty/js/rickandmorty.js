import {
  overlay,
  btnCloseModal,
  container,
  modalContent,
  modal,
} from "./dom.js";

import {
  renderCharacterDetails,
  showCharacterDetails,
} from "./characterDetails.js";

import { getCharacters } from "./characters.js";

import { closeModal, showModal } from "./modal.js";

// modal window and overlay behaviour

overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// starting the page, fetching and rendering chracters

window.addEventListener("load", getCharacters);

// selecting specific character and loading its details

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
