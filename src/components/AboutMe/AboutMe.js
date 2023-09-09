import "./AboutMe.css";
import student from "../../images/student.jpg";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section className="aboutMe" id="aboutMe">
      <h2 className="mainTitle">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__container_text">
          <h3 className="aboutMe__name">Анастасия</h3>
          <p className="aboutMe__text">Фронтенд-разработчик, 26 лет</p>
          <p className="aboutMe__text">
            Я родилась и живу в городе Ростов-на-Дону, закончила факультет
            управления ЮРИУ РАНХиГС и магистратуру на факультете рекламы и
            связей с общественностью ДГТУ. Увлекаюсь фотографией и занимаюсь ею
            в качестве фриланс-деятельности. Неавно начала кодить и пока делаю
            первые шаги. Благодаря курсу, хочу получить нужные знания и навыки и
            влиться в сферу веб-разработки, чтобы заниматься этим
            профессионально.
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