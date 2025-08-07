// src/pages/Productos.jsx
import React from 'react';
import './productos.css';

function Productos() {
  const productos = [
    {
      nombre: "Insumos Médicos",
      descripcion: "Suministro de material quirúrgico, material de curación, soluciones y medicamentos con registro COFEPRIS.",
      imagen: "/src/assets/material.png"
    },
    {
      nombre: "Prótesis y Órtesis",
      descripcion: "Prótesis ortopédicas especializadas (rodilla, cadera, columna) y dispositivos de apoyo certificados.",
      imagen: "/src/assets/Catálogo F1 (1).PNG"
    },
    {
      nombre: "Equipo Médico",
      descripcion: "Venta y distribución de equipos como monitores, camas hospitalarias, esterilizadores, etc.",
      imagen: "/src/assets/equipomedico.png"
    },
    {
      nombre: "Servicios Especializados",
      descripcion: "Asesoría técnica, capacitación médica, instalación y mantenimiento de equipos.",
      imagen: "/src/assets/servicios.jpeg"
    }
  ];

  return (
    <>
      <section className="productos-section">
        <h2 className="productos-titulo">Productos y Servicios</h2>

        {/* 🔽 Texto introductorio */}
        <div className="intro-productos">
          <p>
            En <b>OXLIFE </b>ponemos a su alcance nuestra gama de soluciones comerciales, diseñadas bajo principios de excelencia, compromiso y respaldo técnico especializado.

            Contamos con un equipo altamente capacitado que brindará atención personalizada en cada etapa del proceso, ya sea en la venta o durante la prestación del servicio.

            Nuestros procedimientos están estructurados para ofrecer un servicio eficiente, flexible y orientado a resultados, manteniendo siempre una comunicación cercana y constante con nuestros clientes.
          </p>
        </div>

        <div className="productos-grid">
          {productos.map((item, index) => (
            <div className="producto-card" key={index}>
              <img src={item.imagen} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="productos-banner">
          <div className="banner-background"></div>
          <div className="banner-overlay">
            <h2>¿Por qué elegir OXLIFE?</h2>
            <p>
              Ofrecemos
              diferentes líneas de material de curación y consumibles para el apoyo
              en la atención médica, quirúrgica, diagnóstico y tratamiento a pacientes
              Contamos
              con las principales líneas de distribución que cuentan con los certificados
              de calidad y documentación regulatoria necesaria para garantizar la calidad en la
              atención médica
              Algunas
              de nuestras marcas son las siguientes:
            </p>
          </div>
        </div>
      </section>
      <br /><br />
      {/* 👣 Footer */}
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

export default Productos;
