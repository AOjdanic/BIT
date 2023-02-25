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
    `<img src="${
      data.image?.original ??
      "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
    }">`
  );
};

export const setDescription = function (data) {
  descriptionHolder.insertAdjacentHTML(
    "beforeend",
    `${data?.summary ?? "Description not available"}`
  );
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
  if (data.length === 0)
    return castList.insertAdjacentHTML(
      "afterbegin",
      `<li>No cast information provided</li>`
    );
  data.slice(0, 10).forEach((char) => {
    castList.insertAdjacentHTML("beforeend", `<li>${char.person.name}</li>`);
  });
};
