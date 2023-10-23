import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";

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

  //функция соотношения размера экрана и количества карточек
  function changeMovieCount() {
    const width = window.innerWidth;
    if (width > 1066) {
      setCountMovies(12);
    } else if (width > 678) {
      setCountMovies(8);
    } else {
      setCountMovies(5);
    }
  }
  useEffect(() => {
    changeMovieCount();
  }, []);

  //клик по кнопке еще
  function showMoreClick() {
    const width = window.innerWidth;
    if (width > 1066) {
      setCountMovies(countMovies + 3);
    } else if (width > 678) {
      setCountMovies(countMovies + 2);
    } else {
      setCountMovies(countMovies + 2);
    }
  }

  //слушатель для отслеживания изменения экрана
  useEffect(() => {
    setTimeout(window.addEventListener("resize", changeMovieCount), 500);
  });

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
