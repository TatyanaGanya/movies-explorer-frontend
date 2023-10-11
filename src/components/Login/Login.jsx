import Autorization from "../Autorization/Autorization";
import Input from "../Input/Input.jsx";
import useFormValidation from "../../utils/useFormValidation";
import { useNavigate } from "react-router-dom";

function Login({ name, setLoggedIn }) {
  const navigate = useNavigate();
  const { values, error, isInputValid, isValid, handleChange } =
    useFormValidation();

  function onLogin(evt) {
    evt.preventDefault();
    navigate("/movies");
    setLoggedIn(true);
  }

  return (
    <Autorization name={name} isValid={isValid} onSubmit={onLogin}>
      <Input
        name="email"
        type="email"
        title="Е-mail"
        minLength="3"
        maxLength="40"
        value={values.email}
        isInputValid={isInputValid.email}
        onChange={handleChange}
        error={error.email}
      />
      <Input
        name="password"
        type="password"
        title="Пароль"
        minLength="3"
        maxLength="40"
        value={values.password}
        isInputValid={isInputValid.password}
        onChange={handleChange}
        error={error.password}
      />
    </Autorization>
  );
}

export default Login;
