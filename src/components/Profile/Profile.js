import { Link } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__input-container">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="30"
            required
          />
          <p className="profile__input-value">Виталий</p>
        </div>
        <div className="profile__input-container">
          <label className="profile__label">E-mail</label>
          <input
            className="profile__input"
            type="email"
            placeholder="Введите почту"
            required
          />
          <p className="profile__input-value">pochta@yandex.ru</p>
        </div>
        <button className="profile__submit" type="submit">
          Редактировать
        </button>
        <Link to="/">
          <button className="profile__logout" type="button">
            Выйти из аккаунта
          </button>
        </Link>
      </form>
    </div>
  );
}
