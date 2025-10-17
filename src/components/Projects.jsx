
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

import ONIMSPhoto from "../assets/ONIMS.jpg"; // ONIMS screenshot
import CalculatorPhoto from "../assets/Calculator.png"; // Calculator screenshot
import ToDoPhoto from "../assets/To-do.png"; // To-Do App screenshot
import QuizPhoto from "../assets/quiz.png"; // Quiz App screenshot
import WeatherPhoto from "../assets/weather.png"; // Weather App screenshot

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

export default function Projects() {
  const projects = [
    {
      title: "ONIMS",
      desc: "A secure and modular Management Information System for HR, Operations, Project tracking, and document management, built for efficiency and scalability.",
      tech: "React · Node.js · Express · MongoDB · Tailwind CSS",
      demoLink:
        "https://drive.google.com/file/d/1jpbdjzSoTjuwLMyKEcE0Hj701yT8X0Sk/view?usp=sharing",
      img: ONIMSPhoto,
    },
    {
      title: "Calculator App",
      desc: "A responsive web calculator with basic arithmetic operations and a clean user interface, perfect for quick calculations.",
      tech: "React · Vite · Tailwind CSS · Node.js",
      demoLink: "https://Lorna56.github.io/my-calculator",
      img: CalculatorPhoto,
    },
    {
      title: "To-Do Web App",
      desc: "A simple yet elegant task manager that allows users to add, update, and delete daily tasks. Built for smooth UX and real-time interactivity.",
      tech: "React · Tailwind CSS · Node.js · Express",
      demoLink: "https://Lorna56.github.io/to-do-list-app",
      img: ToDoPhoto,
    },
    {
  title: "Mini Quiz Game",
  desc: "An interactive quiz game with 20 fun questions, a timer, and confetti celebration for high scores. Built for a responsive and engaging user experience.",
  tech: "React · Tailwind CSS · JavaScript",
  demoLink: " https://lorna56.github.io/mini-quiz-game/",
  img: QuizPhoto, // make sure you import the quiz screenshot as QuizPhoto
},
{
  title: "Weather App",
  desc: "A real-time weather forecasting app that displays temperature, humidity, wind speed, and weather conditions for any city. Includes dynamic background changes and a clean, responsive UI.",
  tech: "HTML · CSS · JavaScript · OpenWeather API",
  demoLink: "https://lorna56.github.io/weather-app/",
  img: WeatherPhoto, // make sure you import the weather app screenshot as WeatherPhoto
},

  ];

  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500 text-3xl md:text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl md:text-4xl" /> },
    { name: "Express", icon: <FaNodeJs className="text-gray-700 text-3xl md:text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl md:text-4xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-3xl md:text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl md:text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl md:text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl md:text-4xl" /> },
    { name: "Python", icon: <SiPython className="text-gray-700 text-3xl md:text-4xl" /> },
    { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500 text-3xl md:text-4xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-3xl md:text-4xl" /> },
    { name: "REST APIs", icon: <FaNodeJs className="text-indigo-600 text-3xl md:text-4xl" /> },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-b from-blue-200 via-blue-200 to-blue-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-14 text-gray-900"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between h-full hover:shadow-2xl hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              {/* Top Content */}
              <div>
                <motion.a
                  href={p.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="rounded-2xl mb-6 object-contain w-full h-48 sm:h-56 md:h-64 lg:h-72"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.1 }}
                  />
                </motion.a>

                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-3 text-gray-900"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.2 }}
                >
                  {p.title}
                </motion.h3>

                <AnimatedText text={p.desc} delayOffset={0.3 + idx * 0.2} />

                <motion.p
                  className="text-base md:text-lg text-gray-700 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                >
                  {p.tech}
                </motion.p>
              </div>

              {/* Bottom - Button */}
              <motion.a
                href={p.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition self-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 + 0.4 }}
              >
                View Demo
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-14 text-gray-900"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-white text-gray-900 rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              {skill.icon}
              <span className="mt-4 font-semibold text-lg md:text-xl">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
