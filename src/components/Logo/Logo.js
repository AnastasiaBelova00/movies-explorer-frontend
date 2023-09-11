import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  return (
    <Link className="logo__link" to="/">
      <img className="logo" src={logo} alt="Круглый логотип" />
    </Link>
  );
}
