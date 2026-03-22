import { motion } from "framer-motion";

import ONIMSPhoto from "../assets/ONIMS.jpg";
import MedFundPhoto from "../assets/MedFund.png";
import CalculatorPhoto from "../assets/Calculator.png";
import ToDoPhoto from "../assets/To-do.png";
import QuizPhoto from "../assets/quiz.png";
import WeatherPhoto from "../assets/Weather.png";
import BeyondPhoto from "../assets/Beyond.png";
import InvoiceBoxPhoto from "../assets/invoice.png";

export default function Projects() {
  const projects = [
    {
      title: "MedFund",
      desc: "A scalable healthcare funding platform with secure data management and efficient backend systems, supporting seamless user interactions and transactions.",
      tech: "Next.js · Tailwind CSS · PostgreSQL · Sevalla",
      demoLink:
        "https://drive.google.com/file/d/1bSOX6OLpBUHeBIfpuC91yyXub2FcCYT4/view?usp=drivesdk",
      img: MedFundPhoto,
    },
    {
      title: "ONIMS",
      desc: "A secure and modular MIS for HR, project tracking, and document management.",
      tech: "React · Node.js · Express · MongoDB · Tailwind CSS",
      demoLink:
        "https://drive.google.com/file/d/1jpbdjzSoTjuwLMyKEcE0Hj701yT8X0Sk/view?usp=sharing",
      img: ONIMSPhoto,
    },
    {
      title: "Calculator App",
      desc: "A responsive calculator with clean UI and smooth interactions.",
      tech: "React · Vite · Tailwind CSS",
      demoLink: "https://Lorna56.github.io/my-calculator",
      img: CalculatorPhoto,
    },
    {
      title: "InvoiceBox",
      desc: "A modern invoicing system with tracking, payments, and reporting.",
      tech: "React · Node.js · MongoDB",
      demoLink: "https://Lorna56.github.io/invoice-box",
      img: InvoiceBoxPhoto,
    },
    {
      title: "Beyond Tech Website",
      desc: "A digital solutions company landing page with animations and forms.",
      tech: "HTML · CSS · JavaScript · Bootstrap",
      demoLink: "https://lorna56.github.io/beyond-tech/",
      img: BeyondPhoto,
    },
    {
      title: "To-Do Web App",
      desc: "A simple task manager with CRUD operations and a clean UI.",
      tech: "React · Tailwind · Node.js",
      demoLink: "https://Lorna56.github.io/to-do-list-app",
      img: ToDoPhoto,
    },
    {
      title: "Mini Quiz Game",
      desc: "A 20-question quiz game with a timer and score animations.",
      tech: "React · Tailwind CSS",
      demoLink: "https://lorna56.github.io/mini-quiz-game/",
      img: QuizPhoto,
    },
    {
      title: "Weather App",
      desc: "A real-time weather forecasting interface using OpenWeather API.",
      tech: "HTML · CSS · JavaScript",
      demoLink: "https://lorna56.github.io/weather-app/",
      img: WeatherPhoto,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-gradient-to-b from-emerald-50 via-pink-50 to-emerald-100"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-extrabold mb-10 text-gray-900"
        >
          Projects
        </motion.h2>

        <div className="relative w-full mb-16">

          <button
            onClick={() =>
              document.getElementById("projectsScroll").scrollBy({
                left: -350,
                behavior: "smooth",
              })
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-20 hover:scale-110 transition text-pink-500"
          >
            &laquo;
          </button>

          <div
            id="projectsScroll"
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10 py-4"
          >
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                className="min-w-[240px] max-w-[240px] bg-white rounded-2xl shadow-md p-4 flex-shrink-0 hover:shadow-xl hover:scale-105 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <a href={p.demoLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-xl mb-3 object-cover w-full h-28"
                  />
                </a>

                <h3 className="text-lg font-bold mb-1">{p.title}</h3>

                <p className="text-sm text-gray-700 leading-snug line-clamp-2 mb-2">
                  {p.desc}
                </p>

                <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                  {p.tech}
                </p>

                <a
                  href={p.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-500 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-emerald-600 transition"
                >
                  View Demo
                </a>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() =>
              document.getElementById("projectsScroll").scrollBy({
                left: 350,
                behavior: "smooth",
              })
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-20 hover:scale-110 transition text-pink-500"
          >
            &raquo;
          </button>
        </div>

      </div>
    </section>
  );
}
