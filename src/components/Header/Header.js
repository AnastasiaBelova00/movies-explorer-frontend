import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

export default function Header({ loggedIn }) {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ||
      location.pathname === "/profile" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ? (
        <header className="header">
          <Logo />
          <Navigation loggedIn={loggedIn} />
        </header>
      ) : (
        ""
      )}
    </>
  );
}
