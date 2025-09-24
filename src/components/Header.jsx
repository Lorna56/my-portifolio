export default function Header() {
  return (
    <header className="sticky top-0 bg-white/70 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <a href="#home" className="font-bold text-lg">LORNA NAULA</a>
        <nav className="hidden md:flex space-x-6 font-medium text-gray-600">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </div>
    </header>
  );
}
