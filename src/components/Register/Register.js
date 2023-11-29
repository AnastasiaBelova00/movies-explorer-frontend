import "./Register.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { useFormWithValidation } from "../../hooks/validation";
import { REGEX_EMAIL, REGEX_NAME } from "../../utils/constants";

export default function Register({ handleRegistration, serverError }) {
  // хук валидации
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
    resetForm(values);
  };

  return (
    <>
      <main className="register">
        <Form
          title="Добро пожаловать!"
          submit="Зарегистрироваться"
          question="Уже зарегистрированы?"
          to="/signin"
          linkText="Войти"
          serverError={serverError}
          handleSubmit={handleSubmit}
          isValid={isValid}
        >
          <Input
            label="Имя"
            type="text"
            name="name"
            id="name"
            value={values.name || ""}
            placeholder="Введите имя"
            handleChange={handleChange}
            minLength="2"
            maxLength="30"
            error={errors.name}
            pattern={REGEX_NAME}
          />
          <Input
            label="E-mail"
            type="email"
            name="email"
            id="email"
            value={values.email || ""}
            placeholder="Введите email"
            handleChange={handleChange}
            error={errors.email}
            pattern={REGEX_EMAIL}
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
