import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchForm({ onSearch, changeCheckbox, isCheckbox }) {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();

  function handleChange(e) {
    const value = e.target.value;
    setSearchValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchValue);
  }

  //отображение запроса в инпуте
  useEffect(() => {
    const query = localStorage.getItem("query");
    if (query !== "" && location.pathname === "/movies") {
      setSearchValue(query);
    }
  }, []);

  // //условие для блокировки книпки поиска
  // const valid = searchValue !== "" && query !== "";

  return (
    <section className="search-movies">
      <form className="search-form" onSubmit={handleSubmit} noValidate>
        <input
          className="search-form__input"
          name="movie"
          type="text"
          placeholder="Фильм"
          onChange={handleChange}
          value={searchValue || ""}
        ></input>
        <button className="search-form__btn" type="submit"></button>
      </form>
      <div className="search-movies__container">
        <FilterCheckbox
          changeCheckbox={changeCheckbox}
          isCheckbox={isCheckbox}
        />
        <p className="search-movies__text">Короткометражки</p>
      </div>
    </section>
  );
}
