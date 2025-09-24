export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <p className="text-indigo-600 font-semibold mb-4">Product Designer & Frontend Developer</p>
        <p className="text-gray-600 mb-6">
          I design usable products and build front-end experiences.
          I love turning complex problems into delightful interfaces.
        </p>
        <div className="space-x-3">
          <a href="#projects" className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700">See work</a>
          <a href="#contact" className="border border-gray-300 px-4 py-2 rounded-lg hover:border-indigo-600">Get in touch</a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-60 h-60 rounded-full border-8 border-gray-100 shadow-lg overflow-hidden">
          <img src="https://via.placeholder.com/240" alt="Your photo" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
