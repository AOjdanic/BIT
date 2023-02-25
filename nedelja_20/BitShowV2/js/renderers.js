import {
  container,
  showHolder,
  navigation,
  title,
  footer,
  pictureHolder,
  seasonsList,
  castList,
  descriptionHolder,
  suggestions,
  search,
} from "./dom.js";

export const displayMovie = function (obj) {
  let html = `
  <div data-id="${
    obj?.show?.externals?.thetvdb ?? obj?.externals?.thetvdb
  }" data-src="${obj?.show?.id ?? obj?.id}" class="card" style="width: 18rem;">
        <img class="card-img-top" src="${
          obj?.show?.image?.medium ??
          obj?.image?.medium ??
          "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
        }" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${obj?.show?.name ?? obj?.name}</h5>
    </div>
</div>`;
  container.insertAdjacentHTML("beforeend", html);
};

export const displaySearchSuggestions = function (movie) {
  let html = `
    <div data-id="${
      movie?.show?.externals?.thetvdb ?? movie?.externals?.thetvdb
    }" data-src="${movie?.show?.id ?? movie?.id}" class="flex">
  <img src="${
    movie.show?.image?.medium ??
    "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
  }" >
  <span>${movie.show.name}</span></div>
  `;
  suggestions.insertAdjacentHTML("beforeend", html);
};

export const renderError = function (error) {
  navigation.style.display = "none";
  title.style.display = "none";
  footer.style.display = "none";
  let html = `
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>${error}</strong> 
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  `;
  container.insertAdjacentHTML("beforeend", html);
};

export const toggleShowHolderDisplay = function () {
  showHolder.classList.toggle("hidden");
};

export const clearPageContent = function () {
  container.innerHTML = "";
};

export const clearShowContainerContent = function () {
  pictureHolder.innerHTML = "";
  seasonsList.innerHTML = "";
  castList.innerHTML = "";
  descriptionHolder.innerHTML = "";
};

export const clearSearchContent = function () {
  search.value = "";
  suggestions.innerHTML = "";
};
