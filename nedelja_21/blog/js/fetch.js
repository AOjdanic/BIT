import { renderPost } from "./render.js";

export const fetchData = async function () {
  const res = await fetch("http://127.0.0.1:5500");
  const data = await res.json();
  console.log(data);
  data.forEach((post) => renderPost(post));
};
