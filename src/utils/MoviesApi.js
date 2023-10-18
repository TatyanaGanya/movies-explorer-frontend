//ok
const baseUrl = "https://api.nomoreparties.co/beatfilm-movies";
function getResponseData(res) {
  return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
}

function getCards() {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => getResponseData(res));
}

export default getCards;
