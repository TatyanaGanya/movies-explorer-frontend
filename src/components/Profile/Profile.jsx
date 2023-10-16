import "./Profile.css"; //добавить блок Input не могу поменять данные
import Form from "../Form/Form";
import Input from "../Input/Input";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";
import CurrentUserContext from "../../contexs/CurrentUserContext.js";
import { emailEdit } from "../../utils/constants.jsx";

function Profile({
  name, //? css
  handleProfile, //changename
  setIsError,
  outLogin, //exit
  setSuccess,
  isSuccess,
  setIsBlock, // save
  isBlock,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, error, isInputValid, isValid, handleChange, reset } =
    useFormValidation();

  useEffect(() => {
    reset({ username: currentUser.name, email: currentUser.email });
  }, [reset, currentUser, isBlock]);

  function onEdit(e) {
    e.preventDefault();

    handleProfile(values.username, values.email);
  }

  return (
    <section title="Редактировать профиль" className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <Form
        name={name}
        setSuccess={setSuccess}
        isSuccess={isSuccess}
        isValid={isValid}
        values={values}
        onSubmit={onEdit}
        setIsError={setIsError}
        setIsBlock={setIsBlock}
        isBlock={isBlock}
      >
        <Input
          selectname={name}
          name="username"
          type="text"
          title="Имя"
          minLength="3"
          maxLength="40"
          value={values.username}
          isInputValid={isInputValid.username}
          error={error.username}
          onChange={handleChange}
          isBlock={isBlock}
        />

        <Input
          selectname={name}
          name="email"
          type="email"
          title="E-mail"
          minLength="3"
          maxLength="40"
          value={values.email}
          isInputValid={isInputValid.email}
          error={error.email}
          onChange={handleChange}
          pattern={emailEdit}
          isBlock={isBlock}
        />
      </Form>

      <Link to={"/"} onClick={outLogin} className="profile__out">
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
