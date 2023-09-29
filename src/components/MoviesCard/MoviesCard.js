import "./MoviesCard.css";

export default function MoviesCard({ movie }) {
  return (
    <li className="card">
      <img className="card__image" src={movie.image} alt={movie.title} />
      <button className="card__button"></button>
      <div className="card__text">
        <p className="card__title">{movie.title}</p>
        <p className="card__duration">{movie.duration}</p>
      </div>
    </li>
  );
}
