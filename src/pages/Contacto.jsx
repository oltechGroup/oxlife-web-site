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
            height="300" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            >
            </iframe>
            </div>
    </section>
</>

  );
}

export default Contacto;
