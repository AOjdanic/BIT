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
} from "./dom.js";

export const displayMovie = function (obj) {
  let html = `
  <div data-id="${
    obj?.show?.externals?.thetvdb ?? obj?.externals?.thetvdb
  }" data-src="${obj?.show?.id ?? obj?.id}" class="card" style="width: 18rem;">
        <img class="card-img-top" src="${
          obj?.show?.image?.medium ?? obj?.image?.medium
        }" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${obj?.show?.name ?? obj?.name}</h5>
    </div>
</div>`;
  container.insertAdjacentHTML("beforeend", html);
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
