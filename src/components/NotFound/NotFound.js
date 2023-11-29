import { NavLink } from "react-router-dom";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const naigate = useNavigate()

  function goBack() {
    naigate(-1)
  }
  return (
    <main className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
      <NavLink to="/" className="notFound__back" onClick={goBack}>
        Назад
      </NavLink>
    </main>
  );
}
