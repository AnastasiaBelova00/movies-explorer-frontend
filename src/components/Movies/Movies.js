import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import { filterNameMovies, filterShortMovies } from "../../utils/utils";
import Preloader from "../Preloader/Preloader";

export default function Movies({
  allMovies,
  saveMovie,
  allSavedMovies,
  deleteMovie,
  searchFilterMovies,
  isLoading,
}) {
  //состояние чекбокса
  const [isCheckbox, setCheckbox] = useState(
    JSON.parse(localStorage.getItem("checkbox")) || false
  );
  //отфильтрованные фильмы
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("searchMovies")) || []
  );

  //стейт запроса
  const [query, setQuery] = useState(localStorage.getItem("query") || "");

  //ошибка
  const [error, setError] = useState("");

  // //фильтр поиска фильмов по длине
  // useEffect(() => {
  //   const filterMovies = filterNameMovies(allMovies, query);
  //   if (filterMovies.length !== 0 && query !== "") {
  //     setFilteredMovies(
  //       isCheckbox ? filterShortMovies(filterMovies) : filterMovies
  //     );
  //   } else {
  //     setFilteredMovies([]);
  //   }
  //   localStorage.setItem("searchMovies", JSON.stringify(filterMovies));
  //   localStorage.setItem("query", query);
  // }, [allMovies, isCheckbox, query]);

  //фильтр поиска фильмов по названию и длине
  function filterMovies(allMovies, isCheckbox, query) {
    const filterMovies = filterNameMovies(allMovies, query);
    if (filterMovies.length !== 0 && query !== "") {
      setFilteredMovies(
        isCheckbox ? filterShortMovies(filterMovies) : filterMovies
      );
    } else {
      setFilteredMovies([]);
    }
    localStorage.setItem("searchMovies", JSON.stringify(filterMovies));
    localStorage.setItem("query", query);
  }

  //запрос
  function searchFilterMovies(query) {
    setQuery(query);
    filterMovies(allMovies, isCheckbox, query);
  }

  //состояние чекбокса
  function changeCheckbox() {
    setCheckbox(!isCheckbox);
    localStorage.setItem("checkbox", !isCheckbox);
  }

  //отображение ошибки
  useEffect(() => {
    if (query === "") {
      setError("Введите название фильма");
    }
    if (query !== "") {
      if (filteredMovies.length < 1) {
        setError("По Вашему запросу ничего не найдено :(");
      } else {
        setError("");
      }
    }
  }, [searchFilterMovies]);

  // //отображение массива, запроса и чекбокса после перезагрузки
  // useEffect(() => {
  //   if (
  //     localStorage.checkbox &&
  //     localStorage.searchMovies &&
  //     localStorage.query
  //   ) {
  //     setCheckbox(JSON.parse(localStorage.getItem("checkbox")));
  //     setFilteredMovies(JSON.parse(localStorage.getItem("searchMovies")));
  //     setQuery(localStorage.getItem("query"));
  //   }
  // }, []);

  return (
    <>
      <main>
        <SearchForm
          onSearch={searchFilterMovies}
          changeCheckbox={changeCheckbox}
          isCheckbox={isCheckbox}
        />
        <span className="movie-cards__text">{error}</span>
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={filteredMovies}
            savable={true}
            saveMovie={saveMovie}
            allSavedMovies={allSavedMovies}
            deleteMovie={deleteMovie}
          />
        )}
      </main>
    </>
  );
}
