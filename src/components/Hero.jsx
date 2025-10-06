import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import myPhoto from "../assets/Naula.jpg.jpg";

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
      {/* Text Section */}
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
          className="text-indigo-400 font-bold text-2xl md:text-3xl mb-6"
        >
          JUNIOR SOFTWARE DEVELOPER
        </motion.p>

        {/* Main Photo below the title */}
        <div className="relative flex justify-center items-center mb-8">
          {/* Glow rings */}
          <div className="absolute w-80 h-80 rounded-full border-4 border-indigo-500/30 blur-sm"></div>
          <div className="absolute w-96 h-96 rounded-full border-4 border-pink-500/20 blur-md"></div>

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

          {/* Main Photo */}
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-8 border-indigo-300 shadow-2xl 
                          overflow-hidden flex justify-center items-center bg-indigo-950/30 z-10">
            <img
              src={myPhoto}
              alt="Lorna Naula"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <motion.p
          custom={2}
          variants={textVariant}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Passionate about crafting clean, maintainable code and intuitive
          interfaces that make technology accessible and enjoyable.
        </motion.p>

        <motion.div custom={3} variants={textVariant} className="space-x-4">
          <a
            href="#projects"
            className="bg-indigo-600 text-white text-lg px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            See work
          </a>
          <a
            href="#contact"
            className="border border-gray-400 text-lg px-6 py-3 rounded-lg hover:border-indigo-400 transition"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import { Rocket } from "lucide-react";
// import myPhoto from "../assets/Naula.jpg.jpg";

// export default function Hero() {
//   const textVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     }),
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 
//                  bg-gradient-to-b from-blue-800 via-indigo-900 to-slate-900 text-white"
//     >
//       {/* Text Section */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold mb-6 text-indigo-300"
//           animate={{ x: [0, 10, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//         >
//           LORNA NAULA
//         </motion.h1>

//         <motion.p
//           custom={1}
//           variants={textVariant}
//           className="text-indigo-400 font-bold text-2xl md:text-3xl mb-6"
//         >
//           JUNIOR SOFTWARE DEVELOPER
//         </motion.p>

//         <motion.p
//           custom={2}
//           variants={textVariant}
//           className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
//         >
//           Passionate about crafting clean, maintainable code and intuitive
//           interfaces that make technology accessible and enjoyable.
//         </motion.p>

//         <motion.div custom={3} variants={textVariant} className="space-x-4">
//           <a
//             href="#projects"
//             className="bg-indigo-600 text-white text-lg px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
//           >
//             See work
//           </a>
//           <a
//             href="#contact"
//             className="border border-gray-400 text-lg px-6 py-3 rounded-lg hover:border-indigo-400 transition"
//           >
//             Get in touch
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Image Section */}
//       <div className="relative flex justify-center items-center mt-16">
//         {/* Subtle static glow rings (no animation) */}
//         <div className="absolute w-80 h-80 rounded-full border-4 border-indigo-500/30 blur-sm"></div>
//         <div className="absolute w-96 h-96 rounded-full border-4 border-pink-500/20 blur-md"></div>

//         {/* Orbiting Rockets */}
//         <motion.div
//           className="absolute text-indigo-400"
//           style={{ originX: 2, originY: 2 }}
//           initial={{ rotate: 0 }}
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//         >
//           <Rocket size={36} />
//         </motion.div>

//         <motion.div
//           className="absolute text-pink-400"
//           style={{ originX: -2, originY: -2 }}
//           initial={{ rotate: 180 }}
//           animate={{ rotate: -180 }}
//           transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//         >
//           <Rocket size={36} />
//         </motion.div>

//         {/* Main Photo */}
//         <motion.div
//           className="w-64 h-64 md:w-72 md:h-72 rounded-full border-8 border-indigo-300 shadow-2xl 
//                      overflow-hidden relative z-10 flex justify-center items-center bg-indigo-950/30"
//           initial={{ scale: 0.9 }}
//           animate={{
//             scale: [1, 1.02, 1],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 5,
//             ease: "easeInOut",
//           }}
//         >
//           <img
//             src={myPhoto}
//             alt="Lorna Naula"
//             className="w-full h-full object-cover object-center"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
