import React from "react";
import Logo from "../Logo/Logo";
import "./Form.css";
import { Link } from "react-router-dom";

export default function Form({
  title,
  children,
  submit,
  question,
  to,
  linkText,
}) {
  return (
    <div className="form">
      <Logo />
      <h1 className="form__title">{title}</h1>
      <form className="form__form">
        <div className="form__container">
          {children}
          <p className="form__error">Что-то пошло не так...</p>
        </div>
        <button className="form__submit" type="submit">
          {submit}
        </button>
      </form>
      <div className="form__text-container">
        <p className="form__question">
          {question}
          <Link className="form__link" to={to}>
            {linkText}
          </Link>
        </p>
      </div>
    </div>
  );
}
