import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <section className="search-movies">
      <form className="search-form">
        <input className="search-form__input" placeholder="Фильм"></input>
        <button className="search-form__btn" type="submit"></button>
      </form>
      <div className="search-movies__container">
        <FilterCheckbox />
        <p className="search-movies__text">Короткометражки</p>
      </div>
    </section>
  );
}
