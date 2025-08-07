import { Link } from 'react-router-dom';
import logo from '../assets/logo_oxlife.svg';

function Navbar() {
  return (
    <nav className="app-container">
      <header className="header">
        <img src={logo} alt="OXLIFE Logo" className="logo-img" />
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="">Catálogo</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">
            <button className="contact-btn">Contáctanos</button>
          </Link>
        </nav>
      </header>
    </nav>
  );
}

export default Navbar;

