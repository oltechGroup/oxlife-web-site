// src/App.jsx
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useEffect } from "react";


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


    useEffect(() => {
      const interval = setInterval(() => {
        setIndiceActual((prev) =>
          prev === clientes.length - 1 ? 0 : prev + 1
        );
      }, 15000); // 15 segundos

      return () => clearInterval(interval);
    }, [clientes.length]);

  return (
    <>
    <div className="fixed inset-0 -z-10">
      <div className="absolute w-[500px] h-[500px] bg-orange-300/30 rounded-full blur-3xl bottom-0 left-0"></div>
      
      <div className="absolute w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl top-0 right-0"></div>
    </div>
      <div className="app-container">
        {/* Hero Section */}
        <section className="relative grid md:grid-cols-2 gap-10 items-center py-20 px-6 max-w-7xl mx-auto">
          {/* Lado imagen */}
          <div className="relative flex justify-center md:justify-start">
            <div className="absolute top-0 left-0 grid grid-cols-6 gap-2 z-0">
            </div>
            {/* Imagen principal */}
            <img 
              src="/medicos1.png" 
              alt="Médicos"
              className="relative z-10 w-[350px] md:w-[400px] object-cover"
            />
          </div>
          {/* Lado texto */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-light text-gray-700 leading-tight">
              Soluciones Médicas confiables <br />
              <span className="font-bold text-orange-600">
                para tu bienestar.
              </span>
            </h1>
            <p className="mt-6 text-gray-500 max-w-lg leading-relaxed mx-auto md:mx-0">
              Somos tu aliado en soluciones médicas confiables. Descubre cómo podemos
              satisfacer tus necesidades de insumos médicos con calidad, eficiencia y experiencia.
            </p>
            <div className="mt-8">
              <Link to="/contacto">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-md shadow hover:bg-orange-700 transition">
                  Contáctanos
                </button>
              </Link>
            </div>
          </div>
        </section>


        <section className="flex justify-center items-center py-2">
          <img 
            src="/OXLIFE.png" 
            alt="Oxlife logo"
            className="h-24 md:h-32 object-contain opacity-90 hover:opacity-100 transition"
          />
        </section>

        {/* Info Cards */}
       <section className="grid md:grid-cols-3 gap-20 mt-9 mb-20 justify-center max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow h-90 hover:shadow-lg transition flex flex-col justify-center py-6" >
          <h3 className="text-xl font-bold text-blue-600 text-center">Ventas</h3>
          <p className="mt-4 text-gray-600">
            Nuestro equipo altamente calificado está comprometido a satisfacer
            las necesidades de nuestros clientes mediante un trato excepcional.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow h-90 hover:shadow-lg transition flex flex-col justify-center">
          <h3 className="text-xl font-bold text-blue-600 items-center text-center">Gestión</h3>
          <p className="mt-4 text-gray-600">
            Control y manejo eficiente de los recursos materiales y supervisión
            contable para alcanzar las metas establecidas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow h-90 hover:shadow-lg transition flex flex-col justify-center">
          <h3 className="text-xl font-bold text-blue-600 text-center">Servicio</h3>
          <p className="mt-4 text-gray-600">
            Nuestro personal está listo para atender a nuestros clientes con
            atención personalizada y eficiente.
          </p>
        </div>
      </section>
      </div>
      
      {/*SECTION ABOUT*/}
      <section className="relative w-full min-h-[500px] flex items-center justify-center">
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Rectangle 52.png')" }}
        ></div>
        {/* Overlay blanco difuminado */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        {/* Contenido */}
        <div className="relative z-10 max-w-2xl text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 leading-tight">
            Acerca de <br />
            <span className=" font-bold text-orange-600">OXLIFE.</span>
          </h2>
          <p className="mt-8 text-black-600 leading-relaxed text-xl md:text-2xl">
            OXLIFE es una empresa mexicana con sede en Cholula, Puebla, dedicada a la
            venta de insumos médicos. Contamos con un equipo capacitado y experimentado,
            comprometido a brindar soluciones confiables, económicas y eficientes.
          </p>
        </div>
      </section>
      <section className="white-spacer"></section>

        {/* Clientes-carrusel */}  
      <section className="mt-20 mb-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros <span className="text-green-600">Clientes</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={clientes[indiceActual].imagen} 
                alt="cliente"
                className="w-[500px] h-[320px] object-cover rounded-2xl shadow-lg transition duration-500"
              />
              {/* Flecha izquierda */}
              <button 
                onClick={handlePrev}
                className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
              >
                ←
              </button>
              {/* Flecha derecha */}
              <button 
                onClick={handleNext}
                className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100"
              >
                →
              </button>
            </div>
          </div>
          {/* Card de texto */}
          <div className="bg-gray-100 rounded-2xl shadow-md p-8 max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left">
              {clientes[indiceActual].nombre}
            </h3>
            <p className="mt-6 text-gray-700 leading-relaxed">
              <span className="font-bold text-orange-500">Dirección:</span>{" "}
              {clientes[indiceActual].direccion}
            </p>
            <p className="mt-4 text-gray-700">
              <span className="font-bold text-orange-500">Contacto:</span>{" "}
              {clientes[indiceActual].contacto}
            </p>
          </div>
        </div>
      </section>

      {/* Politica de calidad*/}
      <section className="relative w-full min-h-screen">
        {/* Fondo */}
        <div className="absolute inset-0">
          <div 
            className="h-[80%] bg-cover bg-center"
            style={{ backgroundImage: "url('/Fondo-2.png')" }}>
          </div>
          <div className="h-[20%] bg-orange-600"></div>
        </div>
        {/* Card */}
        <div className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 w-full px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-700">
              Política de <br />
              <span className="font-bold text-orange-600">Calidad</span>
            </h2>
            <p className="mt-6 text-gray-800 text-lg leading-relaxed max-w-2xl mx-auto">
              En OXLIFE, nos comprometemos a mantener y mejorar nuestros estándares
              de calidad, brindando productos seguros, confiables y eficaces.
              Nuestro equipo trabaja bajo un sistema de gestión basado en buenas prácticas.
            </p>
          </div>
        </div>
      </section>


    {/* Formulario */}
    <section className="w-full bg-orange-600 text-white py-40 px-6 -mt-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-light mb-20 text-center">
          Contacto
        </h2>
        <form 
          action="https://formsubmit.co/ddiegvan.09@gmail.com"
          method="POST"
          className="flex flex-col gap-16"
        >
          <input type="hidden" name="_captcha" value="false" />
          {/* INPUT BASE REUTILIZABLE */}
          <div className="relative">
            <input
              type="text"
              name="nombre"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-0 border-b border-white/60 text-white pt-6 pb-2 focus:outline-none focus:border-white"
            />
            <label className="absolute left-0 top-6 text-white/70 transition-all duration-200 pointer-events-none
              peer-focus:opacity-0
              peer-not-placeholder-shown:opacity-0">
              Nombre
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="asunto"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-0 border-b border-white/60 text-white pt-6 pb-2 focus:outline-none focus:border-white"
            />
            <label className="absolute left-0 top-6 text-white/70 transition-all duration-200 pointer-events-none
              peer-focus:opacity-0
              peer-not-placeholder-shown:opacity-0">
              Asunto
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="correo"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-0 border-b border-white/60 text-white pt-6 pb-2 focus:outline-none focus:border-white"
            />
            <label className="absolute left-0 top-6 text-white/70 transition-all duration-200 pointer-events-none
              peer-focus:opacity-0
              peer-not-placeholder-shown:opacity-0">
              Correo electrónico o teléfono
            </label>
          </div>
          <div className="relative">
            <textarea
              name="mensaje"
              required
              rows="4"
              placeholder=" "
              className="peer w-full bg-transparent border-0 border-b border-white/60 text-white pt-6 pb-2 focus:outline-none resize-none focus:border-white"
            ></textarea>
            <label className="absolute left-0 top-6 text-white/70 transition-all duration-200 pointer-events-none
              peer-focus:opacity-0
              peer-not-placeholder-shown:opacity-0">
              Mensaje
            </label>
          </div>
          <button
            type="submit"
            className="bg-white text-orange-600 px-10 py-3 font-semibold rounded self-end hover:bg-gray-100 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
    
    
    {/* FOOTER */}
    <footer className="w-full bg-[#a63c14] text-white px-6 py-12">
      {/* CONTENIDO */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Columna 1 */}
        <div>
          <h3 className="font-bold mb-4">Acerca de nosotros</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link to="/" className="block hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/catalogo" className="block hover:text-white transition">
                Catálogo
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="block hover:text-white transition">
                Nuestra misión
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="block hover:text-white transition">
                Acerca de
              </Link>
            </li>
          </ul>
        </div>
          

        {/* Columna 2 */}
        <div>
          <h3 className="font-bold mb-4">Información de Contacto</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href="https://wa.me/5549104955" className="hover:text-white">
                (+52) 55-4910-4955
              </a>
            </li>
            <li>
              <a href="mailto:info.oxlife@gmail.com" className="hover:text-white">
                info.oxlife@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="font-bold mb-4">Catálogo de Productos</h3>
          <ul className="space-y-2 text-white/80">
            <li>Lima Corporate</li>
            <li>3M</li>
            <li>SKYYD</li>
            <li>Uniseal</li>
            <li>Arthrex</li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center md:justify-end">
          <img src="/logoBL.png" alt="OXLIFE logo" className="w-32 opacity-90" />
        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/30 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Redes */}
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/grupooltech">
            <img src="/instagram.png" alt="Instagram" className="w-7 hover:scale-110 transition"/>
          </a>
          <a href="https://www.facebook.com/OltechMexico">
            <img src="/facebook.png" alt="Facebook" className="w-7 hover:scale-110 transition"/>
          </a>
        </div>

        {/* Texto */}
        <p className="text-sm text-white/70">
          © OXLIFE 2025
        </p>

      </div>

    </footer>
     
    </>
  );
}


export default App;
 