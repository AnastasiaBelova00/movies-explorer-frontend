import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ loggedIn }) {
  return (
    <>
      {loggedIn ? (
        <>
          <nav className="navigation">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `navlink ${isActive ? "navlink_active" : ""}`
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `navlink ${isActive ? "navlink_active" : ""}`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Link to="#">
            <button className="navigation__profile"></button>
          </Link>
        </>
      ) : (
        <>
          <div className="navigation navigation_nologgedin">
            <Link to="/signup" className="navlink">
              Регистрация
            </Link>
          </div>
          <Link to="/signin">
            <button className="navigation__button">Войти</button>
          </Link>
        </>
      )}
    </>
  );
}
