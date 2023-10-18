import Autorization from "../Autorization/Autorization"; //
import Input from "../Input/Input.jsx";
import useFormValidation from "../../utils/useFormValidation";
import { emailEdit } from "../../utils/constants.jsx";

function Login({ name, handleLogin, setIsError }) {
  const { values, error, isInputValid, isValid, handleChange } =
    useFormValidation();

  function onLogin(e) {
    e.preventDefault();
    handleLogin({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Autorization
      name={name}
      isValid={isValid}
      setIsError={setIsError}
      onSubmit={onLogin}
    >
      <Input
        name="email"
        type="email"
        title="Е-mail"
        minLength="3"
        maxLength="40"
        value={values.email}
        isInputValid={isInputValid.email}
        onChange={(e) => {
          handleChange(e);
          setIsError(false);
        }}
        error={error.email}
        pattern={emailEdit}
      />
      <Input
        name="password"
        type="password"
        title="Пароль"
        minLength="3"
        maxLength="40"
        value={values.password}
        isInputValid={isInputValid.password}
        onChange={(e) => {
          handleChange(e);
          setIsError(false);
        }}
        error={error.password}
      />
    </Autorization>
  );
}

export default Login;
