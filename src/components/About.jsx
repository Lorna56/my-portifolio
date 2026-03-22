
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import { FaCogs, FaUsers, FaGlobe, FaChartLine, FaHeart, FaCheckCircle, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiPython, SiJavascript, SiTypescript, SiFigma, SiAmazonwebservices, SiNextdotjs, SiCpanel } from "react-icons/si";

// Animated text helper
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <p className="text-gray-900 mb-6 flex flex-wrap justify-center text-lg md:text-xl lg:text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
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

export default function About() {
  const whatIDo = [
    {
      title: "Pragmatic Engineering",
      desc: "I believe in practical solutions over perfect ones. Clean code, robust architecture, and creative problem-solving—delivering real value without over-engineering.",
      icon: <FaCogs className="text-pink-500 text-4xl mb-4" />
    },
    {
      title: "Social Science Side",
      desc: "Grounded in research, behavioral patterns, and community impact. I bring human-centered insights to every project I undertake.",
      icon: <FaUsers className="text-emerald-500 text-4xl mb-4" />
    },
    {
      title: "The Intersection",
      desc: "Building software that isn't just functional, but meaningful. Technology should serve humanity, not the other way around.",
      icon: <FaGlobe className="text-pink-500 text-4xl mb-4" />
    },
    {
      title: "Results-Driven Approach",
      desc: "I focus on delivering functional, impactful solutions that solve real problems—not just code that works.",
      icon: <FaChartLine className="text-emerald-500 text-4xl mb-4" />
    },
    {
      title: "Human-Centered Design",
      desc: "With a social science background, I prioritize user empathy and create experiences that truly resonate with people.",
      icon: <FaHeart className="text-pink-500 text-4xl mb-4" />
    },
    {
      title: "Reliable & Trustworthy",
      desc: "I take ownership of my work and ensure quality at every step. You can count on me to deliver what I promise.",
      icon: <FaCheckCircle className="text-emerald-500 text-4xl mb-4" />
    },
  ];

  const stats = [
    { label: "Years Experience", value: 2 },
    { label: "Projects Completed", value: 8 },
    { label: "Certificates Completed", value: 4 },
  ];

  const controls = useAnimation();

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat) => {
            controls.start({ [stat.label]: stat.value });
          });
        }
      },
      { threshold: 0.3 }
    );

    const counter = document.getElementById("stats-section");
    if (counter) observer.observe(counter);
  }, [controls, stats]);

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-emerald-50 via-pink-50 to-emerald-100"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-900"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col items-center justify-center gap-12">
          <div className="max-w-3xl">
            <AnimatedText
              text="I thrive at the intersection of technology and society. With a background in social sciences, I bring a unique perspective to software engineering—prioritizing user empathy, ethical data use, and impactful design."
            />

            {/* Stats */}
            <div
              id="stats-section"
              className="mt-12 mb-14 grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white shadow-lg rounded-3xl py-10 px-8 text-center flex flex-col items-center justify-center hover:shadow-2xl transition"
                >
                  <motion.span
                    animate={controls}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-extrabold text-pink-500 mb-2"
                  >
                    {stat.value}+
                  </motion.span>
                  <p className="text-lg md:text-xl font-medium text-gray-800">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <AnimatedText
              text="I bring more than just technical skills to the table. Here's what makes collaborating with me a great experience."
              delayOffset={0.5}
            />
          </div>

        </div>

        {/* What I Do */}
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mt-16 mb-8 text-gray-900"
        >
          Why Work With Me?
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {whatIDo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className={`bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition duration-300 border-t-4 ${idx % 2 === 0 ? "border-pink-500" : "border-emerald-500"}`}
            >
              {item.icon}
              <h4 className="text-2xl font-bold mb-3 text-emerald-800">{item.title}</h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills & Tools Section */}
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mt-20 mb-8 text-gray-900"
        >
          Skills & Tools
        </motion.h3>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 border-t-4 border-pink-500">
            <h4 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">Programming</h4>
            <ul className="text-base text-gray-700 space-y-3">
              <li className="flex items-center gap-2"><SiJavascript className="text-yellow-400 text-xl" /> JavaScript</li>
              <li className="flex items-center gap-2"><SiTypescript className="text-blue-500 text-xl" /> TypeScript</li>
              <li className="flex items-center gap-2"><SiPython className="text-gray-700 text-xl" /> Python/Django</li>
              <li className="flex items-center gap-2"><FaReact className="text-sky-500 text-xl" /> React</li>
              <li className="flex items-center gap-2"><FaNodeJs className="text-green-600 text-xl" /> Node.js</li>
              <li className="flex items-center gap-2"><SiTailwindcss className="text-sky-400 text-xl" /> Tailwind CSS</li>
              <li className="flex items-center gap-2"><SiPostgresql className="text-blue-600 text-xl" /> PostgreSQL</li>
              <li className="flex items-center gap-2"><SiMongodb className="text-green-500 text-xl" /> MongoDB</li>
              <li className="flex items-center gap-2"><SiAmazonwebservices className="text-orange-500 text-xl" /> AWS</li>
              <li className="flex items-center gap-2"><SiNextdotjs className="text-gray-900 text-xl" /> Next.js</li>
              <li className="flex items-center gap-2"><SiCpanel className="text-orange-600 text-xl" /> cPanel</li>
              <li className="flex items-center gap-2"><FaGlobe className="text-teal-500 text-xl" /> Sevalla</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 border-t-4 border-emerald-500">
            <h4 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">Social Research</h4>
            <ul className="text-base text-gray-700 space-y-3">
              <li className="flex items-center gap-2"><FaChartLine className="text-emerald-500 text-xl" /> Data Analysis</li>
              <li className="flex items-center gap-2"><FaUsers className="text-pink-500 text-xl" /> Qualitative Research</li>
              <li className="flex items-center gap-2"><FaGlobe className="text-emerald-500 text-xl" /> Ethnography</li>
              <li className="flex items-center gap-2"><FaCogs className="text-pink-500 text-xl" /> Survey Design</li>
              <li className="flex items-center gap-2"><FaHeart className="text-emerald-500 text-xl" /> User Research</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 border-t-4 border-pink-500">
            <h4 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">Development</h4>
            <ul className="text-base text-gray-700 space-y-3">
              <li className="flex items-center gap-2"><FaGitAlt className="text-orange-500 text-xl" /> Git/GitHub</li>
              <li className="flex items-center gap-2"><FaCogs className="text-pink-500 text-xl" /> API Integration</li>
              <li className="flex items-center gap-2"><FaNodeJs className="text-emerald-500 text-xl" /> Database Management</li>
              <li className="flex items-center gap-2"><SiFigma className="text-pink-500 text-xl" /> UI/UX Design</li>
              <li className="flex items-center gap-2"><FaChartLine className="text-emerald-500 text-xl" /> Agile/Scrum</li>
              <li className="flex items-center gap-2"><FaCheckCircle className="text-pink-500 text-xl" /> CI/CD</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 border-t-4 border-emerald-500">
            <h4 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">Soft Skills</h4>
            <ul className="text-base text-gray-700 space-y-3">
              <li className="flex items-center gap-2"><FaCogs className="text-emerald-500 text-xl" /> Critical Thinking</li>
              <li className="flex items-center gap-2"><FaUsers className="text-pink-500 text-xl" /> Cross-disciplinary Comms</li>
              <li className="flex items-center gap-2"><FaHeart className="text-emerald-500 text-xl" /> Ethics in AI</li>
              <li className="flex items-center gap-2"><FaGlobe className="text-pink-500 text-xl" /> Team Leadership</li>
              <li className="flex items-center gap-2"><FaChartLine className="text-emerald-500 text-xl" /> Project Management</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
