import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
      <footer className="footer">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__subtitle">&copy;&nbsp;2023</p>
        <nav className="footer__nav">
          <Link to={'https://practicum.yandex.ru/'} target='_blank' className="footte__link">Яндекс.Практикум</Link>
          <Link to={'https://github.com/'} target='_blank' className="footte__link">Github</Link>
        </nav>
      </div>
    </footer>
    );
  }
  
  export default Footer;