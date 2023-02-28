import { container } from "./dom.js";

export const renderCharacter = function (charObj) {
  let html = `
    <div data-id="${charObj.id}" class="card" style="width: 18rem;">
    <button>
  <img src="${charObj.image}" class="card-img-top" alt="...">
   </button>
     <div class="card-body">
      <h5 class="card-title">${charObj.name}</h5>
        <a  class="btn btn-secondary like-btn">Like</a>
    </div>
  </div>
      `;
  container.insertAdjacentHTML("beforeend", html);
};

export const getCharacters = async function () {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await res.json();
  results.forEach((result) => renderCharacter(result));
};
