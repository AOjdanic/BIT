import { displayMovie, renderError } from "./renderers.js";

export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data;
  } catch (err) {
    setTimeout(() => location.reload(), 2000);
    throw new Error(
      "⚠️ Bad request. There was an error fetching the data. Please try again 😊"
    );
  }
};

export const fetchTop50 = async function () {
  try {
    const data = await getJSON("https://api.tvmaze.com/shows");
    data
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, 50)
      .forEach((obj) => displayMovie(obj));
  } catch (err) {
    renderError(err);
  }
};
