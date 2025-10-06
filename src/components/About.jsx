import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import LNPhoto from "../assets/LN.jpg";

// Helper to split text into words with animation
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <p className="text-gray-900 mb-6 flex flex-wrap justify-center text-lg md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
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

  // Stats configuration
  const stats = [
    { label: "Years of Experience", value: 2 },
    { label: "Projects Completed", value: 15 },
    { label: "Happy Clients", value: 8 },
  ];

  const controls = useAnimation();

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat, index) => {
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
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-10 text-gray-900"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col items-center justify-center gap-10">
          <div className="max-w-3xl">
            <AnimatedText
              text="I’m a junior software developer with hands-on experience building web applications and digital products. I focus on clean UI, strong UX patterns, and pragmatic engineering."
            />

            {/* 🔹 Stats Section (Cards) */}
            <div
              id="stats-section"
              className="mt-10 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white shadow-md rounded-2xl py-8 px-6 text-center flex flex-col items-center justify-center hover:shadow-lg transition"
                >
                  <motion.span
                    animate={controls}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-2"
                  >
                    {stat.value}+
                  </motion.span>
                  <p className="text-lg font-semibold text-gray-800">
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

          <motion.img
            src={LNPhoto}
            alt="Work preview"
            className="rounded-lg shadow-lg w-7/12 max-w-2xl h-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>

        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mt-20 mb-8 text-gray-900"
        >
          What I Do
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {whatIDo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <h4 className="text-2xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
