import { suggestions, showHolder, search } from "./dom.js";

import { getJSON } from "./fetchers.js";

import {
  displaySearchSuggestions,
  displayMovie,
  renderError,
} from "./renderers.js";

import {
  setTitle,
  setImage,
  setDescription,
  setSeasons,
  setCast,
} from "./setters.js";

export const loadResults = async function () {
  try {
    const data = await getJSON(
      `https://api.tvmaze.com/search/shows?q=${search.value}`
    );
    if (data.length === 0)
      throw new Error("⚠️ No shows with that name. Please try again 😊");
    data.forEach((obj) => displayMovie(obj));
  } catch (err) {
    setTimeout(() => location.reload(), 2000);
    renderError(err.message);
  }
};

export const loadMovieDetails = async function (target) {
  try {
    // 0) Running all promises in parallel

    const [imageData, seasonsData, castData] = await Promise.all([
      getJSON(
        `https://api.tvmaze.com/lookup/shows?thetvdb=${target.dataset.id}`
      ),
      getJSON(`https://api.tvmaze.com/shows/${target.dataset.src}/seasons`),
      getJSON(`https://api.tvmaze.com/shows/${target.dataset.src}/cast`),
    ]);

    // 1) Showing show image, show description and setting title

    setTitle(imageData);
    setImage(imageData);
    setDescription(imageData);

    // 2) Showing list of seasons

    setSeasons(seasonsData);

    // 3) Showing cast list

    setCast(castData);
  } catch (err) {
    showHolder.style.display = "none";
    renderError(err);
  }
};

export const loadSearchSuggestions = async function () {
  try {
    const suggestionsData = await getJSON(
      `https://api.tvmaze.com/search/shows?q=${search.value}`
    );

    let list = suggestionsData.filter((movie) =>
      movie.show.name.toLowerCase().includes(`${search.value.toLowerCase()}`)
    );

    if (search.value.length === 0 || list.length === 0) {
      suggestions.classList.add("hidden");

      suggestions.innerHTML = "";
    } else if (search.value.length > 0 && list.length > 0) {
      if (suggestions.classList.contains("hidden"))
        suggestions.classList.remove("hidden");

      suggestions.innerHTML = "";

      list.forEach((movie, i) => {
        if (i < 10) displaySearchSuggestions(movie);
      });
    }
  } catch (err) {
    renderError(err);
  }
};
