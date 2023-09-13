import "./Register.css";
import Form from "../Form/Form";
import Input from "../Input/Input";

export default function Register() {
  return (
    <>
      <main className="register">
        <Form
          title={"Добро пожаловать!"}
          submit={"Зарегистрироваться"}
          question={"Уже зарегистрированы?"}
          to={"/signin"}
          linkText={"Войти"}
        >
          <Input
            lable="Имя"
            type="text"
            name="name"
            id="name"
            placeholder="Введите имя"
          />
          <Input
            lable="E-mail"
            type="text"
            name="email"
            id="email"
            placeholder="Введите email"
          />
          <Input
            lable="Пароль"
            type="text"
            name="password"
            id="password"
            placeholder="Введите пароль"
          />
        </Form>
      </main>
    </>
  );
}
