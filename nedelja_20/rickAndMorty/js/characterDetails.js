export const renderCharacterDetails = function (data) {
  let html = `
    <h1>${data.name}</h1>
    <img src="${data.image}">
    <p>Gender: ${data.gender}</p>
    <p>Location: ${data.location.name}</p>
    <p>Origin: ${data.origin.name}</p>
    <p>Species: ${data.species}</p>
    <p>Type: ${data.type ? data.type : "unknown"}</p>
    <p>Status: ${data.status}</p>
    `;
  return html;
};

export const showCharacterDetails = async function (target) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${target.dataset.id}`
  );
  const data = await res.json();
  return data;
};
