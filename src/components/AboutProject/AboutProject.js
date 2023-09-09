import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject">
      <h2 className="mainTitle">О проекте</h2>
      <div className="aboutProject__containers">
        <div className="aboutProject__container">
          <h3 className="aboutProject__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__container">
          <h3 className="aboutProject__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__indicator">
        <p className="aboutProject__indicator_green">1 неделя</p>
        <p className="aboutProject__indicator_grey">4 недели</p>
        <p className="aboutProject__indicator_subtitle">Back-end</p>
        <p className="aboutProject__indicator_subtitle">Front-end</p>
      </div>
    </section>
  );
}
