import adalabLogo from '../images/adalab-logo-155x61.png';
import ListHeader from './link';
import '../styles/layout/Header.scss';

const Header = () => {
    return <header className="header">
      <div className="logo-wrapper">
        <a className="title" href="https://adalab.es/"
          ><img
            className="title"
            src={adalabLogo}
            alt="logo adalab"
        /></a>
      </div>
      <nav>
        <ul className="menu">
        <li className="list"><ListHeader text='Blog' className="title" href="https://adalab.es/"/></li>
        <li className="list"><ListHeader text='Contacto' className="title" href="https://adalab.es/" /></li>
        </ul>
      </nav>
    </header>
}

export default Header;

