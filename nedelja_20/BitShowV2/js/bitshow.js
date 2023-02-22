/*
TO-DO
1) responsive design of showPlaceholder
2) search suggestions
*/

import { search, showHolder, logo, container } from "./dom.js";

import { loadResults, loadMovieDetails } from "./loaders.js";

import { setTitle } from "./setters.js";

import {
  toggleShowHolderDisplay,
  clearPageContent,
  clearShowContainerContent,
} from "./renderers.js";

import { fetchTop50 } from "./fetchers.js";

window.addEventListener("load", fetchTop50);

search.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    clearPageContent();
    clearShowContainerContent();
    if (!showHolder.classList.contains("hidden")) toggleShowHolderDisplay();
    loadResults();
    search.value = "";
  }
});

logo.addEventListener("click", function () {
  clearPageContent();
  clearShowContainerContent();
  if (!showHolder.classList.contains("hidden")) toggleShowHolderDisplay();
  setTitle();
  fetchTop50();
});

container.addEventListener("click", function (e) {
  let target = e.target.closest(".card");

  if (e.target.classList.contains("container")) return;

  clearPageContent();

  toggleShowHolderDisplay();

  loadMovieDetails(target);
});
