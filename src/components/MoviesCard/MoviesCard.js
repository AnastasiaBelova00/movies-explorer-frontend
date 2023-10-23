import "./MoviesCard.css";
import { useState, useEffect } from "react";
import { MOVIE_URL } from "../../utils/constants";

export default function MoviesCard({
  movie,
  savable,
  deletable,
  saveMovie,
  deleteMovie,
  allSavedMovies,
}) {
  //состояние кнопки сохранения
  const [isSaved, setSaved] = useState(false);

  //функция сохранения/удаления фильма
  function onSaveClick() {
    const isSaved = allSavedMovies.some((item) => item.movieId === movie.id);
    if (!isSaved) {
      setSaved(true);
      saveMovie(movie);
    } else {
      const savedMovie = allSavedMovies.find(
        (item) => item.movieId === movie.id
      );
      deleteMovie(savedMovie);
      setSaved(false);
    }
  }

  //удаление фильма в saved-movies
  function onDeleteClick() {
    deleteMovie(movie);
  }

  //конвертация длительности фильма
  function durationConverter(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    return `${hours}ч${minutes}м`;
  }

  return (
    <li className="card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        {savable && (
          <img
            className="card__image"
            src={`${MOVIE_URL}${movie.image.url}`}
            alt={movie.nameRU}
          />
        )}
        {deletable && (
          <img className="card__image" src={movie.image} alt={movie.nameRU} />
        )}
      </a>
      {savable && (
        <button
          className={isSaved ? "card__button_saved" : "card__button"}
          onClick={onSaveClick}
        ></button>
      )}
      {deletable && (
        <button
          className="card__button_delete"
          onClick={onDeleteClick}
        ></button>
      )}
      <div className="card__text">
        <p className="card__title">{movie.nameRU}</p>
        <p className="card__duration">{durationConverter(movie.duration)}</p>
      </div>
    </li>
  );
}
