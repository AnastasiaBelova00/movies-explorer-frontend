import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movies } from "../../utils/constants";

export default function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  );
}
