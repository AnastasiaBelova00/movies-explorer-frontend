import "./Footer.css";

export default function Footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__date">&copy; {year}</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a className="footer__link-item" href="https://practicum.yandex.ru">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link">
            <a className="footer__link-item" href="https://github.com">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
