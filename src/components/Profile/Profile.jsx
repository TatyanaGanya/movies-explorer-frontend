import "./Profile.css";
import { useEffect } from "react";
import Form from "../Form/Form";
import useFormValidation from "../../utils/useFormValidation";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

function Profile({ name, setLoggedIn }) {
  const { values,error, isInputValid, isValid, handleChange, reset } =
    useFormValidation();

  useEffect(() => {
    reset({ username: 'Виталий!', email: "pochta@yandex.ru", });
  }, [reset]);

  function onEdit(e) {
    e.preventDefault();
  }
  function outLogin() {
    setLoggedIn(false);
  }

  return (
    <section name="profile" title="Редактировать профиль" className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <Form name={name} isValid={isValid} onSubmit={onEdit}>
        <Input
          selectname={name}
          name='username'
          type='text'
          title='Имя'
          minLength='3'
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
      </Form>

      <Link to={"/"} onClick={outLogin} className="profile__out">
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
