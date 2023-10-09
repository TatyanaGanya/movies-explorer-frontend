import Autorization from "../Autorization/Autorization";
import Input from "../Input/Input.jsx";
import useFormValidation from "../../utils/useFormValidation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register({ name, setLoggedIn }) {
  const navigate = useNavigate();
  const { values, error, isInputValid, isValid, handleChange, reset } =
    useFormValidation();

  function onLogin(e) {
    e.preventDefault();
    navigate("/signin");
    setLoggedIn(true);
  }
  useEffect(() => {
    reset({ username: "Виталий!", email: "pochta@yandex.ru" });
  }, [reset]);

  return (
    <Autorization name={name} isValid={isValid} onSubmit={onLogin}>
      <Input
        selectname={name}
        name="username"
        type="text"
        title="Имя"
        minLength="2"
        maxLength="40"
        value={values.username}
        isInputValid={isInputValid.username}
        error={error.username}
        onChange={handleChange}
      />

      <Input
        selectname={name}
        name="email"
        type="email"
        title="E-mail"
        value={values.email}
        isInputValid={isInputValid.email}
        error={error.email}
        onChange={handleChange}
      />

      <Input
        selectname={name}
        name="password"
        type="password"
        title="Пароль"
        minLength="3"
        maxLength="40"
        value={values.password}
        isInputValid={isInputValid.password}
        error={error.password}
        onChange={handleChange}
      />
    </Autorization>
  );
}

export default Register;
