// src/pages/Productos.jsx
import React from 'react';
import './Productos.css';

function Productos() {
  const productos = [
    {
      nombre: "Insumos Médicos",
      descripcion: "Suministro de material quirúrgico, material de curación, soluciones y medicamentos con registro COFEPRIS.",
      imagen: "/material.png"
    },
    {
      nombre: "Prótesis y Órtesis",
      descripcion: "Prótesis ortopédicas especializadas (rodilla, cadera, columna) y dispositivos de apoyo certificados.",
      imagen: "/Catálogo F1 (1).png"
    },
    {
      nombre: "Equipo Médico",
      descripcion: "Venta y distribución de equipos como monitores, camas hospitalarias, esterilizadores, etc.",
      imagen: "/equipomedico.png"
    },
    {
      nombre: "Servicios Especializados",
      descripcion: "Asesoría técnica, capacitación médica, instalación y mantenimiento de equipos.",
      imagen: "/servicio.jpg"
    }

    
  ];
  

  return (
    <>
      <section className="productos-section">
        <h2 className="productos-titulo">Productos y <span className="highlight">Servicios</span></h2>

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
        {/* Sección de marcas */}
        <section className="marcas-section">
          <h2 className="marcas-titulo">Nuestras <strong>Marcas</strong></h2>
          <div className="logos-container">
            <div className="logo-circle"><img src="/marca10.jpg" alt="SKKYD" /></div>
            <div className="logo-circle"><img src="/marca3.png" alt="Arthrex" /></div>
            <div className="logo-circle"><img src="/marca1.png" alt="3M" /></div>
            <div className="logo-circle"><img src="/marca2.png" alt="Aroba Ingeniería" /></div>
            <div className="logo-circle"><img src="/marca6.png" alt="Coloplast" /></div>
            <div className="logo-circle"><img src="/marca7.png" alt="BARD" /></div>
            <div className="logo-circle"><img src="/marca8.png" alt="Uniseal" /></div>
            <div className="logo-circle"><img src="/marca4.png" alt="Sell" /></div>
          </div>
          <p className="marcas-descripcion">
            <br />
            En un campo donde la precisión es crucial, elegir al proveedor <br />
            adecuado puede marcar la diferencia entre el éxito y la<br />
           conformidad.
          </p>
          <div className="letra-y">Y</div>
          <br />
          <div className="productos-banner2">
            <div className="banner-background2"></div>
            <div className="banner-overlay2">
              <div className="skew-box">
                <h1>Nuestros <br /> Productos</h1>
                <button className="btn-ver-productos" disabled>Ver Productos</button>
              </div>
            </div>
          </div>


        </section>

      </section>
      <br /><br />
      
    </>
  );
}

export default Productos;
