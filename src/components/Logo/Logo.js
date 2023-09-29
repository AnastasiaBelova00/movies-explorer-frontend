import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <img className="logo__img" src={logo} alt="Круглый логотип" />
    </Link>
  );
}
