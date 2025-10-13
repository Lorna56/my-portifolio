
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
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
                 bg-gradient-to-b from-blue-800 via-indigo-900 to-slate-900 text-white"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 text-indigo-300"
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          LORNA NAULA
        </motion.h1>

        <motion.p
          custom={1}
          variants={textVariant}
          className="text-indigo-400 font-bold text-3xl md:text-4xl lg:text-5xl mb-6 max-w-3xl mx-auto leading-snug"
        >
          JUNIOR SOFTWARE DEVELOPER
        </motion.p>

        {/* Main Photo */}
        <div className="relative flex justify-center items-center mb-8">
          {/* Glow rings */}
          <div className="absolute w-96 h-96 rounded-full border-2 border-indigo-500/10 blur-md -z-20"></div>
          <div className="absolute w-112 h-112 rounded-full border-2 border-pink-500/10 blur-md -z-30"></div>

          {/* Orbiting Rockets */}
          <motion.div
            className="absolute text-indigo-400"
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
          className="text-gray-300 text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Passionate about crafting clean, maintainable code and intuitive
          interfaces that make technology accessible and enjoyable.
        </motion.p>

        <motion.div custom={3} variants={textVariant} className="space-x-4">
          <a
            href="#projects"
            className="bg-indigo-600 text-white text-lg md:text-xl px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Explore my work
          </a>
          <a
            href="#contact"
            className="border border-gray-400 text-lg md:text-xl px-6 py-3 rounded-lg hover:border-indigo-400 transition"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
