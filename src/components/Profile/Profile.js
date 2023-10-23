import { Link } from "react-router-dom";
import "./Profile.css";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/validation";
import { regExName, regExEmail } from "../../utils/constants";

export default function Profile({ logOut, handleUpdateUser, serverError }) {
  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  // хук валидации
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(values);
    resetForm(values);
  };

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <div className="profile__input-container">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            type="text"
            name="name"
            placeholder="Введите имя"
            minLength="2"
            maxLength="30"
            value={values.name || ""}
            onChange={handleChange}
            required
            pattern={regExName}
          />
          {/* <p className="profile__input-value">{currentUser.name}</p> */}
        </div>
        <span className="profile__input-error">{errors.name}</span>
        <div className="profile__input-container">
          <label className="profile__label">E-mail</label>
          <input
            className="profile__input"
            type="email"
            name="email"
            placeholder="Введите почту"
            value={values.email || ""}
            onChange={handleChange}
            required
            pattern={regExEmail}
          />
          {/* <p className="profile__input-value">{currentUser.email}</p> */}
        </div>
        <span className="profile__input-error">{errors.email}</span>
        <span className="profile__input-server-error">{serverError}</span>
        <button
          className={`profile__submit ${
            !isValid ? "profile__submit_disabled" : ""
          }`}
          type="submit"
          disabled={!isValid}
        >
          Редактировать
        </button>
        <Link to="/">
          <button className="profile__logout" type="button" onClick={logOut}>
            Выйти из аккаунта
          </button>
        </Link>
      </form>
    </main>
  );
}
