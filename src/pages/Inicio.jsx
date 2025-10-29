// src/App.jsx
import { Link } from 'react-router-dom';
import React, { useState } from "react";


function App() {
      const clientes = [
      {
        nombre: 'Hospital General "Dr. Manuel Gea González".',
        direccion: 'Calzada de Tlalpan 4800 Belisario Domínguez Sección XVI, Alcaldía Tlalpan 14080 Ciudad de México.',
        contacto: 'Teléfono: 5540003000 ext. 7104 y 7100',
        imagen: '/imagen1.jpeg'
      },
      {
        nombre: 'Hospital General de Querétaro.',
        direccion: 'Av. De los Moreles N° 20, esq. Av. Cañaveral 2do Piso, Col. El Carrizal, C.P 76030, Queretaro, Qro.',
        contacto: 'Teléfono: 442 2154944 ext 25402 ',
        imagen: '/imagen2.jpeg'
      },
      {
        nombre: 'Hospital Regional Gral. Ignacio Zaragoza. ',
        direccion: 'Calz. Ignacio Zaragoza 1711, Juan Escutia, Iztapalapa, Ciudad de México, CDMX.',
        contacto: 'Teléfono: 5557165200 ext 16862',
        imagen: '/imagen3.jpg'
      },
      {
        nombre: 'Centro Medico Nacional “Manuel Avila Camacho”.',
        direccion: 'Diagonal Defensores de la Republica Esquina 6 Poniente S/N Colonia Amor, Puebla, Puebla C.P. 72140. ',
        contacto: 'Teléfono: (222) 2 49 30 99 Ext. 151',
        imagen: '/imagen4.jpg'
      },
      {
        nombre: 'Hospital Infantil de México “Federico Gómez”.',
        direccion: 'Dr. Márquez No. 162, Col. Doctores, Alcaldía Cuauhtémoc; CDMX C.P 06720.',
        contacto: 'Teléfonos: (52) 55 5228 9917 Ext. 2414',
        imagen: '/imagen5.jpeg'
      },
    ];

    const [indiceActual, setIndiceActual] = useState(0);

    const handlePrev = () => {
      setIndiceActual((prev) => (prev === 0 ? clientes.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setIndiceActual((prev) => (prev === clientes.length - 1 ? 0 : prev + 1));
    };

  return (
    <>
      <div className="app-container">

        {/* Hero Section */}
        <section className="hero">
          <div className="orange-line"></div>
          <div className="hero-image">
            <img src="/medicos1.png" alt="Médicos" />
          </div>
          <div className="hero-content">
            <h1>
              Soluciones Médicas confiables <br/><span> para tu <br/>bienestar.</span>
            </h1>
            <br />
            <h3>
              Somos tu aliado en soluciones médicas confiables. Descubre como
              podemos satisfacer tus necesidades de insumos médicos con
              calidad, eficiencia y experiencia.
            </h3>
            <br />
            <br />
            <Link to="/contacto">
            <button className="hero-btn">Contáctanos</button>
            </Link>
          </div>
        </section>

        <section className="oxlife-section">
          <div className="oxlife-center">
            <h1>OXLIFE</h1>
          </div>
        </section>

        {/* Info Cards */}
        <section className="info-section">
          <div className="info-card">
            <h3>Ventas</h3>
            <p>
              Nuestro equipo altamente calificado está comprometido a satisfacer las necesidades de nuestros clientes mediante un trato excepcional. Trabajamos de la mano con los clientes para ofrecer productos y servicios especializados de alta calidad.
            </p>
          </div>
          <div className="info-card">
            <h3>Gestión</h3>
            <p>
              Control y manejo eficiente de los recursos materiales y supervisión contable para alcanzar las metas establecidas de la empresa en colaboración con la dirección general y el área de ventas.
            </p>
          </div>
          <div className="info-card">
            <h3>Servicio</h3>
            <p>
              Nuestro personal está listo para atender a nuestors clientes en cotizaciones, compras, ventas, etc. Garantizmos una atención personalizada y eficienta
            </p>
          </div>
        </section>
      </div>

      {/* Mueve esto afuera de .app-container */}
      <section className="about-section">
        <div className="about-overlay">
          <h2>
            Acerca de <br/>
            <span>OXLIFE</span>.
          </h2>
          <p>
            OXLIFE es una empresa mexicana con sede en Cholula, Puebla, dedicada a la
            venta de insumos médicos. Contamos con un equipo capacitado y experientado, comprometido a brindar soluciones confiables, económicas y eficientes.
          </p>
        </div>
      </section>
      <section className="white-spacer"></section>
      <section className="clientes-section">
        <h2 className="clientes-titulo">Nuestros <span>Clientes</span></h2>
        <div className="clientes-contenedor">
          <div className="cliente-imagen">
            <button onClick={handlePrev} className="flecha-izq">←</button>
            <img src={clientes[indiceActual].imagen} alt={`Cliente ${indiceActual + 1}`} />
            <button onClick={handleNext} className="flecha-der">→</button>
          </div>
          <div className="cliente-info" key={indiceActual}>
            <h3>{clientes[indiceActual].nombre}</h3>
            <p><strong><span>Dirección:</span></strong> {clientes[indiceActual].direccion}</p>
            <br/>
            <p><strong><span>Contacto:</span></strong> {clientes[indiceActual].contacto}</p>
          </div>
        </div>
      </section>

      <section className="white-spacer"></section>
        <div className="quality-section">
          <div className="quality-background"></div>
          <div className="quality-box">
            <h2>Política de <br/>
              <span className="highlight">Calidad</span></h2>
              <p>En OXLIFE, nos comprometemos a mantener y mejorar nuestros estándares
              de calidad, brindando productos seguros, confiables y eficaces.
              Nuestro equipo trabaja bajo un sistema de gestión de calidad
              fundamentado en estándares y buenas prácticas.
              </p>
          </div>
        </div>
        <div className="contact-section">
          <h2>Contácto</h2>
          <form action="https://formsubmit.co/ddiegvan.09@gmail.com" method="POST" className="contact-form">
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="form-row">
              <input type="text" name="nombre" placeholder="Nombre" required/>
              <input type="text" name="asunto" placeholder="Asunto" required/>
            </div>
            <input
              type="email"
              name="correo"
              placeholder="Correo Electrónico o Teléfono"
              required
            />
            <textarea name="mensaje" placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-column">
              <h3>Acerca de nosotros</h3>
              <ul>
                <li>Inicio</li>
                <li>Catálogo</li>
                <li>Nuestra misión</li>
                <li>Acerca de</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Información de Contacto</h3>
              <ul>
                <a href="https://wa.me/5549104955"><li>(+52) 55-4910-4955</li></a>
                <a href="mailto:info.oxlife@gmail.com"><li>info.oxlife@gmail.com</li></a>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Catálogo de Productos</h3>
              <ul>
                <li>Lima Corporate</li>
                <li>3M</li>
                <li>SKYYD</li>
                <li>Uniseal</li>
                <li>Arthrex</li>
              </ul>
            </div>

            <div className="footer-logo">
              <img src="/logoBL.png" alt="OXLIFE logo" />
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-social">
              <a href="https://www.instagram.com/grupooltech"><img src="/instagram.png" alt="Instagram" /></a>
              <a href="https://www.facebook.com/OltechMexico"><img src="/facebook.png" alt="Facebook" /></a>
            </div>
            <p>OXLIFE 2025</p>
          </div>
        </footer>
     
    </>
  );
}


export default App;
