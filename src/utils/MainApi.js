// export const BASE_URL = "https://api.nastasya.nomoredomainsicu.ru";

import { MOVIE_URL } from "./constants";

export const BASE_URL = "http://localhost:3000";

//универсальная проверка запроса на сервер
function checkStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(`${err.message}`));
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkStatus(res));
}

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkStatus(res));
}

export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkStatus(res));
}

//получаем информацию о пользователе
export function getUserInfo() {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => checkStatus(res));
}

//изменяем информацию пользователя
export function editUserInfo(data) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => checkStatus(res));
}

//показываем сохраненные фильмы
export function getSavedMovies() {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => checkStatus(res));
}

//добавляем фильм
export function saveMovie(data) {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `${MOVIE_URL}${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `${MOVIE_URL}${data.image.formats.thumbnail.url}`,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then((res) => checkStatus(res));
}

//удаляем фильм
export function deleteMovie(movieId) {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => checkStatus(res));
}
