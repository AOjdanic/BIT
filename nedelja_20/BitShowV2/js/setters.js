import {
  title,
  pictureHolder,
  descriptionHolder,
  seasonsHeading,
  seasonsList,
  castList,
} from "./dom.js";

export const setTitle = function (data) {
  title.textContent = `${data ? data.name : "Popular Shows"}`;
};

export const setImage = function (data) {
  pictureHolder.insertAdjacentHTML(
    "afterbegin",
    `<img src="${data.image.original}">`
  );
};

export const setDescription = function (data) {
  descriptionHolder.insertAdjacentHTML("beforeend", `${data.summary}`);
};

export const setSeasons = function (data) {
  seasonsHeading.textContent = `Seasons (${data.length})`;
  data.forEach((season) => {
    seasonsList.insertAdjacentHTML(
      "beforeend",
      `<li>${season.premiereDate} - ${season.endDate}</li>`
    );
  });
};

export const setCast = function (data) {
  data.slice(0, 10).forEach((char) => {
    castList.insertAdjacentHTML("beforeend", `<li>${char.person.name}</li>`);
  });
};
