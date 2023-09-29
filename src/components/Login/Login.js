import "./Login.css";
import Form from "../Form/Form";
import Input from "../Input/Input";

export default function Login() {
  return (
    <>
      <main className="login">
        <Form
          title="Рады видеть!"
          submit="Войти"
          question="Еще не зарегистрированы?"
          to="/signup"
          linkText="Регистрация"
        >
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
