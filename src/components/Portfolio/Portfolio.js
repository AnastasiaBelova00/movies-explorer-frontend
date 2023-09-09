import portfolio from "../../images/portfolio.svg";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__container">
        <a
          className="portfolio__link"
          href="https://github.com/AnastasiaBelova00/react-mesto-api-full-gha"
        >
          Статичный сайт
          <img className="portfolio__img" src={portfolio} alt="Стрелка" />
        </a>

        <a
          className="portfolio__link"
          href="https://github.com/AnastasiaBelova00/russian-travel"
        >
          Адаптивный сайт
          <img className="portfolio__img" src={portfolio} alt="Стрелка" />
        </a>

        <a
          className="portfolio__link"
          href="https://github.com/AnastasiaBelova00/react-mesto-api-full-gha"
        >
          Одностраничное приложение
          <img className="portfolio__img" src={portfolio} alt="Стрелка" />
        </a>
      </div>
    </div>
  );
}
