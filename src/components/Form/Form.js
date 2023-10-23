import React from "react";
import Logo from "../Logo/Logo";
import "./Form.css";
import { Link } from "react-router-dom";

export default function Form({
  title,
  handleSubmit,
  children,
  serverError,
  submit,
  isValid,
  question,
  to,
  linkText,
}) {
  return (
    <section className="form">
      <Logo />
      <h1 className="form__title">{title}</h1>
      <form className="form__form" onSubmit={handleSubmit} noValidate>
        <div className="form__container">
          {children}
          <span
            className={`form__error ${
              serverError ? "form__error_visible" : ""
            }`}
          >
            {serverError}
          </span>
        </div>
        <button
          className={`form__submit ${!isValid ? "form__submit_disabled" : ""}`}
          type="submit"
          disabled={!isValid}
        >
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
    </section>
  );
}
