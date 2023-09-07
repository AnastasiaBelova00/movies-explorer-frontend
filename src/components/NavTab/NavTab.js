import "./NavTab.css";

export default function NavTab() {
  return (
    <div className="navTab">
      <a className="navTab__link">
        <button className="navTab__btn">О прокете</button>
      </a>
      <a className="navTab__link">
        <button className="navTab__btn">Технологии</button>
      </a>
      <a className="navTab__link">
        <button className="navTab__btn">Студент</button>
      </a>
    </div>
  );
}
