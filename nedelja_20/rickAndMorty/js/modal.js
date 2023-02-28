import { body, modal, overlay } from "./dom.js";

export const setBodyPosition = function () {
  if (!modal.classList.contains("hidden"))
    return (body.style.position = "fixed");
  else return (body.style.position = "relative");
};

export const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  setBodyPosition();
};

export const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  setBodyPosition();
};
