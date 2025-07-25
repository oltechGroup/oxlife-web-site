import "./Contacto.css";
import React from "react";


function Contacto() {
  return (
    <>
    <div className="contact-wrapper">
      <div className="social-icons">
      <a href="https://wa.me/5549104955" target="_blank" class="whatsapp">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.instagram.com/grupooltech" target="_blank" class="instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/OltechMexico" target="_blank" class="facebook">
        <i className="fab fa-facebook-f"></i> 
      </a>
    </div>
      <div className="contact-left">
        <h4 className="contact-subtitle">Contáctanos</h4>
        <h2 className="contact-main-title">Atención al cliente.</h2>
        <p className="contact-text">
          Nuestra prioridad es ofrecer un servicio excepcional a cada uno de nuestros clientes. Contamos con un equipo especializado, disponible para resolver cualquier duda o consulta, y para asesorar en la elección de los productos más adecuados según las necesidades de cada cliente.
        </p>
        <div className="down-arrow">↓</div>
      </div>

      <form className="contact-right">
        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Ingresa tu nombre"/>
          </div>
          <div className="form-group">
            <label>Asunto</label>
            <input type="text" placeholder="Ingresa el asunto" />
          </div>
        </div>
        <div className="form-group">
          <label>Teléfono o correo</label>
          <input type="text" placeholder="Escribe un correo o teléfono..." />
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea rows="4" placeholder="Escribe algún mensaje..."></textarea>
        </div>
        <button className="submit-btn" type="submit">Enviar Formulario</button>
      </form>
    </div>
    <section>
      <div className="map-container">
            <iframe 
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4191.908295341355!2d-98.29758218257118!3d19.077261926227145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7fec96d4e89%3A0xb0802d9ab06df688!2sFraccionamiento%20Bosque%20San%20Diego!5e0!3m2!1ses!2smx!4v1753397615072!5m2!1ses!2smx"
            width="100%" 
            height="470" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            >
            </iframe>
            </div>
    </section>
    <section className="location-info">
      <div className="location-container">
        <div className="location-text">
          <div className="location-title">
            <img src="/dire3.png" alt="Ubicación" />
            <h3>Dirección</h3>
          </div>
          <p>
            Circuito San Diego Mz 7, Lt.5 <br />
            Fraccionamiento Bosques SN. Diego, Col. San Diego los Sauces <br />
            San Pedro Cholula, Puebla, México <br />
            C.P. 72768
          </p>
        </div>
        <div className="location-image">
          <img src="/dire1.jpg" alt="Ubicación física" className="img1" />
          <img src="/dire2.jpg" alt="Ubicación física" className="img2" />
        </div>
      </div>
    </section>
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

export default Contacto;
