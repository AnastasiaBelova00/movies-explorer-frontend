import logo from "../../images/logo.svg";
// import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header({ loggedIn }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Круглый логотип" />
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}
