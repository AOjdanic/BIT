import { showHolder, search } from "./dom.js";
import { getJSON } from "./fetchers.js";
import { displayMovie, renderError } from "./renderers.js";
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
    data.forEach((obj) => displayMovie(obj));
  } catch (err) {
    renderError(err);
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
