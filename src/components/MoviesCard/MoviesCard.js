import "./MoviesCard.css";
import { MOVIE_URL } from "../../utils/constants";
import { durationConverter } from "../../utils/utils";

export default function MoviesCard({
  movie,
  savable,
  deletable,
  saveMovie,
  deleteMovie,
  allSavedMovies,
}) {
  //проверка совпадения сохраненных фильмов и фильмов из массива
  const isSaved = allSavedMovies?.some((item) => item.movieId === movie.id);

  //функция сохранения/удаления фильма
  function onSaveClick() {
    if (!isSaved) {
      allSavedMovies?.find((item) => item.movieId === movie.id);
      saveMovie(movie);
    } else {
      const savedMovie = allSavedMovies.find(
        (item) => item.movieId === movie.id
      );
      deleteMovie(savedMovie);
    }
  }

  //удаление фильма в saved-movies
  function onDeleteClick() {
    deleteMovie(movie);
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
