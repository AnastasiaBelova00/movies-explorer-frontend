import { useLocation } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ? (
        <footer className="footer">
          <h3 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h3>
          <div className="footer__container">
            <p className="footer__date">&copy; {year}</p>
            <ul className="footer__links">
              <li className="footer__link">
                <a
                  className="footer__link-item"
                  href="https://practicum.yandex.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__link">
                <a
                  className="footer__link-item"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </footer>
      ) : (
        ""
      )}
    </>
  );
}
