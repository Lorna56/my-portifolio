import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-700 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-indigo-400 transition"
        >
          LORNA NAULA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          <a href="#home" className="hover:text-indigo-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-indigo-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>

          {/* Social Icons */}
          <div className="flex space-x-5 ml-4">
            <a
              href="https://github.com/Lorna56"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/naula-lorna-3513732b5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Optional CTA */}
          <a
            href="#contact"
            className="ml-4 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-gray-200 border-t border-gray-700 px-6 py-4 space-y-4 text-center">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-indigo-400"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-indigo-400"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-indigo-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-indigo-400"
          >
            Contact
          </a>

          {/* Socials in Mobile */}
          <div className="flex justify-center space-x-6 pt-3 border-t border-gray-700">
            <a
              href="https://github.com/Lorna56"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/naula-lorna-3513732b5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// export default function Header() {
//   return (
//     <header className="sticky top-0 bg-white/70 backdrop-blur border-b border-gray-200 z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
//         <a href="#home" className="font-bold text-lg">LORNA NAULA</a>
//         <nav className="hidden md:flex space-x-6 font-medium text-gray-600">
//           <a href="#home" className="hover:text-black">Home</a>
//           <a href="#about" className="hover:text-black">About</a>
//           <a href="#projects" className="hover:text-black">Projects</a>
//           <a href="#contact" className="hover:text-black">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// }
