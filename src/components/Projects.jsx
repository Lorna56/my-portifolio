import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiPython, SiJavascript, SiTypescript, SiFigma } from "react-icons/si";

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

  // Skills with icons
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500 text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
    { name: "Express", icon: <FaNodeJs className="text-gray-700 text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-2xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
    { name: "Python", icon: <SiPython className="text-gray-700 text-2xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-2xl" /> },
    { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500 text-2xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-2xl" /> },
    { name: "REST APIs", icon: <FaNodeJs className="text-indigo-600 text-2xl" /> },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      {/* Projects Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow transition p-4 cursor-pointer"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.2,
              type: "spring",
              stiffness: 90,
            }}
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

      {/* Skills & Technologies Section */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-50 text-gray-800 rounded-lg shadow p-4 flex flex-col items-center justify-center cursor-default"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            {skill.icon}
            <span className="mt-2 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
