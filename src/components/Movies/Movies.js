import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import { filterNameMovies, filterShortMovies } from "../../utils/utils";
import Preloader from "../Preloader/Preloader";
import * as apiMovie from "../../utils/MoviesApi";

export default function Movies({ saveMovie, allSavedMovies, deleteMovie }) {
  //состояние чекбокса
  const [isCheckbox, setCheckbox] = useState(false);

  //итоговый массив фильмов
  const [filteredMovies, setFilteredMovies] = useState([]);

  // //запрос
  // const query = localStorage.getItem("query");

  //ошибка
  const [error, setError] = useState("");

  //загрузка для прелоадера
  const [isLoading, setLoading] = useState(false);

  //все фильмы с сервера
  const [allMovies, setAllMovies] = useState([]);

  //массив после запроса
  const [searchedMovies, setSearchedMovies] = useState([]);

  //сабмит поиска фильмов
  function searchFilterMovies(query) {
    localStorage.setItem("query", query);
    localStorage.setItem("checkbox", isCheckbox);
    if (allMovies.length === 0) {
      setLoading(true);
      apiMovie
        .getAllMovies()
        .then((res) => {
          setAllMovies(res);
          localStorage.setItem("movies", JSON.stringify(res));
          setError("");
          filterMovies(res, query, isCheckbox);
        })
        .catch((err) => {
          setError(
            "Во время запроса произошла ошибка, пожалуйста, подождите или повторите попытку позже"
          );
          console.log(`Ошибка ${err}`);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError("");
      // const movies = JSON.parse(localStorage.getItem("movies"));
      filterMovies(allMovies, query, isCheckbox);
    }
  }

  //функция фильтра массива фльмов
  function filterMovies(movies, query, short) {
    const searchMovies = filterNameMovies(movies, query, short);
    setSearchedMovies(searchMovies);
    setFilteredMovies(short ? filterShortMovies(searchMovies) : searchMovies);
    localStorage.setItem("searchMovies", JSON.stringify(searchMovies));
    if (searchMovies.length === 0) {
      setError("По Вашему запросу ничего не найдено :(");
    } else {
      setError("");
    }
  }

  // //фильтр поиска фильмов по названию и длине
  // function filterMovies(allMovies, isCheckbox, query) {
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
  // }

  // //запрос
  // function searchFilterMovies(query) {
  //   setQuery(query);
  //   filterMovies(allMovies, isCheckbox, query);
  // }

  //состояние чекбокса
  function changeCheckbox() {
    setCheckbox(!isCheckbox);
    if (!isCheckbox) {
      setFilteredMovies(filterShortMovies(searchedMovies));
    } else {
      setFilteredMovies(searchedMovies);
    }
    localStorage.setItem("checkbox", !isCheckbox);
  }

  //информация о состоянии чекбокса
  useEffect(() => {
    if (localStorage.getItem("checkbox") === "true") {
      setCheckbox(true);
    } else {
      setCheckbox(false);
    }
  }, []);

  //отображение фильмов после перезагрузки в зависимости от состояния чекбокса
  useEffect(() => {
    if (localStorage.getItem("searchMovies")) {
      const movies = JSON.parse(localStorage.getItem("searchMovies"));
      setSearchedMovies(movies);
      if (localStorage.getItem("checkbox") === "true") {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  // //отображение чекбокса после перезагрузки
  // useEffect(() => {
  //   if (localStorage.checkbox) {
  //     setCheckbox(JSON.parse(localStorage.getItem("checkbox")));
  //   }
  // }, []);

  //отображение сообщения перед поиском или в случае пустого результата
  useEffect(() => {
    if (!localStorage.searchMovies) {
      setError("Введите название фильма");
    }
    if (localStorage.searchMovies) {
      if (filteredMovies.length === 0) {
        setError("По Вашему запросу ничего не найдено :(");
      } else {
        setError("");
      }
    }
  }, [searchFilterMovies]);

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
