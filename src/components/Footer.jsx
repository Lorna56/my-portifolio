
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo / Name */}
        <div className="text-2xl md:text-3xl font-bold text-white cursor-pointer hover:text-indigo-400 transition">
          Lorna Naula
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 md:space-x-8 text-base md:text-lg">
          <a href="#home" className="hover:text-indigo-400 transition">Home</a>
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 md:space-x-6">
          <a href="https://github.com/Lorna56" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/naula-lorna-3513732b5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:lornanaula0042@gmail.com" className="hover:text-white transition">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-center mt-6">
        <a href="#home" className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-600 transition text-base md:text-lg">
          <FaArrowUp size={18} />
          <span>Back to Top</span>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 text-gray-500 text-sm md:text-base">
        © {new Date().getFullYear()} Lorna Naula — All rights reserved
      </div>
    </footer>
  );
}
