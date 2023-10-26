import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";

import {
  SCREEN_LARGE,
  SCREEN_MEDIUM,
  SHOWN_MOVIES_12,
  SHOWN_MOVIES_8,
  SHOWN_MOVIES_5,
  DESKTOP,
  TABLET,
  MOBILE,
} from "../../utils/constants.js";

export default function MoviesCardList({
  movies,
  savable,
  deletable,
  saveMovie,
  deleteMovie,
  allSavedMovies,
}) {
  //количество отображаемых фильмов
  const [countMovies, setCountMovies] = useState(0);

  useEffect(() => {
    changeMovieCount();
  }, []);

  //функция соотношения размера экрана и количества карточек
  function changeMovieCount() {
    const width = window.innerWidth;
    if (width > SCREEN_LARGE) {
      setCountMovies(SHOWN_MOVIES_12);
    } else if (width > SCREEN_MEDIUM) {
      setCountMovies(SHOWN_MOVIES_8);
    } else {
      setCountMovies(SHOWN_MOVIES_5);
    }
  }

  //клик по кнопке еще
  function showMoreClick() {
    const width = window.innerWidth;
    if (width > SCREEN_LARGE) {
      setCountMovies(countMovies + DESKTOP);
    } else if (width > SCREEN_MEDIUM) {
      setCountMovies(countMovies + TABLET);
    } else {
      setCountMovies(countMovies + MOBILE);
    }
  }

  //слушатель для отслеживания изменения экрана
  useEffect(() => {
    setTimeout(window.addEventListener("resize", changeMovieCount), 500);
    return () => window.removeEventListener("resize", changeMovieCount);
  }, []);

  //условие для отображения кнопки ЕЩЕ
  const isMore = countMovies > movies.length;

  return (
    <section className="movie-cards">
      {savable && (
        <>
          <ul className="cards">
            {movies.slice(0, countMovies).map((movie) => (
              <MoviesCard
                key={movie.id || movie.movieId}
                savable={savable}
                deletable={deletable}
                deleteMovie={deleteMovie}
                saveMovie={saveMovie}
                movie={movie}
                allSavedMovies={allSavedMovies}
              />
            ))}
          </ul>
          <button
            className={
              !isMore ? "movie-cards__button" : "movie-cards__button_disable"
            }
            onClick={showMoreClick}
          >
            Ещё
          </button>
        </>
      )}
      {deletable && (
        <>
          <ul className="cards">
            {movies.map((movie) => (
              <MoviesCard
                key={movie.id || movie.movieId}
                savable={savable}
                deletable={deletable}
                deleteMovie={deleteMovie}
                saveMovie={saveMovie}
                movie={movie}
                allSavedMovies={allSavedMovies}
                movies={movies}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

{
  /* <p className="movie-cards__text">По вашему запросу ничего не найдено</p>;
<button
  className={!isMore ? "movie-cards__button" : "movie-cards__button_disable"}
  onClick={showMoreClick}
>
  Ещё
</button>; */
}

// useEffect(() => {
//   if (displayMovies.length === 0) {
//     setErrorMessage(notFound);
//     setMoviesNotFound(true);
//   } else {
//     setErrorMessage('');
//     setMoviesNotFound(false);
//   }
// }, [displayMovies, notFound]);
