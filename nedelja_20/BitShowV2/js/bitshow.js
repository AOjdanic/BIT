/*
TO-DO
1) responsive design of showPlaceholder
*/

import { suggestions, search, showHolder, logo, container } from "./dom.js";

import {
  loadResults,
  loadMovieDetails,
  loadSearchSuggestions,
} from "./loaders.js";

import { setTitle } from "./setters.js";

import {
  clearSearchContent,
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
    clearSearchContent();
  }
});

search.addEventListener("input", function () {
  loadSearchSuggestions();
});

logo.addEventListener("click", function () {
  clearPageContent();
  clearShowContainerContent();
  clearSearchContent();
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

  clearSearchContent();
});

suggestions.addEventListener("click", function (e) {
  let target = e.target.closest(".flex");
  clearPageContent();
  if (showHolder.classList.contains("hidden")) toggleShowHolderDisplay();
  if (!showHolder.classList.contains("hidden")) clearShowContainerContent();
  loadMovieDetails(target);
  clearSearchContent();
});
