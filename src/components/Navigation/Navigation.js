import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Navigation({ isLoggedIn }) {
  const [isOpenBurger, setOpenBurger] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <>
          <nav className="navigation">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `navigation__link ${isActive ? "navigation__link-active" : ""}`
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `navigation__link ${isActive ? "navigation__link-active" : ""}`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </nav>

          <NavLink to="/profile">
            <button className="navigation__container-profile"></button>
          </NavLink>
          <button
            className="navigation__container-burger"
            onClick={() => setOpenBurger(true)}
          ></button>
          <BurgerMenu
            isOpenBurger={isOpenBurger}
            setOpenBurger={setOpenBurger}
          />
        </>
      ) : (
        <>
          <div className="navigation navigation_nologgedin">
            <Link to="/signup" className="navigation__link-signup">
              Регистрация
            </Link>

            <Link className="navigation__button" to="/signin">
              Войти
            </Link>
          </div>
        </>
      )}
    </>
  );
}
