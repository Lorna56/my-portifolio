export default function Projects() {
  const projects = [
    { title: "Project One", desc: "Short blurb explaining the goal and result.", tech: "React · Node · Accessibility" },
    { title: "Project Two", desc: "Blurb about your role and design work.", tech: "Design System · Figma" },
    { title: "Project Three", desc: "Highlight the impact of the project.", tech: "Performance · SEO" },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img src="https://via.placeholder.com/600x320" alt={p.title} className="rounded mb-4" />
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 mb-2">{p.desc}</p>
            <p className="text-sm text-gray-400">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
