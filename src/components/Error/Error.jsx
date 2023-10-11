import "./Error.css";
import { Link, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__subtitle">Страница не найдена</p>
      <Link onClick={() => navigate(-1)} className="error__link">
        Назад
      </Link>
    </section>
  );
}

export default Error;
