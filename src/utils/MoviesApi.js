import { MOVIE_URL } from "./constants";

//универсальная проверка запроса на сервер
function checkStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(`${err.message}`));
}

export function getAllMovies() {
  return fetch(`${MOVIE_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => checkStatus(res));
}
