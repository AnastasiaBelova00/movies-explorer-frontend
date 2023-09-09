import "./NavTab.css";

export default function NavTab() {
  return (
    <div className="navTab">
      <a className="navTab__link" href="#aboutProject">
        <button className="navTab__btn">О прокете</button>
      </a>
      <a className="navTab__link" href="#techs">
        <button className="navTab__btn">Технологии</button>
      </a>
      <a className="navTab__link" href="#aboutMe">
        <button className="navTab__btn">Студент</button>
      </a>
    </div>
  );
}
