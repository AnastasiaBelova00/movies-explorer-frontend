import "./NavTab.css";

import { HashLink } from "react-router-hash-link";

export default function NavTab() {
  return (
    <nav className="navTab">
      <HashLink className="nav__btn" smooth to="/#aboutProject">
        О проекте
      </HashLink>
      <HashLink className="nav__btn" smooth to="/#techs">
        Технологии
      </HashLink>
      <HashLink className="nav__btn" smooth to="/#aboutMe">
        Студент
      </HashLink>
    </nav>
  );
}
