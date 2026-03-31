import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
           <img 
            src="/logo.png" 
            alt="Oxlife logo"
            className="h-20 md:h-25 object-contain "
          />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-9 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">Inicio</Link>
          </li>
          <li>
            <Link to="/catalogo" className="hover:text-blue-600">Catálogo</Link>
          </li>
          <li>
            <Link to="/productos" className="hover:text-blue-600">Productos</Link>
          </li>
          <li>
            <Link to="/nosotros" className="hover:text-blue-600">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto"  className="bg-orange-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-orange-600 hover:scale-105 transition-all duration-300 font-semibold">Contacto </Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-blue-600">Inicio</Link>
          <Link to="/catalogo" onClick={() => setOpen(false)} className="block hover:text-blue-600">Catálogo</Link>
          <Link to="/productos" onClick={() => setOpen(false)} className="block hover:text-blue-600">Productos</Link>
          <Link to="/nosotros" onClick={() => setOpen(false)} className="block hover:text-blue-600">Nosotros</Link>
          <Link to="/contacto" onClick={() => setOpen(false)} className="block hover:text-blue-600">Contacto </Link>
        </div>
      )}
    </nav>
  );
}