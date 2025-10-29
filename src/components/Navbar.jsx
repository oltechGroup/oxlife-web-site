import { Link } from 'react-router-dom';
import { useState } from 'react'; // 👈 Importa useState
import logo from '../assets/logo_oxlife.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // 👈 Nuevo estado para el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Función para alternar el estado
  };

  return (
    <nav className="app-container">
      <header className="header">
        <img src={logo} alt="OXLIFE Logo" className="logo-img" />
        
        {/* 👈 Botón de Hamburguesa */}
        <button className="menu-toggle" onClick={toggleMenu} aria-expanded={isOpen}>
          {/* El icono de las tres líneas se puede crear con CSS o usar una imagen como la que subiste */}
          <div className="hamburger-icon">
            {/* Puedes usar la imagen de las tres líneas, o crear el icono con CSS */}
            <div className="line"></div> 
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </button>

        {/* 👈 Aplica la clase condicionalmente */}
        <nav className={`nav ${isOpen ? 'is-open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Inicio</Link>
          <Link to="" onClick={toggleMenu}>Catálogo</Link>
          <Link to="/productos" onClick={toggleMenu}>Productos</Link>
          <Link to="/nosotros" onClick={toggleMenu}>Nosotros</Link>
          <Link to="/contacto" onClick={toggleMenu}>
            <button className="contact-btn">Contáctanos</button>
          </Link>
        </nav>
      </header>
    </nav>
  );
}

export default Navbar;