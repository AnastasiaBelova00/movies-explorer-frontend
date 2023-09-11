import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Navigation({ loggedIn }) {
  const [isOpenBurger, setOpenBurger] = useState(false);
  return (
    <>
      {loggedIn ? (
        <>
          <nav className="navigation">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav_active" : ""}`
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav_active" : ""}`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <NavLink to="/profile">
            <button className="navigation__profile"></button>
          </NavLink>
          <button
            className="navigation__burger"
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
            <Link to="/signup" className="nav__link">
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
