export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gray-600 mb-4">
            I'm a [Your profession] with X years experience building web apps and digital products.
            I focus on clean UI, strong UX patterns, and pragmatic engineering.
          </p>
          <ul className="flex flex-wrap gap-3 mb-4">
            <li className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md">React / JavaScript</li>
            <li className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md">UI Design (Figma)</li>
            <li className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md">Accessibility</li>
          </ul>
          <p className="text-gray-600">Interested in collaborating? I’m open to freelance and full-time roles.</p>
        </div>
        <img src="https://via.placeholder.com/420x260" alt="Work preview" className="rounded-lg shadow" />
      </div>
    </section>
  );
}
