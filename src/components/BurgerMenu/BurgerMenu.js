import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";

export default function BurgerMenu({ isOpenBurger, setOpenBurger }) {
  return (
    <div className={`burger ${isOpenBurger ? "burger_active" : ""}`}>
      <div className="burger__container">
        <button
          className="burger__close-btn"
          type="button"
          onClick={() => setOpenBurger(false)}
        ></button>
        <div className="burger__links">
          <nav className="burger__nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `burger__link ${isActive ? "link_active" : ""}`
              }
              onClick={() => setOpenBurger(false)}
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `burger__link ${isActive ? "link_active" : ""}`
              }
              onClick={() => setOpenBurger(false)}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `burger__link ${isActive ? "link_active" : ""}`
              }
              onClick={() => setOpenBurger(false)}
            >
              Сохранённые фильмы
            </NavLink>
          </nav>

          <NavLink to="/profile">
            <button
              className="burger__button"
              onClick={() => setOpenBurger(false)}
            ></button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
