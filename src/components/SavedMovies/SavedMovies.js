import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import { filterShortMovies, filterNameMovies } from "../../utils/utils";

export default function SavedMovies({ allSavedMovies, deleteMovie }) {
  //состояние чекбокса
  const [isCheckbox, setCheckbox] = useState(false);
  //отфильтрованные фильмы
  const [filteredMovies, setFilteredMovies] = useState(allSavedMovies);
  //стейт запроса
  const [query, setQuery] = useState("");
  //ошибка
  const [error, setError] = useState("");

  //фильтр поиска сохраненных фильмов по запросу
  useEffect(() => {
    const searchMovies = filterNameMovies(allSavedMovies, query);
    setFilteredMovies(
      isCheckbox ? filterShortMovies(searchMovies) : searchMovies
    );
    localStorage.setItem("searchSavedMovies", JSON.stringify(searchMovies));
  }, [allSavedMovies, isCheckbox, query]);

  //состояние чекбокса
  function changeCheckbox() {
    setCheckbox(!isCheckbox);
    localStorage.setItem("checkbox", !isCheckbox);
  }

  //запрос
  function searchFilterSavedMovies(query) {
    setQuery(query);
  }

  //отображение ошибки
  useEffect(() => {
    if (filteredMovies.length === 0) {
      setError("По Вашему запросу ничего не найдено :(");
    } else {
      setError("");
    }
  }, [searchFilterSavedMovies]);

  return (
    <>
      <main>
        <SearchForm
          onSearch={searchFilterSavedMovies}
          changeCheckbox={changeCheckbox}
          isCheckbox={isCheckbox}
        />
        <span className="movie-cards__text">{error}</span>
        <MoviesCardList
          movies={filteredMovies}
          deletable={true}
          deleteMovie={deleteMovie}
        />
      </main>
    </>
  );
}
