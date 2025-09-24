import { motion } from "framer-motion";

// Helper to animate each word
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <p className="text-gray-600 mb-2 flex flex-wrap">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: delayOffset + index * 0.05,
          }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default function Projects() {
  const projects = [
    { title: "Project One", desc: "Short blurb explaining the goal and result.", tech: "React · Node · Accessibility" },
    { title: "Project Two", desc: "Blurb about your role and design work.", tech: "Design System · Figma" },
    { title: "Project Three", desc: "Highlight the impact of the project.", tech: "Performance · SEO" },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
  <motion.div
    key={idx}
    className="bg-white rounded-lg shadow transition p-4 cursor-pointer"
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6, delay: idx * 0.2, type: "spring", stiffness: 90 }}
  >
    <motion.img
      src="https://via.placeholder.com/600x320"
      alt={p.title}
      className="rounded mb-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: idx * 0.2 + 0.1 }}
    />
    <motion.h3
      className="text-xl font-semibold mb-1"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.2 + 0.2 }}
    >
      {p.title}
    </motion.h3>
    <AnimatedText text={p.desc} delayOffset={0.3 + idx * 0.2} />
    <motion.p
      className="text-sm text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
    >
      {p.tech}
    </motion.p>
  </motion.div>
))}

      </div>
    </section>
  );
}

// export default function Projects() {
//   const projects = [
//     { title: "Project One", desc: "Short blurb explaining the goal and result.", tech: "React · Node · Accessibility" },
//     { title: "Project Two", desc: "Blurb about your role and design work.", tech: "Design System · Figma" },
//     { title: "Project Three", desc: "Highlight the impact of the project.", tech: "Performance · SEO" },
//   ];

//   return (
//     <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
//       <h2 className="text-3xl font-bold mb-8">Projects</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((p, idx) => (
//           <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
//             <img src="https://via.placeholder.com/600x320" alt={p.title} className="rounded mb-4" />
//             <h3 className="text-xl font-semibold">{p.title}</h3>
//             <p className="text-gray-600 mb-2">{p.desc}</p>
//             <p className="text-sm text-gray-400">{p.tech}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
