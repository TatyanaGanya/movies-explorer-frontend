import "./Autorization.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Form from "../Form/Form.jsx";

function Autorization({ name, children, isValid, onSubmit }) {
  return (
    <section className="autorization">
      <Link to={"/"}>
        <img src={logo} alt="Логотип" className="autorization__logo" />
      </Link>
      <h2 className="autorization__title">
        {name === "signin" ? "Рады видеть!" : "Добро пожаловать!"}
      </h2>
      <Form name={name} isValid={isValid} onSubmit={onSubmit}>
        {children}
      </Form>
      {name === "signin" ? (
        <p className="autorization__href">
          {"Ещё не зарегистрированы? "}
          <Link to={"/signup"} className="autorization__entrance">
            Регистрация
          </Link>
        </p>
      ) : name === "signup" ? (
        <p className="autorization__href">
          {" Уже зарегистрированы? "}
          <Link to={"/signin"} className="autorization__entrance">
            Войти
          </Link>
        </p>
      ) : (
        <Link to={"/"}>Выйти из аккаунта</Link>
      )}
    </section>
  );
}

export default Autorization;
