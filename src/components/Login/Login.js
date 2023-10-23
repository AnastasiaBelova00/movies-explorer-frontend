import "./Login.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { useFormWithValidation } from "../../hooks/validation";
import { regExEmail } from "../../utils/constants";

export default function Login({ handleLogin, serverError }) {
  // хук валидации
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
    resetForm(values);
  };

  return (
    <>
      <main className="login">
        <Form
          title="Рады видеть!"
          submit="Войти"
          question="Еще не зарегистрированы?"
          to="/signup"
          linkText="Регистрация"
          serverError={serverError}
          handleSubmit={handleSubmit}
          isValid={isValid}
        >
          <Input
            label="E-mail"
            type="email"
            name="email"
            id="email"
            value={values.email || ""}
            placeholder="Введите email"
            handleChange={handleChange}
            pattern={regExEmail}
            error={errors.email}
          />
          <Input
            label="Пароль"
            type="password"
            name="password"
            id="password"
            value={values.password || ""}
            placeholder="Введите пароль"
            handleChange={handleChange}
            error={errors.password}
          />
        </Form>
      </main>
    </>
  );
}
