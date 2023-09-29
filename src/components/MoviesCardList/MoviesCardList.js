import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

export default function MoviesCardList({ movies }) {
  return (
    <section className="movie-cards">
      <ul className="cards">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
      <button className="movie-cards__button">Ещё</button>
      {/* <Preloader /> */}
    </section>
  );
}
