import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header({ loggedIn }) {
  return (
    <header className="header">
      <Link className="header__ligo-link" to="/">
        <img className="header__logo" src={logo} alt="Круглый логотип" />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}
