import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full bg-[#a63c14] text-white px-6 pt-16 pb-8">
      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Columna 1 */}
        <div>
          <h3 className="font-semibold mb-6 text-lg">Acerca de nosotros</h3>
          <ul className="space-y-3 text-white/80">
            <li><Link to="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-white transition">Catálogo</Link></li>
            <li><Link to="/nosotros" className="hover:text-white transition">Nuestra misión</Link></li>
            <li><Link to="/nosotros" className="hover:text-white transition">Acerca de</Link></li>
          </ul>
        </div>
        {/* Columna 2 */}
        <div>
          <h3 className="font-semibold mb-6 text-lg">Información de Contacto</h3>
          <ul className="space-y-3 text-white/80">
            <a href="https://wa.me/5549104955" className="hover:text-white transition"><li>(+52) 55-4910-4955</li></a>
            <a href="mailto:info.oxlife@gmail.com" className="hover:text-white transition"><li>info.oxlife@gmail.com</li></a>
          </ul>
        </div>
        {/* Columna 3 */}
        <div>
          <h3 className="font-semibold mb-6 text-lg">Catálogo de Productos</h3>
          <ul className="space-y-3 text-white/80">
            <li>Lima Corporate</li>
            <li>3M</li>
            <li>SKYYD</li>
            <li>Uniseal</li>
            <li>Arthrex</li>
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-start md:justify-end">
          <img src="/logoBL.png" alt="logo" className="w-40 opacity-90" />
        </div>
      </div>
      {/* Línea divisoria */}
      <div className="max-w-6xl mx-auto mt-14 border-t border-white/20"></div>
      {/* Parte inferior */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Redes */}
        <div className="flex gap-6 text-2xl text-white/80">
          <a href="https://www.instagram.com/grupooltech" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/OltechMexico" className="hover:text-white transition">
            <FaFacebookF />
          </a>
        </div>
        {/* Copyright */}
        <div className="text-white/70 text-sm">
          © OXLIFE 2026
        </div>
      </div>
    </footer>
  );
}