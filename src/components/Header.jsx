
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-700 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold text-white hover:text-pink-400 transition-all duration-300"
        >
          LORNA NAULA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-300 font-medium text-base md:text-lg">
          <a href="#home" className="hover:text-emerald-400 transition-all duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-emerald-400 transition-all duration-300">
            About
          </a>
          <a href="#projects" className="hover:text-emerald-400 transition-all duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition-all duration-300">
            Contact
          </a>



          {/* Optional CTA */}
          <a
            href="#contact"
            className="ml-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-gray-200 border-t border-gray-700 px-6 py-6 space-y-4 text-center">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium hover:text-emerald-400 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium hover:text-emerald-400 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium hover:text-emerald-400 transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium hover:text-emerald-400 transition-all duration-300"
          >
            Contact
          </a>

          {/* Hire Me Button */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg mt-2 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Hire Me
          </a>


        </div>
      )}
    </header>
  );
}
