import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movies } from "../../utils/constants";

export default function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </>
  );
}
