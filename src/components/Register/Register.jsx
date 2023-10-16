import Autorization from "../Autorization/Autorization"; //
import Input from "../Input/Input.jsx";
import useFormValidation from "../../utils/useFormValidation";
import { emailEdit } from "../../utils/constants.jsx";

function Register({ name, handleRegister, setIsError }) {
  const { values, error, isInputValid, isValid, handleChange } =
    useFormValidation();

  function onRegister(e) {
    e.preventDefault();
    handleRegister({
      name: values.username,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Autorization
      name={name}
      isValid={isValid}
      setIsError={setIsError}
      onSubmit={onRegister}
    >
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
        onChange={(evt) => {
          handleChange(evt);
          setIsError(false);
        }}
        // autoComplete="off"
        placeholder="Введите имя"
        required
      />

      <Input
        selectname={name}
        name="email"
        type="email"
        title="E-mail"
        minLength="2"
        maxLength="40"
        value={values.email || ""}
        isInputValid={isInputValid.email}
        error={error.email}
        onChange={(evt) => {
          handleChange(evt);
          setIsError(false);
        }}
        //autoComplete="off"
        pattern={emailEdit}
        placeholder="Введите электронную почту"
        required
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
        onChange={(evt) => {
          handleChange(evt);
          setIsError(false);
        }}
        //autoComplete="off"
        placeholder="Введите пароль"
        required
      />
    </Autorization>
  );
}

export default Register;
