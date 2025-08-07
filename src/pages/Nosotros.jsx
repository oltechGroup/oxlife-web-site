// src/pages/Nosotros.jsx
import React from 'react';
import './Nosotros.css';

function Nosotros() {
  return (
    <section className="nosotros-section">
      <h1 className="nosotros-titulo">Sobre Nosotros</h1>

      <div className="nosotros-bloque">
        <img src="/misison.png" alt="Misión" className="nosotros-imagen" />
        <div className="nosotros-texto">
          <h2>Misión</h2>
          <p>
            Creación de valor en todos los servicios del grupo que satisfaga las expectativas y necesidades de nuestros clientes y nuestro equipo humano en los principios de calidad, ef iciencia y ética profesional.
          </p>
        </div>
      </div>

      <div className="nosotros-bloque">
        <img src="/vision.png" alt="Visión" className="nosotros-imagen" />
        <div className="nosotros-texto">
          <h2>Visión</h2>
          <p>
            Ser una empresa l íder en los diversos servicios, distinguiéndose por of recer un servicio profesional de alta calidad superando las expectativas del cliente, de gran rentabilidad y sustentabilidad en el negocio, permitiendo el desarrollo profesional y personal de sus colaboradores, para así ofrecer una contribución positiva a la sociedad.
          </p>
        </div>
      </div>

      <div className="nosotros-bloque">
        <img src="/valores1.png" alt="Valores" className="nosotros-imagen" />
        <div className="nosotros-texto">
          <h2>Valores</h2>
          <ul className="valores-grid">
            <li>✅ Liderazgo</li>
            <li>✅ Lealtad</li>
            <li>✅ Humildad</li>
            <li>✅ Responsabilidad</li>
            <li>✅ Seguridad</li>
            <li>✅ Actitud de servicio</li>
            <li>✅ Innovación</li>
            <li>✅ Respeto</li>
            <li>✅ Honestidad</li>
          </ul>
        </div>
      </div>

      <div className="nosotros-bloque">
        <img src="/calidad.png" alt="Política de Calidad" className="nosotros-imagen" />
        <div className="nosotros-texto">
          <h2>Política de Calidad</h2>
          <p>
            En Oxlife, todos nuestros productos cumplen con los más altos estándares de calidad y seguridad. Trabajamos únicamente con proveedores de conf ianza que cumplen con las normativas internacionales, garantizando la ef icacia de nuestros productos para el cuidado de la salud.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
