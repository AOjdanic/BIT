import { main } from "./dom.js";

export const renderPost = function (data) {
  let html = `
    <div class="post">
    <h2 class="postTitle">${data.title}</h2>
    <p class="postBody">
      ${data.intro}
    </p>
  </div>
  `;
  main.insertAdjacentHTML("beforeend", html);
};
