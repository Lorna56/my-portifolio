import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import myPhoto from "../assets/NAULA.jpg";

export default function Hero() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 
                 bg-gradient-to-b from-pink-900 via-emerald-900 to-slate-900 text-white relative"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto"
      >
        <motion.p
          custom={0}
          variants={textVariant}
          className="font-medium text-emerald-300 text-xl md:text-2xl mb-4 italic"
        >
          &quot;Technology is most powerful when it empowers people, not replaces them.&quot;
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-pink-300"
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          LORNA NAULA
        </motion.h1>

        <motion.p
          custom={1}
          variants={textVariant}
          className="text-emerald-400 font-bold text-2xl md:text-3xl lg:text-4xl mb-8 max-w-3xl mx-auto leading-snug"
        >
          SOFTWARE ENGINEER &amp; SOCIAL SCIENTIST
        </motion.p>

        {/* Main Photo */}
        <div className="relative flex justify-center items-center mb-8">
          {/* Glow rings */}
          <div className="absolute w-96 h-96 rounded-full border-2 border-emerald-500/10 blur-md -z-20"></div>
          <div className="absolute w-112 h-112 rounded-full border-2 border-pink-500/10 blur-md -z-30"></div>

          {/* Orbiting Rockets */}
          <motion.div
            className="absolute text-emerald-400"
            style={{ originX: 2, originY: 2 }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <Rocket size={36} />
          </motion.div>

          <motion.div
            className="absolute text-pink-400"
            style={{ originX: -2, originY: -2 }}
            initial={{ rotate: 180 }}
            animate={{ rotate: -180 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Rocket size={36} />
          </motion.div>

          {/* Photo Container */}
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden flex justify-center items-center bg-transparent z-10">
            <img
              src={myPhoto}
              alt="Lorna Naula"
              className="w-full h-full object-cover object-center filter brightness-125 contrast-125"
            />
          </div>
        </div>

        <motion.p
          custom={2}
          variants={textVariant}
          className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          <span className="font-bold block mb-2 text-white">Bridging the Gap Between Code and Human Behavior</span>
          I build scalable digital solutions informed by deep social insights to solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={2}
          variants={textVariant}
          className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-8"
        >
          <a
            href="#projects"
            className="bg-emerald-600 text-white text-base md:text-lg px-5 py-2.5 rounded-lg shadow hover:bg-emerald-700 transition w-full md:w-auto font-medium"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-pink-400 text-pink-300 text-base md:text-lg px-5 py-2.5 rounded-lg hover:bg-pink-900/40 transition w-full md:w-auto font-medium"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          custom={3}
          variants={textVariant}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/Lorna56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/naula-lorna-3513732b5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="mailto:lornanaula0042@gmail.com"
            className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
          >
            <FaEnvelope size={26} />
          </a>
        </motion.div>

      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
