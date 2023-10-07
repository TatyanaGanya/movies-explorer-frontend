import "./Error.css";
import { Link, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h2 className="error__title">404</h2>
      <p className="error__subtitle">Страница не найдена</p>
      <Link onClick={() => navigate(-1)} className="error__link">
        Назад
      </Link>
    </div>
  );
}

export default Error;
