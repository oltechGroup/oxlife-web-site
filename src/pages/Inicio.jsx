import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useEffect } from "react";


function Inicio() {
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
              style={{
                WebkitMaskImage: 'linear-gradient(#fff 75%, transparent)',
                maskImage: 'linear-gradient(#fff 80%, transparent)'
              }}
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
      
      {/* NUESTRA IDENTIDAD */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-light text-gray-700">
            Nuestra <span className="font-bold text-orange-600">Identidad.</span>
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-10 mt-16">

            {/* Misión */}
            <div className="px-6 border-r last:border-r-0">
              <h3 className="text-xl font-semibold text-gray-700 mb-8">Misión</h3>
              <p className="text-gray-800 text-sm leading-relaxed text-base">
                Creación de valor en todos los servicios del grupo que satisfaga las expectativas y necesidades de 
                nuestros clientes y nuestro equipo humano, fundamentados en los principios de calidad, eficiencia y 
                ética profesional. 
              </p>
            </div>

            {/* Visión */}
            <div className="px-6 border-r last:border-r-0">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Visión</h3>
              <p className="text-gray-800 text-sm leading-relaxed text-base">
                Ser una empresa líder en los diversos servicios, distinguiéndose por ofrecer un servicio profesional de 
                alta calidad superando las expectativas del cliente, de gran rentabilidad y sustentabilidad en el negocio, 
                permitiendo el desarrollo profesional y personal de sus colaboradores, para así ofrecer una contribución 
                positiva a la sociedad. 
              </p>
            </div>

            {/* Valores */}
            <div className="px-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Valores</h3>
              <p className="text-gray-800 text-sm leading-relaxed text-base">
                •Liderazgo <br />
                •Humildad <br />
                •Seguridad <br />
                • Innovación <br />
                •Honestidad <br />
                •Lealtad <br />
                •Responsabilidad <br />
                •Actitud de servicio <br />
                •Respeto 
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Nuestras Marcas*/}
     <section className="py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-12">
          Nuestras <span className="font-bold text-gray-800">Marcas</span>
        </h2>

        {/* Carrusel */}
        <div className="relative w-full overflow-hidden">
          
          <div className="flex gap-16 animate-scroll">

            {/* PRIMER SET */}
            <img src="/marca1.png" className="h-12 object-contain" />
            <img src="/marca2.png" className="h-12 object-contain" />
            <img src="/marca3.png" className="h-12 object-contain" />
            <img src="/marca4.png" className="h-12 object-contain" />
            <img src="/marca5.png" className="h-12 object-contain" />
            <img src="/marca6.png" className="h-12 object-contain" />
            <img src="/marca7.png" className="h-12 object-contain" />
            <img src="/marca8.png" className="h-12 object-contain" />
            <img src="/marca9.png" className="h-12 object-contain" />
            <img src="/marca10.png" className="h-12 object-contain" />

            {/* DUPLICADO (CLAVE para loop infinito) */}
            <img src="/marca1.png" className="h-12 object-contain" />
            <img src="/marca2.png" className="h-12 object-contain" />
            <img src="/marca3.png" className="h-12 object-contain" />
            <img src="/marca4.png" className="h-12 object-contain" />
            <img src="/marca5.png" className="h-12 object-contain" />
            <img src="/marca6.png" className="h-12 object-contain" />
            <img src="/marca7.png" className="h-12 object-contain" />
            <img src="/marca8.png" className="h-12 object-contain" />
            <img src="/marca9.png" className="h-12 object-contain" />
            <img src="/marca10.png" className="h-12 object-contain" />

          </div>

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
              placeholder=""
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
    </>
  );
}
export default Inicio;
 