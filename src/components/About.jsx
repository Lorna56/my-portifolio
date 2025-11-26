
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import LNPhoto from "../assets/LN.jpg";

// Animated text helper
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <p className="text-gray-900 mb-6 flex flex-wrap justify-center text-xl md:text-3xl lg:text-3xl leading-relaxed font-semibold max-w-3xl mx-auto">
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
      title: "Frontend Development",
      desc: "Crafting intuitive and responsive user interfaces that provide seamless and engaging user experiences.",
    },
    {
      title: "Backend Development",
      desc: "Designing and maintaining robust, scalable, and secure server-side systems to power applications efficiently.",
    },
    {
      title: "UI/UX Design",
      desc: "Designing intuitive and accessible interfaces using Figma and usability principles.",
    },
    {
      title: "API Development",
      desc: "Designing RESTful APIs for seamless frontend-backend integration.",
    },
    {
      title: "Performance Optimization",
      desc: "Optimizing web applications for speed, responsiveness, and scalability.",
    },
    {
      title: "Problem Solving",
      desc: "Breaking down challenges and delivering clean, maintainable engineering solutions.",
    },
  ];

  const stats = [
    { label: "Years of Experience", value: 1 },
    { label: "Projects Completed", value: 7},
    { label: "Happy Users", value: 30 },
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
      className="w-full bg-gradient-to-b from-blue-200 via-blue-200 to-blue-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-12 text-gray-900"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col items-center justify-center gap-12">
          <div className="max-w-3xl">
            <AnimatedText
              text="I’m a junior software engineer with hands-on experience building web applications and digital products. I focus on clean UI, strong UX patterns, and pragmatic engineering."
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
                    className="text-6xl md:text-7xl font-extrabold text-blue-700 mb-3"
                  >
                    {stat.value}+
                  </motion.span>
                  <p className="text-xl md:text-2xl font-semibold text-gray-800">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <AnimatedText
              text="Interested in collaborating? I’m open to freelance and full-time roles."
              delayOffset={0.5}
            />
          </div>

          {/* Balanced Work Preview Image */}
          <motion.img
            src={LNPhoto}
            alt="Work preview"
            className="rounded-2xl shadow-2xl w-full max-w-2xl object-contain"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>

        {/* What I Do */}
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mt-20 mb-10 text-gray-900"
        >
          What I Do?
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {whatIDo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              <h4 className="text-3xl font-bold mb-4 text-gray-900">{item.title}</h4>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
