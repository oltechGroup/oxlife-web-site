// src/App.jsx
import './App.css';
import logo from './assets/logo_oxlife.svg';

function App() {
  return (
    <>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <img src={logo} alt="OXLIFE Logo" className="logo-img" />
          <nav className="nav">
            <a href="">Inicio</a>
            <a href="#">Catálogo</a>
            <a href="#">Productos</a>
            <a href="#">Nosotros</a>
            <button className="contact-btn">Contáctanos</button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="orange-line"></div>
          <div className="hero-image">
            <img src="/medicos.png" alt="Médicos" />
          </div>
          <div className="hero-content">
            <h1>
              Soluciones Médicas confiables <span>para tu bienestar.</span>
            </h1>
            <br />
            <h3>
              Somos tu aliado en soluciones médicas confiables. Descubre como
              podemos satisfacer tus necesidades de insumos médicos con
              calidad, eficiencia y experiencia.
            </h3>
            <br />
            <br />
            <button className="hero-btn">Contáctanos</button>
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
              Nuestro equipo altamente calificado está comprometido a satisfacer
              las necesidades de nuestros clientes mediante un trato excepcional...
            </p>
          </div>
          <div className="info-card">
            <h3>Gestión</h3>
            <p>
              Control y manejo eficiente de los recursos materiales y supervisión contable...
            </p>
          </div>
          <div className="info-card">
            <h3>Servicio</h3>
            <p>
              Nuestro personal está listo para atender a nuestros clientes en cotizaciones...
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
