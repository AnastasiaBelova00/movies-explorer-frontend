import "./AboutMe.css";
import student from "../../images/student.svg";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section className="aboutMe" id="aboutMe">
      <h2 className="mainTitle">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__container_text">
          <h3 className="aboutMe__name">Виталий</h3>
          <p className="aboutMe__text">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>

          <p className="aboutMe__git">
            <a
              className="aboutMe__link"
              href="https://github.com/AnastasiaBelova00?tab=repositories"
            >
              Github
            </a>
          </p>
        </div>
        <img className="aboutMe__photo" src={student} alt="Фото студента"></img>
      </div>
      <Portfolio />
    </section>
  );
}
